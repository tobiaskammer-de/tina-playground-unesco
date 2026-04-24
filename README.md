# Tina-Playground — UNESCO-Schule Essen

Reines Test-Projekt zum Evaluieren des **TinaCMS Block-Editors**, im Corporate Design der UNESCO-Schule Essen.

## Was drin ist

- Astro-Setup ohne Base-Pfad (damit die Tina-Admin-UI sauber unter `/admin-tina` erreichbar ist)
- Ein minimales Layout mit CD-Tokens (Petrol, Bordeaux, Fraunces, Inter)
- Eine Startseite (`src/content/pages/index.md`), die komplett aus Tina-Blöcken zusammengesetzt ist
- Sechs Blocktypen: Hero, Zweispalter, 3-Card-Grid, Zitat-Band, CTA, Galerie

## Lokal ausprobieren

### Vorbereitung (einmalig)

```bash
cd ~/Desktop/tina-playground
npm install
```

### Tina-Editor starten

```bash
npm run tina:dev
```

Das Terminal muss offen bleiben, solange du editierst.

### Im Browser öffnen

- **Live-Website:** http://localhost:4321/
- **Tina-Editor:** http://localhost:4321/admin-tina

Im Editor:
1. Links die Collection „Seiten" → `index`
2. Split-View: links Formulare + Block-Liste, rechts Live-Vorschau
3. Blöcke per Drag-Handle umsortieren
4. „+ Add Block" → neuen Block einfügen
5. „Save" speichert direkt in `src/content/pages/index.md`

## Neue Seite anlegen (via Tina)

Im Editor oben rechts „+ Create" → Seite benennen → Blöcke zusammenklicken.
Die URL ergibt sich aus dem Dateinamen: `projekttag-2027.md` → `/projekttag-2027`.

## Produktionsmodus

Lokal läuft Tina ohne Authentifizierung. Für Multi-User-Betrieb im Browser
bräuchtest du **Tina Cloud** (29 €/Monat ab 2 Editoren) — dann commitet
jeder Editor direkt aus dem Browser heraus in Git.

## Beenden

`Ctrl + C` im Terminal stoppt Tina & Astro.
