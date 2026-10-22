# Portfolio

Static personal portfolio built with [Astro](https://astro.build). One page, no client framework, about 1 KB of inline JavaScript.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # static output in dist/
```

- Content lives in `src/data.ts`; layout in `src/pages/index.astro`; styles in `src/styles/global.css`.
- Project screenshots (`src/assets/projects`) are captures of the live deployments; Astro converts them to AVIF/WebP at build time.
- Certificate images and PDFs are the original files.
- Organization logos were downloaded from each organization's official website or official LinkedIn page.

Deployed on Vercel (Hobby). `vercel.json` sets security and caching headers.
