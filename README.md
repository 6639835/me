# Personal CV Website

A terminal-themed personal website for showcasing who you are, your projects, and your resume. Dark, monospaced, command-line aesthetic — your CV presented as a terminal session.

Built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Terminal aesthetic** — neofetch hero, `man` page bio, `git log` experience, `tree` education, skill bars, typing animations
- **Single content source** — Edit `src/content/profile.ts` to update everything
- **Resume page** — PDF download + inline preview at `/resume`
- **Static export** — Deploys anywhere (Vercel, Netlify, GitHub Pages)
- **SEO-ready** — OG tags, JSON-LD Person schema, sitemap, robots.txt
- **Accessible** — Skip-to-content, focus-visible, reduced motion support
- **Responsive** — Works on all screen sizes

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit Your Content

All content lives in **one file**: `src/content/profile.ts`

Update your name, headline, bio, projects, education, experience, skills, awards, and "now" section. The site rebuilds instantly.

## Replace Your Resume

Drop your PDF into `public/resume.pdf` — that's it.

## Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy — zero configuration needed

## Custom Domain

After deploying:

1. Add your domain in Vercel Settings → Domains
2. Update `siteUrl` in `src/content/profile.ts`
3. Update `public/robots.txt` and `public/sitemap.xml` with your domain

## Add OG Image

Replace `public/og-image.png` with a 1200×630px image.

## Project Structure

```
src/
  app/
    page.tsx              → Home (terminal CV)
    layout.tsx            → Root layout, SEO, fonts
    globals.css           → Base styles
    resume/page.tsx       → Resume download page
  content/
    profile.ts            → ALL your content (edit this!)
  components/
    demos/
      TerminalDemo.tsx    → Terminal-style layout
public/
  resume.pdf              → Your resume (replace this!)
  sitemap.xml
  robots.txt
```

## Tech Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (typing + scroll animations)
- **JetBrains Mono** (Google Fonts)
