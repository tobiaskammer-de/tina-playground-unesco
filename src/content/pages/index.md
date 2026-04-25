---
title: Startseite
description: Block-editierbare Startseite im Corporate Design der UNESCO-Schule Essen — zum Testen des Tina-Editors.
blocks:
  - variant: feature
    eyebrow: Tina-Playground · Homepage
    title: Diese Seite ist komplett editierbar.
    lede: 'Alles was du hier siehst — Titel, Untertitel, Karten, Zitat — kannst du im Tina-Editor direkt in deinem Browser ändern. Die Änderungen speicherst du in die Markdown-Datei, und beim nächsten Refresh ist die Seite aktualisiert.'
    _template: hero
  - heading: Wie funktioniert das?
    left: 'Im linken Panel des Tina-Editors siehst du die Blöcke, aus denen diese Seite zusammengesetzt ist: Hero, Zweispalter, Kartenraster, Zitat-Band und Call-to-Action. Jeder Block hat klar definierte Felder.'
    right: 'Rechts siehst du die Live-Vorschau. Während du links tippst, aktualisiert sich rechts die Seite. Klickst du auf Speichern, wird der Inhalt in die Markdown-Datei im Git-Repo geschrieben.'
    _template: textTwoCol
  - heading: 'Drei Dinge, die Tina gut macht.'
    cards:
      - kicker: '01'
        title: Block-Editor
        text: |-
          Sechs vorgefertigte Block-Typen, die sich per Drag & Drop kombinieren lassen — im UNESCO-Corporate-Design.

          Das hier hat Tobi jetzt noch geschrieben!! 
      - kicker: '02'
        title: Live-Vorschau
        text: 'Du siehst jede Änderung sofort in der Split-View, bevor du speicherst. Kein Hin- und Herschalten zwischen Tabs.'
      - kicker: '03'
        title: Git-basiert
        text: 'Jedes Speichern ist ein Git-Commit. Rückgängig machen über GitHub, Versionshistorie inklusive, null externe Datenbank.'
    _template: cardGrid
  - quote: 'Wenn der Rahmen sauber gesetzt ist, darf der Inhalt frei atmen.'
    cite: Design-Prinzip dieser Demo
    _template: quote
  - heading: Jetzt selbst ausprobieren.
    text: Öffne den Tina-Editor über den Link rechts oben im Header und editiere diese Seite. Alle Änderungen landen in src/content/pages/index.md.
    buttonText: Zum Tina-Editor
    buttonUrl: /admin-tina
    _template: cta
---

