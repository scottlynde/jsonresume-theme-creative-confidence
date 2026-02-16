# jsonresume-theme-creative-confidence

Creative Confidence is an ATS-friendly [JSON Resume](https://jsonresume.org/) theme with a clean two-column design, print-optimized pagination, and customizable styling.

## Features

- ATS-friendly HTML output (real text, semantic section structure, no canvas/image text)
- Professional two-column layout with a strong header and right-side detail panel
- PDF footer support (centered, italic, light gray)
- Print pagination tuned so individual work entries do not spill across pages in normal cases
- Letter-sized PDF export defaults through `pdfRenderOptions`
- Serverless-compatible renderer (no `fs`, no runtime file loading, no network reads)

## JSON Resume compatibility

This theme follows the JSON Resume theme guidance:

- Exposes a `render(resume)` function that returns HTML
- Uses package naming convention `jsonresume-theme-*`
- Supports optional/missing fields gracefully
- Inlines CSS in the rendered HTML
- Includes print CSS for reliable PDF output

## Install

```bash
npm install jsonresume-theme-creative-confidence
```

Theme slug:

- `creative-confidence`

## Use with CLI

```bash
npx resume-cli validate resume.json
npx resume-cli serve --resume resume.json --theme creative-confidence
npx resume-cli export output.pdf --resume resume.json --theme creative-confidence
```

## What gets rendered

- `basics` (name, label, image, contact, profiles, summary)
- `work` (position, organization, dates, summary, highlights)
- `education`
- `certificates`
- `skills`

## Quick customization

All style tokens are in `index.js` inside the CSS `:root` block.

### 1) Change the font

Edit the `font-family` in the `html, body` rule:

```css
font-family: Aptos, "Gill Sans MT", "Gill Sans", Calibri, "Trebuchet MS", sans-serif;
```

### 2) Change panel colors (header + right panel)

Edit these variables in `:root`:

```css
--header-bg: #0f274d;
--right-bg: #edf4ff;
--right-text: #0f274d;
```

### 3) Change footer text

Footer text is currently generated from `basics.name` + `basics.label` in `render()`:

```js
const footerText = [basics.name, basics.label].filter(Boolean).join(": ");
```

You can replace that with any static or data-driven text, for example:

```js
const footerText = "Some Text — Some Other Text";
```

### 4) Change footer style/position

Edit `.print-footer` inside `@media print`:

- `bottom` controls vertical offset
- `font-size`, `font-style`, `color` control appearance
- `justify-content` controls horizontal alignment

## ATS notes

- Content remains selectable text in HTML/PDF
- Links are real anchors
- Section and heading structure is preserved for parsing
- Decorative icons are lightweight and do not replace critical text

## PDF behavior

The theme exports `pdfRenderOptions` with:

- `mediaType: "print"`
- explicit page margins (`0.32in` all sides)

This ensures `@media print` rules are applied in `resume-cli` PDF generation.

## Local development

```bash
npx resume-cli serve --resume resume.json --theme creative-confidence
npx resume-cli export Creative-Confidence-theme-preview.pdf --resume resume.json --theme creative-confidence
```

## License

MIT
