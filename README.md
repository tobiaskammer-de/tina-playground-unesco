# CMS-Playground — UNESCO-Schule Essen

Test-Projekt zum Evaluieren von **Sveltia CMS** (Drop-in-Replacement fuer Decap CMS mit modernerer UI), im Corporate Design der UNESCO-Schule Essen.

## Drei Arten, das zu nutzen

### 1. Lokal testen (ohne Account)

```bash
npm install
# Terminal 1
npx decap-server
# Terminal 2
npm run dev
```

Browser:
- **Website:** http://localhost:4321/tina-playground-unesco/
- **Editor:** http://localhost:4321/tina-playground-unesco/admin/

`local_backend: true` ist in `public/admin/config.yml` gesetzt — der `decap-server`-Proxy (von Sveltia genauso unterstuetzt) schreibt direkt in die lokalen Markdown-Dateien, kein Login noetig.

### 2. Live auf GitHub Pages (read-only)

https://tobiaskammer-de.github.io/tina-playground-unesco/

Bearbeitung im Browser ist hier **nicht** moeglich — GitHub Pages hat kein Auth-Backend. Dafuer Variante 3.

### 3. Browser-Editing via Netlify (einmaliges Setup)

Netlify hostet die Site zusaetzlich, liefert per **Identity + Git Gateway** den Login. Geschrieben wird trotzdem in dasselbe GitHub-Repo.

## Netlify-Setup (ca. 5 Minuten, kostenlos)

### Schritt 1 — Account + Site

1. https://app.netlify.com → „Sign up with GitHub"
2. „Add new site" → „Import an existing project" → GitHub → Repo `tina-playground-unesco` auswaehlen
3. Build-Settings sind in `netlify.toml` schon hinterlegt — auf „Deploy site" klicken
4. Warten, bis die erste Site deployt ist (~1 Min). Du bekommst eine URL wie `https://random-name.netlify.app`

### Schritt 2 — Identity aktivieren

1. Im Netlify-Dashboard: **Site configuration → Identity → Enable Identity**
2. Unter **Registration preferences** auf „Invite only" stellen (sonst kann sich jeder anmelden)
3. Unter **External providers** optional „GitHub" hinzufuegen — dann Login per GitHub statt E-Mail

### Schritt 3 — Git Gateway aktivieren

1. **Identity → Services → Git Gateway → Enable Git Gateway**
2. Netlify autorisiert sich gegen GitHub und darf Commits in dein Repo schreiben.

### Schritt 4 — Dich selbst einladen

1. **Identity → Invite users** → eigene E-Mail eintragen
2. Mail oeffnen → Link klicken → Passwort setzen (bzw. via GitHub einloggen)

### Schritt 5 — Editor benutzen

Auf der Netlify-URL `/admin/` aufrufen, einloggen, Bloecke bearbeiten, speichern.
Sveltia commitet direkt nach `main` auf GitHub → GitHub-Pages-Build laeuft an, Netlify rebuildet ebenfalls.

## GitHub Pages aktivieren (falls noch nicht)

1. https://github.com/tobiaskammer-de/tina-playground-unesco/settings/pages
2. „Source": **GitHub Actions**

## Struktur

```
src/
  content/pages/             Markdown-Dateien pro Seite
  layouts/BaseLayout.astro   Header/Footer + Identity-Widget
  components/PageHero.astro
  pages/[...slug].astro      Dynamischer Block-Renderer
public/admin/                Sveltia CMS Admin-UI
  index.html
  config.yml                 Schema (6 Blocktypen, Discriminator: _template)
netlify.toml                 Build-Config fuer Netlify
.github/workflows/deploy.yml CI/CD zu GitHub Pages
```

## Die sechs Blocktypen

1. **Hero** — Titel + Lead, optional Bild
2. **Zwei-Spalten-Text** — Ueberschrift + 2 Absaetze
3. **Kartenraster** — Liste von Karten (Kicker, Titel, Text)
4. **Zitat** — grosses Zitat mit Quelle
5. **Call-to-Action** — Ueberschrift, Text, Button
6. **Galerie** — Liste von Bildern mit Alt + Caption

Neue Blocktypen: `public/admin/config.yml` erweitern + Renderer in `src/pages/[...slug].astro` ergaenzen.

## Kosten

- **Lokaler Modus:** 0 €
- **GitHub Pages:** 0 €
- **Netlify Free Tier:** 0 € (100 GB/Monat, 300 Build-Minuten, 1.000 Identity-User)
