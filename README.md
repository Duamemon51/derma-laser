# Derma Laser Studio – Next.js

SEO-anpassad och responsiv Next.js-sida byggd efter mockupen.

## Starta lokalt

```bash
npm install
npm run dev
```

Öppna `http://localhost:3000`.

## Bygg för produktion

```bash
npm run build
npm start
```

## SEO som ingår

- Next.js Metadata API
- Canonical URL
- Open Graph och Twitter metadata
- robots.txt via `app/robots.ts`
- sitemap.xml via `app/sitemap.ts`
- JSON-LD / Schema.org för BeautySalon
- Semantiska rubriker och sektioner
- Alt-texter på bilder
- Responsiva `next/image`-bilder
- Interna ankarlänkar

## Viktigt före publicering

Byt domänen `https://www.dermalaserstudio.se` i `app/layout.tsx`, `app/sitemap.ts` och JSON-LD om annan domän ska användas. Uppdatera även kontaktuppgifter och länkar till det riktiga bokningssystemet.
