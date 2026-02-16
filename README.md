# jsonresume-theme-creative-confidence

ATS-friendly JSON Resume theme that is print- and publish-ready.

## Local usage

From the workspace root:

```bash
npm install
resume validate resume.json
resume serve --theme creative-confidence
resume export output.pdf --theme creative-confidence
```

If `resume` is not globally installed:

```bash
npx resume-cli validate resume.json
npx resume-cli serve --theme creative-confidence
npx resume-cli export output.pdf --theme creative-confidence
```

## Notes

- Uses only standard JSON Resume schema fields in v1.
- No filesystem reads at runtime (`render(resume)` is self-contained).
- Optimized for Letter print output and concise section spacing.
