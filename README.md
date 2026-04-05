# Portfolio — Bold & Creative — Next.js Starter

An editorial brutalist developer portfolio built with Next.js 15, TypeScript, and CSS Modules.  
Palette: cream + electric yellow + black. Fonts: Bebas Neue (display) + Syne (body).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
portfolio-bold/
├── app/
│   ├── globals.css       # Design tokens, fonts, global resets
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Nav.tsx / .css    # Black navbar with yellow accents
│   ├── Hero.tsx / .css   # Full-height hero with marquee ticker
│   ├── About.tsx / .css  # Two-column with stat highlights
│   ├── Work.tsx / .css   # Numbered job rows with hover fill
│   ├── Projects.tsx/.css # 3-column card grid
│   ├── Contact.tsx/.css  # Dark full-width CTA section
│   └── Footer.tsx / .css # Minimal dark footer
└── public/
    └── resume.pdf        # Drop résumé here
```

## Customisation Checklist

### Personal info
- `app/layout.tsx` — title, description, URL in `metadata`
- `components/Nav.tsx` — initials in `.logo`
- `components/Hero.tsx` — name, tagline, marquee tech stack
- `components/About.tsx` — bio paragraphs + stats (`n`, `label`)
- `components/Contact.tsx` — email + social links

### Work experience
Edit the `jobs` array in `components/Work.tsx`:
```ts
{ n: "01", company: "...", role: "...", period: "...", desc: "...", tags: [...] }
```

### Projects
Edit the `projects` array in `components/Projects.tsx`:
```ts
{ name: "...", year: "2024", desc: "...", tags: [...], github: "...", demo: "..." }
```

### Design tokens (`app/globals.css`)
```css
:root {
  --bg: #f2ede4;       /* Page background (cream) */
  --fg: #0d0d0b;       /* Primary / black */
  --yellow: #ffe600;   /* Accent colour — change this to rebrand instantly */
  --muted: #5a5650;    /* Secondary text */
}
```

## Deployment

```bash
npm i -g vercel
vercel
```
