#!/usr/bin/env python3
"""Resize and compress site images (WebP + JPEG/PNG fallbacks)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "images"

PRODUCT_WEBP = [
    "Floor-front-trans",
    "Floor-Back-Trans",
    "Wall-Floor-Front-Trans",
    "Wall-Floor-Back-Trans",
    "Multipurpose-Front-Trans",
    "Multipurpose-Back-Trans",
]

PRODUCT_MAX_W = 1100
PHOTO_MAX_W = 1400
WEBP_QUALITY = 84
JPEG_QUALITY = 85


def size_mb(path: Path) -> float:
    return path.stat().st_size / (1024 * 1024)


def resize_if_wider(im: Image.Image, max_w: int) -> Image.Image:
    w, h = im.size
    if w <= max_w:
        return im
    nh = int(h * max_w / w)
    return im.resize((max_w, nh), Image.Resampling.LANCZOS)


def save_webp(im: Image.Image, path: Path) -> None:
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
    im.save(path, format="WEBP", quality=WEBP_QUALITY, method=6)


def process_product(stem: str) -> None:
    src = IMG / f"{stem}.png"
    if not src.exists():
        print(f"skip (no source png): {stem}")
        return
    im = Image.open(src)
    im = resize_if_wider(im, PRODUCT_MAX_W)
    out = IMG / f"{stem}.webp"
    save_webp(im, out)
    src.unlink()
    print(f"{stem}.webp: {size_mb(out):.2f}MB")


def process_photo(stem: str) -> None:
    for ext in (".png", ".jpg"):
        src = IMG / f"{stem}{ext}"
        if src.exists():
            break
    else:
        print(f"skip: {stem}")
        return
    im = Image.open(src).convert("RGB")
    im = resize_if_wider(im, PHOTO_MAX_W)
    jpg = IMG / f"{stem}.jpg"
    webp = IMG / f"{stem}.webp"
    im.save(jpg, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
    save_webp(im, webp)
    if src != jpg:
        src.unlink()
    print(f"{stem}: jpg {size_mb(jpg):.2f}MB, webp {size_mb(webp):.2f}MB")


def process_logo(name: str) -> None:
    src = IMG / name
    if not src.exists():
        return
    im = Image.open(src)
    im = resize_if_wider(im, 1200)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
    im.save(src, format="PNG", optimize=True, compress_level=9)
    save_webp(im, src.with_suffix(".webp"))
    print(f"{name}: png {size_mb(src):.2f}MB")


def main() -> None:
    for stem in PRODUCT_WEBP:
        webp = IMG / f"{stem}.webp"
        if webp.exists():
            continue
        process_product(stem)

    for stem in ("home", "about"):
        process_photo(stem)

    process_logo("logo-lockup.png")

    total = sum(f.stat().st_size for f in IMG.iterdir() if f.is_file())
    print(f"\nimages/ total: {total / (1024 * 1024):.2f} MB")


if __name__ == "__main__":
    main()
