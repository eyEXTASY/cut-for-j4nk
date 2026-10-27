# CUT FOR J4NK

One-Page-Pitch für **J4nk's Chaos Stream**: die Idee eines Cutter-Contests, als kinetische Scroll-Experience.
Die Seite besteht nur aus HTML, CSS und JavaScript. Es gibt keinen Build-Step, kein Framework, kein Backend, keine Tracker und keine Cookies.

```
index.html   Aufbau der Seite (Sektionen, Platzhalter für Texte)
style.css    Optik und Animationen
script.js    CONFIG (alle Texte/Links/Zahlen) + die ganze Bewegung
README.md    diese Anleitung
```

---

## 1. Texte, Links und Zahlen ändern

**Alles Änderbare steht ganz oben in `script.js` im Block `// ==== CONFIG ====`.**
Im HTML musst du keine Texte anfassen, weil `index.html` nur Platzhalter wie `data-cfg="hero.subtitle"` enthält, die das Skript befüllt.

Beispiel: Untertitel im Hero ändern:

```js
hero: {
  subtitle: "Der Cutter-Contest für den Chaos Stream.",   // ← hier ändern
},
```

### Regeln beim Bearbeiten
- Text immer **zwischen den doppelten Anführungszeichen** ändern: `"so"`.
- Nach jedem Eintrag steht ein **Komma**. Wenn du eins löschst, bleibt die Seite leer, und in der Konsole steht ein `SyntaxError`.
- Ein Apostroph wie in `J4nk's` ist erlaubt, ein doppeltes Anführungszeichen im Text nicht. Nimm dafür `„…“`.

### Platzhalter
Werte, die mit `[PLATZHALTER` beginnen, sind noch nicht geklärt. Auf der Seite stehen sie als **„offen“**.
Aktuell betrifft das in `part.open`:

| Punkt      | Wert in CONFIG                           |
|------------|------------------------------------------|
| Preis      | `[PLATZHALTER: Preis für den Contest]`   |
| Regeln     | `[PLATZHALTER: Regeln]`                  |
| Zeitraum   | `[PLATZHALTER: Zeitraum / Deadline]`     |
| Startdatum | `[PLATZHALTER: Startdatum]`              |

Sobald du einen echten Wert einträgst (z. B. `value: "1. Dezember"`), zeigt die Seite diesen statt „offen“ an.

### Was wo steht (CONFIG-Übersicht)
| Bereich in CONFIG | Sektion auf der Seite                                        |
|-------------------|--------------------------------------------------------------|
| `brand`, `facts`  | Marke, Follower und Livezeit (Hero, Laufband, Footer)        |
| `links`           | YouTube-, Twitch- und Instagram-Buttons im Footer            |
| `hero`            | Riesentitel (`titleLines` = Zeilen), Untertitel              |
| `tickerExtras`    | zusätzliche Begriffe im gelben Laufband                      |
| `why`             | „Warum“: drei Riesenzeilen, Text, zwei Zielkästen            |
| `flow.steps`      | die 5 Schritte des Ablaufs (Stichwort, Titel, Text)          |
| `stream`          | „Passt zum Stream“ inkl. Beispiel-Chat (fiktiv)              |
| `extra`           | Extra-Aufgabe Thumbnail                                      |
| `after`           | Nach dem Contest, Podest (`top` = Anzahl Plätze)             |
| `part`            | „Dein Part, Jank“: Jobdeal-Schalter und offene Punkte        |
| `footer`          | Abschlusszeile, Button-Texte, Credit                         |

> **Fakten-Regel:** Trag in `facts` nur echte Angaben ein. Der Chat in `stream.chat` ist bewusst als „Beispiel, fiktiv“ gekennzeichnet.

---

## 2. Lokal ansehen

**Variante A (einfach):** `index.html` doppelklicken.
Hinweis: Die Seite hat eine strenge Sicherheitsregel (Content-Security-Policy), die nur eigene Dateien zulässt. Ob ein Browser das beim Öffnen per Doppelklick (`file://`) akzeptiert, ist nicht getestet. Bleibt die Seite leer oder schwarz, nimm Variante B.

**Variante B (sicher):** Kleinen lokalen Server starten. Node.js ist auf diesem PC installiert. Im Projektordner ausführen:

```bash
npx --yes http-server -p 5173 -c-1
```

Danach im Browser `http://localhost:5173` öffnen. `npx` lädt dafür einmalig das Paket `http-server` aus npm herunter. Beenden mit `Strg + C`.

### Fehler finden
Im Browser `F12` drücken und den Reiter **Konsole** öffnen. Rote Zeilen zeigen die Datei und die Zeilennummer an.
In `script.js` steht hinter fast jeder Zeile ein Kommentar, was sie tut. Fehlt ein CONFIG-Wert, erscheint eine gelbe Warnung `CONFIG-Wert fehlt: …`.

---

## 3. Auf GitHub Pages veröffentlichen

Voraussetzung: git ist installiert (das ist der Fall), dazu ein GitHub-Account (**eyEXTASY**).
Die GitHub CLI (`gh`) brauchst du für diesen Weg nicht.

### Einmalig: Repo anlegen (im Browser)
1. Auf <https://github.com/new> gehen.
2. **Repository name:** z. B. `cut-for-j4nk`.
3. **Public** wählen. GitHub Pages ist im kostenlosen Plan nur bei öffentlichen Repos möglich.
   Den Code kann dann jeder sehen, aber die Seite selbst ist per `noindex` für Suchmaschinen gesperrt.
4. **Keine** README, .gitignore oder Lizenz anhaken (die Dateien gibt es schon).
5. **Create repository** klicken.

### Einmalig: E-Mail privat halten
Unter <https://github.com/settings/emails>:
- **Keep my email addresses private** einschalten.
- **Block command line pushes that expose my email** einschalten.

Die Commits in diesem Projekt nutzen die noreply-Adresse
`155477573+eyEXTASY@users.noreply.github.com` (nur für dieses Repo eingestellt, nicht global).

### Hochladen (im Projektordner)
```bash
git remote add origin https://github.com/eyEXTASY/cut-for-j4nk.git
```
```bash
git push -u origin main
```
Beim ersten Push öffnet sich ein Fenster: **Sign in with your browser**. Dort meldest du dich bei GitHub an. Das übernimmt der Git Credential Manager, der in Git für Windows schon enthalten ist.

### Pages einschalten
1. Im Repo auf **Settings → Pages**.
2. **Source:** *Deploy from a branch*.
3. **Branch:** `main`, Ordner `/ (root)`, dann **Save**.
4. Nach 1 bis 2 Minuten ist die Seite online unter:
   `https://eyextasy.github.io/cut-for-j4nk/`

### Später etwas ändern
```bash
git add -A
```
```bash
git commit -m "Texte angepasst"
```
```bash
git push
```
GitHub Pages aktualisiert sich danach automatisch (1 bis 2 Minuten, notfalls mit `Strg + F5` neu laden).

---

## 4. Technik in Kürze

- **Animationen:** Vanilla JS mit **einem** zentralen `requestAnimationFrame`, der nur läuft, wenn gescrollt wird oder Scherben nachschwingen. Bewegt werden nur `transform` und `opacity`. Es gibt kein Canvas und kein GSAP.
- **Szenen:** Scroll-Fortschritt als CSS-Variable `--p` (0 bis 1) pro Sektion. Positionen werden nur beim Laden und bei Größenänderungen gemessen, nicht beim Scrollen.
- **Reveals:** `IntersectionObserver` setzt `.is-in`, sobald ein Element ins Bild kommt.
- **Reduced Motion:** Wer im System „Bewegung reduzieren“ aktiviert hat, bekommt eine ruhige Variante: kein Glitch, kein Sticky, und der Ablauf erscheint als normale Liste.
- **Datenschutz:** keine Webfonts, keine externen Skripte, keine Cookies, kein localStorage. Die Content-Security-Policy erlaubt nur eigene Dateien. Externe Links haben `rel="noopener noreferrer"`.

---

Pitch-Idee von **extasy**.
