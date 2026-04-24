# Tina-Playground — UNESCO-Schule Essen

Test-Projekt zum Evaluieren des **TinaCMS Block-Editors**, im Corporate Design der UNESCO-Schule Essen.

## Drei Arten, das zu nutzen

### 1. Lokal testen (ohne Account)

Editor läuft auf deinem Mac, Änderungen gehen in die lokalen Markdown-Dateien.

```bash
cd ~/Desktop/tina-playground
npm install
npm run tina:dev
```

Browser öffnen:
- **Website:** http://localhost:4321/tina-playground-unesco/
- **Editor:** http://localhost:4321/tina-playground-unesco/admin-tina

### 2. Live auf GitHub Pages (read-only)

Die gebaute Website ist öffentlich unter
https://tobiaskammer-de.github.io/tina-playground-unesco/

Bearbeitung ist erst möglich, wenn Tina Cloud eingerichtet ist (siehe unten).

### 3. Browser-Editing via Tina Cloud (einmaliges Setup, dann bequem)

Nach dem Setup bearbeitest du die Seite **direkt im Browser**, ohne lokales Terminal.

## Tina Cloud Setup (5 Minuten, kostenlos für 2 Editoren)

### Schritt 1 — Account anlegen

1. Öffne https://app.tina.io
2. „Sign up with GitHub" → autorisiere Tina auf GitHub
3. Neues Projekt erstellen („+ New Project")
4. GitHub-Repo auswählen: `tobiaskammer-de/tina-playground-unesco`
5. Branch: `main`
6. Framework: „Astro"

### Schritt 2 — Credentials kopieren

Nach der Projekterstellung zeigt Tina dir zwei Werte:

- **Client ID** (beginnt mit etwas wie `abc123de-...`) — öffentlich, geht ins Build
- **Read-Only Token** (lang, geheim) — darf nie öffentlich sein

### Schritt 3 — Secrets im GitHub-Repo hinterlegen

1. Öffne https://github.com/tobiaskammer-de/tina-playground-unesco/settings/secrets/actions
2. „New repository secret" klicken, jeweils eintragen:
   - Name: `TINA_PUBLIC_CLIENT_ID`, Value: (deine Client ID)
   - Name: `TINA_TOKEN`, Value: (dein Token)

### Schritt 4 — Deployment neu auslösen

1. Entweder: https://github.com/tobiaskammer-de/tina-playground-unesco/actions → „Deploy Tina-Playground to GitHub Pages" → „Run workflow"
2. Oder: einen kleinen Commit auf `main` pushen
3. ~2 Min warten, bis das Deploy fertig ist

### Schritt 5 — Browser-Editor nutzen

Öffne im Browser:

**https://tobiaskammer-de.github.io/tina-playground-unesco/admin-tina**

- Mit GitHub einloggen (einmalig)
- Collection „Seiten" → `index`
- Blöcke bearbeiten, speichern
- Tina commitet direkt zu `main` → Seite wird ~2 Min später aktualisiert

Zweiten Editor einladen: in Tina Cloud unter „Team Members".

## GitHub Pages aktivieren (falls noch nicht passiert)

1. https://github.com/tobiaskammer-de/tina-playground-unesco/settings/pages
2. „Source": **GitHub Actions**
3. Speichern — ab jetzt deployt jedes Merge zu main automatisch

## Struktur

```
src/
  content/pages/          Markdown-Dateien pro Seite
    index.md             Startseite (aus Blöcken)
  layouts/BaseLayout.astro Header + Footer + CD-Tokens
  components/PageHero.astro Hero-Komponente
  pages/[...slug].astro   Dynamischer Block-Renderer
tina/config.ts            Schema mit 6 Blocktypen
.github/workflows/deploy.yml  CI/CD zu GitHub Pages
```

## Die sechs Blocktypen

1. **Hero** — großer Titel-Block (dunkel/hell, optional mit Bild)
2. **Zweispaltiger Text** — Überschrift + 2 Absätze
3. **Kartenraster (3 Karten)** — Kicker, Titel, Text pro Karte
4. **Zitat-Band** — Petrol, zentriert, mit Quellenangabe
5. **Call-to-Action** — Überschrift, Text, Button
6. **Bildergalerie** — 3 Bilder mit Alt-Text und Caption

Mehr Blocktypen hinzufügen: `tina/config.ts` erweitern, Renderer in `src/pages/[...slug].astro` ergänzen.

## Kosten

- **Local-Modus:** 0 €
- **GitHub Pages:** 0 €
- **Tina Cloud Free Tier:** 0 € (bis 2 Editoren, 1 Projekt)
- **Tina Cloud Paid:** ab 29 €/Monat (mehr Editoren, Branching, Backups)
