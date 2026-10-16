---
name: palenquilombo-brand
description: Brand system for the Palenquilombo Capoeira landing site — color palette, typography, tone of voice, page/section structure, and bilingual (ES/PT) conventions. Use when adding or editing sections, components, copy, or styles in this repo.
license: MIT
metadata:
  author: palenquilombo
  version: '1.0'
---

# Palenquilombo Capoeira — Brand System

Project: landing page for the capoeira group **Palenquilombo Capoeira**, led by
**Mestre Dragão**, based in Bogotá (Colombia).

Stack: **Astro + Vite**, installed with **pnpm** (npm is not available in this
environment). Static output. Image optimization uses **Sharp** via `astro:assets`.

## Color palette

Derived from the AICA 2026 shirt artwork (`fotos/camiseta.jpeg`) and the group
logo. Defined as CSS variables in `src/styles/global.css` — always use the
variables, never hard-code hex values in components.

| Token                  | Hex       | Use                                   |
| ---------------------- | --------- | ------------------------------------- |
| `--c-terracotta`       | `#c05a36` | Primary brand / accents               |
| `--c-terracotta-dark`  | `#a2380f` | Buttons, strong accents               |
| `--c-terracotta-light` | `#d35f30` | Highlights on dark                    |
| `--c-red` / `--c-red-deep` | `#c41e27` / `#8f151c` | Logo red, CTA gradient    |
| `--c-charcoal` / `--c-ink` | `#231e1f` / `#17130f` | Dark sections, text on light  |
| `--c-sand` / `--c-cream` / `--c-paper` | `#d9cfc0` / `#efe6d7` / `#faf5ec` | Light backgrounds |
| `--c-wood` / `--c-wood-light` | `#5f4836` / `#8a6a4f` | Neutral brown accents       |
| `--c-olive` / `--c-gold` | `#7f8446` / `#c9a24b` | Secondary accents, focus rings    |

Rules:
- Dark sections use `--c-text-on-dark`; light sections use `--c-text`.
- Primary CTAs use the terracotta gradient (`--c-terracotta` → `--c-terracotta-dark`).
- Keep text contrast at WCAG AA.

## Typography

Self-hosted via `@fontsource-variable` (no CDN).
- Display / headings: **Oswald Variable** (`--font-display`) — uppercase, tracked.
- Body: **Inter Variable** (`--font-body`).
- Never add a Google Fonts `<link>`; import from `@fontsource-variable/*` in the layout.

## Structure

- Pages: `src/pages/index.astro` (ES) and `src/pages/pt/index.astro` (PT).
- Section components in `src/components/` (Hero, About, Gallery, Videos, Schedule,
  CtaBand, Contact, Footer, Header, LanguageSwitcher).
- Shared data in `src/consts.ts` (`SITE`, `SCHEDULE`).
- Section anchors are language-independent: `#inicio`, `#about`, `#gallery`,
  `#videos`, `#schedule`, `#contact` — reuse them across locales.

## Bilingual (ES default, PT secondary)

- Astro i18n in `astro.config.mjs`: `defaultLocale: 'es'`, `locales: ['es','pt']`,
  `prefixDefaultLocale: false`.
- All copy lives in `src/i18n/ui.ts` under `translations.es` / `translations.pt`.
  **Never hard-code user-facing text in components** — add it to both locales.
- Get the locale with `getLangFromUrl(Astro.url)` and copy with
  `useTranslations(lang)`.
- The language switcher must link to the equivalent route in the other locale
  (`getRelativeLocaleUrl` from `astro:i18n`).

## Tone of voice

- Warm, welcoming, communal. Capoeira is music + game + community ("axé", "roda",
  "ginga", "jogo"). Spanish and Brazilian-Portuguese flavor is welcome.
- Keep it short and energetic; sentence case for body, uppercase for headings.

## Key facts

- Sede: **Casary SAS — Cl. 72A #74A-77, Bogotá, Colombia** (Google Maps embed in
  the Contact section; URL lives in `src/consts.ts`).
- Horarios: **Martes 7:45–9:45 PM** · **Sábados 10:00–12:00**.
- WhatsApp / Instagram / email are **placeholders** (`SITE.whatsapp` etc. are empty
  in `src/consts.ts`). Fill them in and the Contact section links automatically.
