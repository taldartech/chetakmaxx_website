#!/usr/bin/env python3
"""Patch all *.html: early layout.js + IIFE-safe tailwind.config."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FOOTER_OLD = (
    "    <script src=\"assets/js/layout.js\"></script>\n"
    "    <script src=\"https://unpkg.com/aos@2.3.4/dist/aos.js\"></script>"
)
FOOTER_NEW = "    <script src=\"https://unpkg.com/aos@2.3.4/dist/aos.js\"></script>"

MARKER = '<div id="site-header"></div>'
EARLY = MARKER + "\n    <script src=\"assets/js/layout.js\"></script>"

OPEN_OLD = "    <script>\n      tailwind.config = {"
OPEN_NEW = (
    "    <script>\n"
    "      (function () {\n"
    "        try {\n"
    "          if (typeof tailwind === 'undefined') return;\n"
    "          tailwind.config = {"
)

CLOSE_OLD = (
    "          },\n"
    "        },\n"
    "      };\n"
    "    </script>\n"
    "    <link href=\"https://unpkg.com/aos@2.3.4/dist/aos.css\" rel=\"stylesheet\" />"
)
CLOSE_NEW = (
    "          },\n"
    "        },\n"
    "      };\n"
    "        } catch (e) {}\n"
    "      })();\n"
    "    </script>\n"
    "    <link href=\"https://unpkg.com/aos@2.3.4/dist/aos.css\" rel=\"stylesheet\" />"
)


def main():
    for path in sorted(ROOT.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        orig = text

        if FOOTER_OLD in text:
            text = text.replace(FOOTER_OLD, FOOTER_NEW, 1)
        if MARKER in text and EARLY not in text:
            if text.count(MARKER) == 1:
                text = text.replace(MARKER, EARLY, 1)

        if OPEN_OLD in text and CLOSE_OLD in text:
            text = text.replace(OPEN_OLD, OPEN_NEW, 1)
            text = text.replace(CLOSE_OLD, CLOSE_NEW, 1)

        if text != orig:
            path.write_text(text, encoding="utf-8")
            print("updated:", path.name)
        else:
            print("unchanged:", path.name)


if __name__ == "__main__":
    main()
