/* =====================================================================
   CUT FOR J4NK – script.js
   Ganz oben: CONFIG (alle Texte, Zahlen, Links). Darunter die Technik.
   Kein Framework, keine externen Bibliotheken, keine Cookies/Tracker.
   ===================================================================== */

'use strict'; // strenger Modus: Tippfehler bei Variablen werden zu echten Fehlern statt still ignoriert


// ==== CONFIG ====
// HIER ÄNDERST DU ALLE TEXTE, ZAHLEN UND LINKS.
// - Texte einfach zwischen den Anführungszeichen ändern.
// - Werte, die mit "[PLATZHALTER" beginnen, sind noch nicht geklärt.
//   Die Seite zeigt sie als "offen" an. Sobald du einen echten Wert
//   einträgst (z. B. "500 €"), wird dieser angezeigt.
// - Achtung bei Apostrophen: Text steht in "doppelten" Anführungszeichen,
//   darum ist ein ' (wie in J4nk's) problemlos erlaubt.
const CONFIG = {
  brand: "J4nk's Chaos Stream",              // Markenname (Hero oben, Ticker, Footer)
  pitchBy: "extasy",                          // wer die Idee gepitcht hat (Footer)

  facts: {                                    // bekannte Fakten – nur echte Angaben eintragen!
    followers: "2,0 Tsd. Follower",
    live: "täglich live ab 18 Uhr",
  },

  links: {                                    // Kanäle von Jank (Footer-Buttons)
    youtube: "https://www.youtube.com/@j4nkttv",
    twitch: "https://www.twitch.tv/j4nkttv",
    instagram: "https://www.instagram.com/j4nkttv/",
  },

  hero: {
    titleLines: ["CUT FOR", "J4NK"],         // jede Zeile = eine Zeile im Riesentitel
    subtitle: "Der Cutter-Contest für den Chaos Stream.",
    scrollHint: "Runterscrollen. Wird laut.",
  },

  tickerExtras: ["Cutter gesucht", "Chat votet mit", "Jank entscheidet"], // zusätzliche Laufband-Begriffe (Fakten kommen automatisch dazu)

  why: {
    eyebrow: "Warum das Ganze?",
    lines: ["Jank sucht", "einen Cutter.", "Langfristig."], // die drei Riesenzeilen
    text: "Kein One-Night-Stand mit der Timeline: Gesucht wird jemand für eine langfristige Zusammenarbeit. Statt Bewerbungsmappe zählt hier nur eins – wer schneidet das Chaos am besten?",
    stats: [                                  // die zwei Kästen, die reinkrachen
      { big: "1 Video", label: "pro Woche" },
      { big: "ca. 10 Min", label: "pro Video" },
    ],
  },

  flow: {
    eyebrow: "Der Ablauf",
    title: "5 Schritte. Null Langeweile.",
    stepLabel: "Schritt",                     // "Schritt 1/5"
    timelineName: "CUT_FOR_J4NK_final_v5.mp4", // Deko-Dateiname über der Timeline
    timelineMinutes: 10,                      // Länge der Deko-Timeline in Minuten (passt zum Ziel ca. 10 Min)
    steps: [
      {
        tag: "Clips",
        title: "Jank plündert die VODs",
        text: "Jank wählt ca. 20 Clips aus seinen Twitch-VODs. Die Rohclips gibt's per Link für alle – gleiches Material, gleiche Chancen.",
      },
      {
        tag: "Ansage",
        title: "Der Aufruf geht raus",
        text: "Ankündigung auf Social Media, mit Regeln und Deadline. Ab dann haben alle 1 Monat Zeit zum Schneiden.",
      },
      {
        tag: "Abgabe",
        title: "Abgabe per Formular",
        text: "Cutter reichen ihr Video als Link ein, dazu ihr persönliches Highlight mit Timestamp (max. 2 Minuten). Alles läuft über ein Google Formular.",
      },
      {
        tag: "Live-Vote",
        title: "Chat-Gericht, live",
        text: "Onstream werden die Highlights gemeinsam geschaut. Der Chat votet mit und haut seine Meinung raus.",
      },
      {
        tag: "Finale",
        title: "Jank entscheidet",
        text: "Das letzte Wort hat Jank. Der Chat darf laut sein – aber am Ende ist es Business.",
      },
    ],
  },

  stream: {
    eyebrow: "Passt zum Stream",
    title: "Dein Chat mischt eh schon mit.",
    text: "Mit Channelpoints wird im Chaos Stream sowieso schon fleißig getrollt. Beim Contest darf der Chat ganz offiziell mitreden: mitschauen, mitvoten, Meinung raushauen. Die Auswahl bleibt trotzdem bei Jank.",
    chatLabel: "Live-Chat",
    chatNote: "Beispiel, fiktiv",             // wichtig: Chat ist erfunden, nur zur Illustration
    chat: [                                   // system: true = graue Systemzeile
      { user: "ChaosGoblin", msg: "hat eine Channelpoints-Belohnung eingelöst", system: true },
      { user: "ClipKritiker", msg: "Highlight 3 ist Kino, keine Diskussion" },
      { user: "TimelineTroll", msg: "!vote 2" },
      { user: "Zuschauer_42", msg: "der Schnitt am Ende 😭" },
      { user: "Mod", msg: "Ruhe, es wird gevotet." },
      { user: "ChaosGoblin", msg: "JANK ENTSCHEIDET EH SELBST" },
    ],
    chatWho: "Chat",
    chatRole: "votet & meint mit",
    jankWho: "Jank",
    jankRole: "entscheidet",
    stamp: "Final: Jank",
  },

  extra: {
    eyebrow: "Extra-Aufgabe",
    title: "Thumbnail inklusive.",
    text: "Jeder Cutter liefert zusätzlich ein Thumbnail. Ein Video ohne Thumbnail ist wie ein Stream ohne Chat: geht schon, ist aber traurig.",
    thumbLabel: "Dein Thumbnail hier",
  },

  after: {
    eyebrow: "Nach dem Contest",
    title: "Top 5 kriegen Bühne.",
    text: "Von den Top 5 wird je 1 Clip veröffentlicht – nach Absprache mit dem jeweiligen Cutter. Heißt: Nicht nur Platz 1 hat am Ende was vorzuzeigen.",
    top: 5,                                   // Anzahl Plätze auf dem Podest
    barLabel: "1 Clip online",
  },

  part: {
    eyebrow: "Entscheidungen",
    title: "Dein Part, Jank.",
    lead: "Ein paar Regler kann nur der Chef stellen. Hier ist die Checkliste – klick dich ruhig schon mal durch.",
    dealTitle: "Jobdeal – was passt?",
    deal: ["Festanstellung", "Freelance", "Probezeit", "Bezahlung pro Video"],
    openTitle: "Noch zu klären",
    open: [                                   // value: echter Wert ODER Platzhalter
      { label: "Preis", value: "[PLATZHALTER: Preis für den Contest]" },
      { label: "Regeln", value: "[PLATZHALTER: Regeln]" },
      { label: "Zeitraum", value: "[PLATZHALTER: Zeitraum / Deadline]" },
      { label: "Startdatum", value: "[PLATZHALTER: Startdatum]" },
    ],
    openLabel: "offen",                       // Anzeige für Platzhalter
    doneLabel: "abgehakt",                    // Anzeige, wenn der Schalter an ist
    countText: "Noch offen: {n}",             // {n} wird durch die Zahl ersetzt
    doneText: "Alles abgehakt. Fast verdächtig.",
    note: "Wird gemeinsam geklärt.",
    small: "Nur zum Durchklicken – hier wird nichts gespeichert oder verschickt.",
  },

  footer: {
    title: "Let's cut.",
    youtube: "YouTube",
    twitch: "Twitch",
    instagram: "Instagram",
    creditPrefix: "Pitch-Idee von",           // ergibt "Pitch-Idee von extasy"
  },
};


// ==== HILFSFUNKTIONEN ====
// Kleine Werkzeuge, die überall gebraucht werden.
const SVG_NS = 'http://www.w3.org/2000/svg';                                  // Namensraum, ohne den SVG-Elemente per JS nicht funktionieren
const $ = (sel, root = document) => root.querySelector(sel);                 // erstes passendes Element holen
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel)); // alle passenden Elemente als Array
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));       // Wert auf Bereich begrenzen (Standard 0 bis 1)
const rand = (min, max) => min + Math.random() * (max - min);                 // Zufallszahl zwischen min und max
const getPath = (obj, path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj); // "why.stats.0.big" → Wert aus CONFIG
const isPlaceholder = (v) => typeof v === 'string' && v.trim().startsWith('[PLATZHALTER'); // erkennt ungeklärte Werte

function el(tag, className, text) {          // HTML-Element in einem Rutsch erzeugen
  const node = document.createElement(tag);   // Element anlegen
  if (className) node.className = className;  // CSS-Klasse(n) setzen, falls angegeben
  if (text != null) node.textContent = text;  // Text setzen (textContent = sicher, kein HTML-Einschleusen)
  return node;                                // fertiges Element zurückgeben
}

function svgEl(tag) {                         // SVG-Element erzeugen (braucht eigenen Namensraum)
  return document.createElementNS(SVG_NS, tag); // ohne NS würde der Browser es nicht als SVG zeichnen
}

function retrigger(node, cls) {               // CSS-Animation neu starten, auch wenn sie schon lief
  if (!node) return;                          // Sicherheitsnetz, falls Element fehlt
  node.classList.remove(cls);                 // Klasse entfernen …
  void node.offsetWidth;                      // … Browser zwingen, das zu bemerken (Reflow) …
  node.classList.add(cls);                    // … und wieder setzen → Animation startet von vorn
}

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // true = Nutzer will wenig Bewegung
const COARSE = window.matchMedia('(pointer: coarse)').matches;                 // true = Touchgerät (Finger statt Maus)


// ==== CONFIG ANWENDEN ====
// Füllt alle Elemente mit data-cfg="pfad" mit dem Text aus CONFIG und
// setzt alle Links mit data-cfg-href="pfad".
function applyConfig() {
  $$('[data-cfg]').forEach((node) => {                    // jedes Element mit data-cfg durchgehen
    const value = getPath(CONFIG, node.dataset.cfg);      // passenden Wert aus CONFIG holen
    if (value == null) {                                  // Wert fehlt in CONFIG?
      console.warn('CONFIG-Wert fehlt:', node.dataset.cfg); // Hinweis in der Konsole statt stillem Fehler
      return;                                             // Element bleibt leer
    }
    node.textContent = value;                             // Text einsetzen
  });

  $$('[data-cfg-href]').forEach((node) => {               // jeden Link mit data-cfg-href durchgehen
    const url = getPath(CONFIG, node.dataset.cfgHref);    // URL aus CONFIG holen
    if (!url || isPlaceholder(url)) {                     // keine echte URL eingetragen?
      node.removeAttribute('href');                       // Link deaktivieren statt ins Leere zu führen
      node.setAttribute('aria-disabled', 'true');         // für Screenreader als deaktiviert markieren
      return;                                             // fertig mit diesem Link
    }
    node.href = url;                                      // echte URL setzen
  });

  $('#footer-facts').textContent = [CONFIG.brand, CONFIG.facts.followers, CONFIG.facts.live].join('  ·  '); // Faktenzeile im Footer
  $('#footer-credit').textContent = `${CONFIG.footer.creditPrefix} ${CONFIG.pitchBy}`;                        // "Pitch-Idee von extasy"

  $$('.glitch').forEach((node) => { node.dataset.text = node.textContent; }); // Glitch-Kopien brauchen den Text als data-text
}


// ==== LAUFBAND (TICKER) ====
// Baut das Laufband im Hero. Inhalt wird doppelt eingefügt, damit die
// Endlos-Schleife nahtlos aussieht (CSS schiebt um genau -50 %).
function buildTicker() {
  const track = $('#ticker');                                      // Container für das Laufband
  const words = [CONFIG.hero.titleLines.join(' '), CONFIG.brand, CONFIG.facts.followers, CONFIG.facts.live, ...CONFIG.tickerExtras]; // alle Begriffe
  for (let copy = 0; copy < 2; copy++) {                           // zwei identische Durchgänge
    words.forEach((w) => track.append(el('span', 'ticker__item', w))); // jeden Begriff als eigenes Element anhängen
  }
}


// ==== HERO: TITEL ZERLEGEN ====
// Zerlegt den Titel in einzelne Buchstaben. Jeder Buchstabe bekommt
// Zufallswerte, wohin er beim Scrollen fliegt (--rx/--ry/--rr) und
// woher er beim Laden kommt (--y0/--r0).
function buildHeroTitle() {
  const h1 = $('#hero-title');                                   // die Überschrift
  h1.setAttribute('aria-label', CONFIG.hero.titleLines.join(' ')); // Screenreader lesen den ganzen Titel statt Einzelbuchstaben
  let i = 0;                                                     // laufender Buchstabenzähler (für Verzögerung)
  CONFIG.hero.titleLines.forEach((lineText, li) => {             // jede Titelzeile
    const line = el('span', `line line--${li + 1}`);             // Zeilen-Container (line--1, line--2 …)
    line.setAttribute('aria-hidden', 'true');                    // Einzelbuchstaben vor Screenreadern verstecken
    for (const ch of lineText) {                                 // jeden Buchstaben der Zeile
      const isSpace = ch === ' ';                                // Leerzeichen gesondert behandeln
      const c = el('span', isSpace ? 'char char--space' : 'char'); // äußere Ebene (Scroll-Zerlegung)
      const inner = el('span', 'char__in', isSpace ? ' ' : ch); // innere Ebene (Einschlag); geschütztes Leerzeichen
      c.style.setProperty('--i', i);                             // Reihenfolge → gestaffelte Verzögerung
      c.style.setProperty('--rx', rand(-70, 70).toFixed(1));     // seitliche Flugweite beim Scrollen (in vw)
      c.style.setProperty('--ry', rand(-30, 80).toFixed(1));     // senkrechte Flugweite beim Scrollen (in vh)
      c.style.setProperty('--rr', rand(-140, 140).toFixed(0));   // Drehung beim Scrollen (in Grad)
      inner.style.setProperty('--y0', `${(i % 2 ? -1 : 1) * rand(60, 110)}vh`); // Start abwechselnd von oben/unten
      inner.style.setProperty('--r0', `${rand(-45, 45).toFixed(0)}deg`);        // Startdrehung
      c.append(inner);                                           // innere in äußere Ebene
      line.append(c);                                            // Buchstabe in die Zeile
      i++;                                                       // Zähler hoch
    }
    h1.append(line);                                             // Zeile in die Überschrift
  });
  return i;                                                      // Anzahl Buchstaben (für das Landungs-Timing)
}


// ==== BLITZE ====
// Erzeugt bei jedem Einschlag einen neuen, zufällig gezackten Blitzpfad
// (Koordinaten 0–100, das SVG wird auf den ganzen Hero gestreckt).
function boltPath() {
  let x = rand(15, 85);                         // Startpunkt oben (waagerecht zufällig)
  let y = 0;                                    // ganz oben anfangen
  let d = `M${x.toFixed(1)} 0`;                 // SVG-Pfad: "Move to" Startpunkt
  while (y < 100) {                             // Zickzack bis ganz unten
    y = Math.min(100, y + rand(5, 13));         // ein Stück nach unten
    x = clamp(x + rand(-14, 14), 2, 98);        // zufällig nach links/rechts, aber im Bild bleiben
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;   // "Line to" neuer Punkt
  }
  return d;                                     // fertiger Pfad
}

function strikeBolt() {
  if (REDUCED) return;                                   // ruhige Variante: keine Blitze
  const svg = $('.hero__bolt');                          // Blitz-SVG
  $('.bolt', svg).setAttribute('d', boltPath());         // neuen Zickzack setzen
  retrigger(svg, 'is-striking');                         // Flacker-Animation starten
}


// ==== SCHERBEN ====
// Glasscherben im Hero. Sie weichen vor Cursor/Finger aus und federn
// zurück (einfache Feder-Physik). Die Berechnung läuft NUR, solange sich
// etwas bewegt – danach stoppt die Schleife (schont den Akku).
const shardState = {
  list: [],        // alle Scherben mit Position, Versatz und Geschwindigkeit
  px: -9999,       // Zeigerposition X (relativ zum Hero), weit weg = keine Wirkung
  py: -9999,       // Zeigerposition Y
  lastMove: 0,     // Zeitpunkt der letzten Zeigerbewegung
  w: 0,            // Hero-Breite
  h: 0,            // Hero-Höhe
};

function shardPoints() {                                  // zufällige, unregelmäßige Scherbenform
  const n = Math.round(rand(3, 5));                       // 3 bis 5 Ecken
  const angles = Array.from({ length: n }, () => rand(0, Math.PI * 2)).sort((a, b) => a - b); // Winkel sortiert → keine Selbstüberschneidung
  const stretch = rand(.45, 1);                           // Scherbe etwas gestaucht → wirkt spitzer
  return angles.map((a) => {                              // jede Ecke berechnen
    const r = rand(28, 50);                               // Abstand vom Mittelpunkt
    const x = 50 + Math.cos(a) * r;                       // X-Koordinate (0–100)
    const y = 50 + Math.sin(a) * r * stretch;             // Y-Koordinate, gestaucht
    return `${x.toFixed(1)},${y.toFixed(1)}`;             // als "x,y" für das SVG
  }).join(' ');                                           // alle Ecken mit Leerzeichen
}

function buildShards() {
  const box = $('.hero__shards');                         // Container hinter dem Titel
  const count = COARSE ? 10 : 16;                         // auf dem Handy weniger Scherben (Performance)
  for (let i = 0; i < count; i++) {
    const size = rand(COARSE ? 50 : 70, COARSE ? 120 : 190); // Kantenlänge in px
    const left = rand(-4, 92);                            // Position in % der Hero-Breite
    const top = rand(-4, 88);                             // Position in % der Hero-Höhe
    const wrap = el('div', 'shard');                      // äußere Ebene (bewegt JS)
    wrap.style.left = `${left}%`;                         // waagerechte Position
    wrap.style.top = `${top}%`;                           // senkrechte Position
    wrap.style.width = `${size}px`;                       // Breite
    wrap.style.height = `${size}px`;                      // Höhe
    wrap.style.setProperty('--i', i);                     // für gestaffeltes Rausplatzen
    const svg = svgEl('svg');                             // innere Ebene (Glas)
    svg.setAttribute('viewBox', '0 0 100 100');           // Koordinatensystem 0–100
    svg.setAttribute('class', 'shard__glass');            // CSS-Klasse (bei SVG per setAttribute)
    const poly = svgEl('polygon');                        // die eigentliche Scherbenform
    poly.setAttribute('points', shardPoints());           // zufällige Ecken
    svg.append(poly);                                     // Form ins SVG
    wrap.append(svg);                                     // SVG in die Hülle
    box.append(wrap);                                     // Hülle in den Hero
    shardState.list.push({
      el: wrap, left, top, size,                          // Element und Grundposition
      cx: 0, cy: 0,                                       // Mittelpunkt in px (wird in measureShards berechnet)
      ox: 0, oy: 0,                                       // aktueller Versatz durch Physik
      vx: 0, vy: 0,                                       // aktuelle Geschwindigkeit
      par: 0,                                             // aktueller Parallax-Versatz (wird pro Frame gesetzt)
      rot: rand(-35, 35),                                 // Grunddrehung
      depth: rand(.15, .6),                               // Parallax-Tiefe beim Scrollen
    });
  }
}

function measureShards() {
  const hero = $('#top');                                  // Hero-Element
  shardState.w = hero.offsetWidth;                         // aktuelle Breite
  shardState.h = hero.offsetHeight;                        // aktuelle Höhe
  shardState.list.forEach((s) => {
    s.cx = (s.left / 100) * shardState.w + s.size / 2;     // Mittelpunkt X in px
    s.cy = (s.top / 100) * shardState.h + s.size / 2;      // Mittelpunkt Y in px
    s.el.style.setProperty('--fx', `${(shardState.w / 2 - s.cx).toFixed(0)}px`); // Startpunkt fürs Rausplatzen: Hero-Mitte (X)
    s.el.style.setProperty('--fy', `${(shardState.h / 2 - s.cy).toFixed(0)}px`); // Startpunkt fürs Rausplatzen: Hero-Mitte (Y)
  });
}

function pushShards(x, y, radius, strength) {              // Stoß von Punkt (x,y) aus – z. B. Tippen oder Landung
  shardState.list.forEach((s) => {
    const dx = s.cx + s.ox - x;                            // Abstand X Scherbe ↔ Stoßpunkt
    const dy = s.cy + s.oy + s.par - y;                    // Abstand Y (inkl. Parallax-Versatz)
    const dist = Math.hypot(dx, dy) || 1;                  // Entfernung (nie 0, sonst Division durch 0)
    if (dist > radius) return;                             // zu weit weg → keine Wirkung
    const f = (1 - dist / radius) * strength;              // je näher, desto stärker
    s.vx += (dx / dist) * f;                               // Geschwindigkeit nach außen (X)
    s.vy += (dy / dist) * f;                               // Geschwindigkeit nach außen (Y)
  });
  shardState.lastMove = performance.now();                 // zählt als Bewegung → Schleife läuft an
  requestTick();                                           // Animationsschleife wecken
}

function stepShards(now, scrollY) {                        // ein Physik-Schritt; gibt true zurück, solange noch etwas wackelt
  const st = shardState;                                   // Abkürzung
  const pointerLive = now - st.lastMove < 140;             // Zeiger in den letzten 140 ms bewegt?
  let moving = false;                                      // bewegt sich noch irgendeine Scherbe?
  for (const s of st.list) {
    s.par = -scrollY * s.depth;                            // Parallax: Scherben ziehen beim Scrollen unterschiedlich schnell nach oben
    if (pointerLive) {                                     // nur wenn der Zeiger aktiv ist
      const dx = s.cx + s.ox - st.px;                      // Abstand X zum Zeiger
      const dy = s.cy + s.oy + s.par - st.py;              // Abstand Y zum Zeiger
      const dist = Math.hypot(dx, dy) || 1;                // Entfernung
      const R = COARSE ? 150 : 200;                        // Wirkradius in px
      if (dist < R) {                                      // Zeiger nah genug?
        const f = (1 - dist / R) * 2.4;                    // Abstoßungskraft
        s.vx += (dx / dist) * f;                           // wegschubsen (X)
        s.vy += (dy / dist) * f;                           // wegschubsen (Y)
      }
    }
    s.vx += -s.ox * 0.06;                                  // Feder zieht zurück zur Grundposition (X)
    s.vy += -s.oy * 0.06;                                  // Feder zieht zurück zur Grundposition (Y)
    s.vx *= 0.86;                                          // Dämpfung, damit es ausschwingt
    s.vy *= 0.86;                                          // Dämpfung (Y)
    s.ox += s.vx;                                          // Versatz um Geschwindigkeit verschieben (X)
    s.oy += s.vy;                                          // Versatz um Geschwindigkeit verschieben (Y)
    if (Math.abs(s.ox) + Math.abs(s.oy) + Math.abs(s.vx) + Math.abs(s.vy) > 0.05) {
      moving = true;                                       // noch in Bewegung
    } else {
      s.ox = s.oy = s.vx = s.vy = 0;                       // praktisch still → exakt auf 0 setzen
    }
    s.el.style.transform = `translate3d(${s.ox.toFixed(1)}px, ${(s.oy + s.par).toFixed(1)}px, 0) rotate(${(s.rot + s.ox * 0.35).toFixed(1)}deg)`; // Position + leichte Drehung beim Ausweichen
  }
  return moving || pointerLive;                            // weiterlaufen, solange Bewegung oder Zeiger aktiv
}

function bindShardPointer() {
  const hero = $('#top');                                  // Ereignisse nur im Hero
  const setPointer = (clientX, clientY) => {               // Bildschirmkoordinaten → Hero-Koordinaten
    const r = hero.getBoundingClientRect();                // aktuelle Lage des Heros
    shardState.px = clientX - r.left;                      // X relativ zum Hero
    shardState.py = clientY - r.top;                       // Y relativ zum Hero
    shardState.lastMove = performance.now();               // Zeitstempel merken
    requestTick();                                         // Schleife wecken
  };
  hero.addEventListener('pointermove', (e) => {            // Maus/Stift bewegt sich
    if (e.pointerType === 'touch') return;                 // Touch macht der touchmove-Listener (läuft auch beim Scrollen)
    setPointer(e.clientX, e.clientY);                      // Position übernehmen
  }, { passive: true });                                   // passive = blockiert das Scrollen nie
  hero.addEventListener('pointerdown', (e) => {            // Klick oder Tippen
    setPointer(e.clientX, e.clientY);                      // Position übernehmen
    pushShards(shardState.px, shardState.py, 260, 18);     // kräftiger Stoß → Scherben spritzen weg
  }, { passive: true });
  hero.addEventListener('touchmove', (e) => {              // Finger wischt (auch während des Scrollens)
    const t = e.touches[0];                                // erster Finger
    if (t) setPointer(t.clientX, t.clientY);               // Position übernehmen
  }, { passive: true });
  hero.addEventListener('pointerleave', () => {            // Maus verlässt den Hero
    shardState.px = shardState.py = -9999;                 // Zeiger "weit weg" → keine Abstoßung mehr
  });
}


// ==== GLITCH-BURSTS ====
// Alle paar Sekunden ein kurzer Glitch auf dem Hero-Titel (+ manchmal
// ein Blitz). Läuft nur, solange der Hero sichtbar ist.
let heroVisible = true;                                     // wird vom IntersectionObserver aktualisiert

function startGlitchLoop() {
  if (REDUCED) return;                                      // ruhige Variante: kein Glitch
  const title = $('#hero-title');                           // Titel-Element
  const next = () => {                                      // nächsten Burst planen
    setTimeout(() => {
      if (heroVisible && !document.hidden) {                // nur wenn sichtbar und Tab aktiv
        retrigger(title, 'is-glitching');                   // Glitch-Animation starten
        if (Math.random() < 0.45) strikeBolt();             // in knapp der Hälfte der Fälle zusätzlich ein Blitz
      }
      next();                                               // und den nächsten planen
    }, rand(2400, 5200));                                   // zufälliger Abstand 2,4–5,2 s
  };
  next();                                                   // Kette starten
}


// ==== HERO-INTRO ====
// Wartet, bis alle Buchstaben gelandet sind, dann: Shake, Flash, Blitz,
// Scherben platzen raus, Glitch-Schleife startet.
function heroIntro(charCount) {
  const hero = $('#top');                                   // Hero-Element
  if (REDUCED) {                                            // ruhige Variante
    hero.classList.add('is-landed');                        // sofort "gelandet", keine Effekte
    return;
  }
  const landAt = 150 + charCount * 55 + 600;                // ms bis der letzte Buchstabe sitzt (passt zu CSS: Delay + Dauer)
  setTimeout(() => {
    hero.classList.add('is-landed');                        // Einschlag-Animation abschalten, Scherben einblenden
    retrigger($('.hero__inner'), 'is-shaking');             // Bildschirm wackelt
    retrigger($('.hero__flash'), 'is-flashing');            // Lichtblitz
    strikeBolt();                                           // Blitz zuckt
    pushShards(shardState.w / 2, shardState.h / 2, 9999, 26); // Scherben von der Mitte wegstoßen
    startGlitchLoop();                                      // ab jetzt gelegentliche Glitches
  }, landAt);
}


// ==== WARUM: ZEILEN & STATS ====
// Baut die drei Riesenzeilen und die zwei Zielkästen aus CONFIG.
function buildWhy() {
  const lines = $('#why-lines');                             // Container für Riesenzeilen
  CONFIG.why.lines.forEach((t) => lines.append(el('span', 'why__line', t))); // jede Zeile als eigenes Element
  const stats = $('#why-stats');                             // Container für Kästen
  CONFIG.why.stats.forEach((s) => {
    const box = el('div', 'stat slam');                      // Kasten, der reinkracht
    box.dataset.reveal = '';                                 // wird beim Reinscrollen ausgelöst
    box.append(el('span', 'stat__big', s.big));              // große Zahl/Begriff
    box.append(el('span', 'stat__label', s.label));          // kleine Beschriftung
    stats.append(box);                                       // in den Container
  });
}


// ==== ABLAUF-SZENE ====
// Baut Karten und Timeline-Clips. Beim Scrollen wählt updateFlow() den
// aktiven Schritt; bei jedem Wechsel kracht die Ziffer neu rein.
let flowIndex = -1;                                          // aktuell aktiver Schritt (-1 = noch keiner)
let flowCards = [];                                          // alle Karten-Elemente
let flowClips = [];                                          // alle Timeline-Clip-Elemente
let lastSecond = -1;                                         // zuletzt angezeigte Timecode-Sekunde

function buildFlow() {
  const steps = CONFIG.flow.steps;                           // Schritte aus CONFIG
  const total = steps.length;                                // Anzahl (normalerweise 5)
  $('#ablauf').style.setProperty('--steps', total);          // CSS: Sektionshöhe hängt von der Anzahl ab
  const list = $('#flow-cards');                             // Kartenliste
  const track = $('#timeline-track');                        // Timeline-Spur
  const playhead = $('.timeline__playhead', track);          // Abspielkopf (Clips kommen davor)
  steps.forEach((s, i) => {
    const card = el('li', 'step');                           // Karte
    const meta = el('p', 'step__meta');                      // Zeile über dem Titel
    meta.append(el('span', 'step__num', `${CONFIG.flow.stepLabel} ${i + 1}/${total}`)); // "Schritt 1/5"
    meta.append(el('span', 'step__tag', s.tag));             // Stichwort
    card.append(meta);                                       // Meta in die Karte
    card.append(el('h3', 'step__title', s.title));           // Titel
    card.append(el('p', 'step__text', s.text));              // Beschreibung
    list.append(card);                                       // Karte in die Liste
    const clip = el('div', 'tl-clip', s.tag);                // passender Clip in der Timeline
    track.insertBefore(clip, playhead);                      // vor dem Abspielkopf einfügen
  });
  flowCards = $$('.step', list);                             // Karten merken
  flowClips = $$('.tl-clip', track);                         // Clips merken
  if (!REDUCED) setFlowStep(0, false);                       // Start: Schritt 1 aktiv (ohne Einschlag)
}

function setFlowStep(idx, slam = true) {
  flowIndex = idx;                                           // neuen Schritt merken
  flowCards.forEach((c, i) => c.classList.toggle('is-active', i === idx)); // nur die aktive Karte zeigen
  flowClips.forEach((c, i) => {
    c.classList.toggle('is-active', i === idx);              // aktiver Clip leuchtet
    c.classList.toggle('is-done', i < idx);                  // erledigte Clips etwas heller
  });
  const num = $('#flow-num');                                // Riesenziffer
  num.textContent = idx + 1;                                 // Ziffer setzen
  if (slam) {                                                // beim Scrollen: Einschlag-Effekte
    retrigger(num, 'is-slamming');                           // Ziffer kracht rein
    retrigger($('#flow-stage'), 'is-shaking');               // Bühne wackelt kurz
  }
}

function updateFlow(p) {                                     // p = Fortschritt der Szene (0–1)
  const total = flowCards.length;                            // Anzahl Schritte
  const idx = Math.min(total - 1, Math.floor(p * total));    // aktiver Schritt aus dem Fortschritt
  if (idx !== flowIndex) setFlowStep(idx);                   // nur bei Wechsel neu setzen
  const secs = Math.round(p * CONFIG.flow.timelineMinutes * 60); // Timecode-Sekunden
  if (secs !== lastSecond) {                                 // nur bei Änderung ins DOM schreiben
    lastSecond = secs;                                       // merken
    const mm = String(Math.floor(secs / 60)).padStart(2, '0'); // Minuten zweistellig
    const ss = String(secs % 60).padStart(2, '0');           // Sekunden zweistellig
    $('#timecode').textContent = `${mm}:${ss}`;              // anzeigen
  }
}


// ==== CHAT-SZENE ====
// Baut den Beispiel-Chat. Die Nachrichten erscheinen per CSS nacheinander,
// sobald der Chat ins Bild kommt (Klasse .is-in vom Reveal-Observer).
function buildChat() {
  const list = $('#chat-list');                              // Liste der Nachrichten
  CONFIG.stream.chat.forEach((m, i) => {
    const li = el('li', m.system ? 'chat__msg chat__msg--system' : 'chat__msg'); // normale oder System-Nachricht
    li.style.setProperty('--i', i);                          // Reihenfolge → Verzögerung
    if (m.system) {
      li.textContent = `${m.user} ${m.msg}`;                 // Systemzeile als Fließtext
    } else {
      li.append(el('span', 'chat__user', m.user));           // Nutzername
      li.append(document.createTextNode(m.msg));             // Nachricht
    }
    list.append(li);                                         // in die Liste
  });
}


// ==== EXTRA: THUMBNAIL-PUZZLE ====
// 16:9-Fläche (160 × 90) aus 12 Dreiecken. Jedes Dreieck bekommt eine
// Flugrichtung weg von der Bildmitte; CSS setzt sie beim Scrollen zusammen.
const THUMB_POINTS = {                                       // Eckpunkte im 160×90-Raster
  A: [0, 0], B: [70, 0], C: [160, 0],
  D: [0, 40], E: [55, 35], F: [110, 25], G: [160, 45],
  H: [0, 90], I: [80, 90], J: [160, 90], K: [95, 62],
};
const THUMB_TRIS = ['ABE', 'AED', 'BFE', 'BCF', 'CGF', 'FGK', 'EFK', 'DEK', 'DKI', 'DIH', 'KGJ', 'KJI']; // Dreiecke, die die Fläche lückenlos füllen

function buildThumb() {
  const g = $('#thumb-pieces');                              // SVG-Gruppe für die Teile
  THUMB_TRIS.forEach((tri) => {
    const pts = tri.split('').map((k) => THUMB_POINTS[k]);   // drei Eckpunkte holen
    const cx = (pts[0][0] + pts[1][0] + pts[2][0]) / 3;      // Schwerpunkt X
    const cy = (pts[0][1] + pts[1][1] + pts[2][1]) / 3;      // Schwerpunkt Y
    const poly = svgEl('polygon');                           // Dreieck
    poly.setAttribute('points', pts.map((p) => p.join(',')).join(' ')); // Eckpunkte setzen
    poly.setAttribute('class', 'piece');                     // CSS-Klasse
    poly.style.setProperty('--dx', ((cx - 80) * rand(1.4, 2.6) + rand(-20, 20)).toFixed(1)); // Flugweite X (weg von der Mitte)
    poly.style.setProperty('--dy', ((cy - 45) * rand(1.6, 3) + rand(-30, 30)).toFixed(1));   // Flugweite Y
    poly.style.setProperty('--dr', rand(-160, 160).toFixed(0));                               // Drehung
    g.append(poly);                                          // ins SVG
  });
}


// ==== NACH DEM CONTEST: PODEST ====
// Baut das Podest: Platz 1 in der Mitte, dann abwechselnd links/rechts.
function buildPodium() {
  const list = $('#podium');                                 // Podest-Liste
  const top = CONFIG.after.top;                              // Anzahl Plätze
  list.style.setProperty('--cols', top);                     // CSS-Spaltenanzahl
  const order = [];                                          // Anzeigereihenfolge der Ränge
  for (let rank = 1; rank <= top; rank++) {                  // Ränge der Reihe nach einsortieren
    if (rank % 2 === 0) order.unshift(rank);                 // gerade Ränge nach links
    else order.push(rank);                                   // ungerade nach rechts (1 landet in der Mitte)
  }
  order.forEach((rank, i) => {
    const slot = el('li', 'podium__slot');                   // Platz-Container
    slot.setAttribute('aria-label', `Platz ${rank}: ${CONFIG.after.barLabel}`); // für Screenreader
    const bar = el('div', 'podium__bar');                    // der Balken
    bar.style.setProperty('--h', `${100 - (rank - 1) * (60 / Math.max(1, top - 1))}%`); // Höhe: Platz 1 = 100 %, letzter = 40 % (reine Deko)
    bar.style.setProperty('--i', rank - 1);                  // Platz 1 wächst zuerst
    bar.append(el('span', 'podium__rank', `#${rank}`));      // Rang
    bar.append(el('span', 'podium__label', CONFIG.after.barLabel)); // "1 Clip online"
    slot.append(bar);                                        // Balken in den Platz
    list.append(slot);                                       // Platz ins Podest
  });
}


// ==== CHECKLISTE ====
// Schalter für "Dein Part, Jank". Es wird NICHTS gespeichert (kein
// localStorage, keine Cookies) – nach dem Neuladen ist alles wieder aus.
function makeSwitch(label, value) {
  const wrap = el('label', 'switch');                        // ganzes Label ist klickbar
  const input = el('input', 'switch__input');                // echte Checkbox (Tastatur & Screenreader)
  input.type = 'checkbox';                                   // Typ Checkbox
  input.setAttribute('role', 'switch');                      // als Schalter ansagen
  const track = el('span', 'switch__track');                 // sichtbare Schalterbahn
  track.setAttribute('aria-hidden', 'true');                 // nur Optik
  track.append(el('span', 'switch__thumb'));                 // der Knubbel
  const text = el('span', 'switch__text');                   // Beschriftung
  text.append(el('span', 'switch__label', label));           // Name des Punkts
  let chip = null;                                           // optionales Status-Kästchen
  if (value != null) {                                       // nur bei "Noch zu klären"-Punkten
    const open = isPlaceholder(value);                       // ist der Wert noch offen?
    chip = el('span', open ? 'chip chip--open' : 'chip', open ? CONFIG.part.openLabel : value); // "offen" oder echter Wert
    chip.dataset.base = chip.textContent;                    // Ursprungstext merken (für Zurückschalten)
    chip.dataset.open = open ? '1' : '0';                    // offen-Status merken
    text.append(chip);                                       // Kästchen anhängen
  }
  wrap.append(input, track, text);                           // alles zusammensetzen
  input.addEventListener('change', () => {                   // Schalter umgelegt
    if (input.checked && !REDUCED) retrigger(wrap, 'is-zapped'); // kleiner Funken-Effekt
    if (chip) {                                              // Status-Kästchen aktualisieren
      chip.textContent = input.checked ? CONFIG.part.doneLabel : chip.dataset.base; // "abgehakt" oder Ursprung
      chip.classList.toggle('chip--done', input.checked);    // gelb gefüllt, wenn abgehakt
      chip.classList.toggle('chip--open', !input.checked && chip.dataset.open === '1'); // gestrichelt, wenn offen
    }
  });
  return wrap;                                               // fertigen Schalter zurückgeben
}

function buildChecklist() {
  const deal = $('#deal-list');                              // Jobdeal-Liste
  CONFIG.part.deal.forEach((label) => deal.append(makeSwitch(label, null))); // Schalter ohne Status-Kästchen
  const open = $('#open-list');                              // "Noch zu klären"-Liste
  CONFIG.part.open.forEach((item) => open.append(makeSwitch(item.label, item.value))); // Schalter mit Status
  const updateCount = () => {                                // Zähler "Noch offen: n"
    const n = $$('.switch__input', open).filter((i) => !i.checked).length; // nicht angehakte zählen
    $('#open-count').textContent = n === 0 ? CONFIG.part.doneText : CONFIG.part.countText.replace('{n}', n); // Text setzen
  };
  open.addEventListener('change', updateCount);              // bei jeder Änderung neu zählen
  updateCount();                                             // Startwert
}


// ==== SZENEN VERMESSEN ====
// Merkt sich Position und Höhe aller scroll-gesteuerten Sektionen, damit
// beim Scrollen KEIN Layout gemessen werden muss (das wäre langsam).
const scenes = [];                                           // { el, type, top, height, last }
let vh = window.innerHeight;                                 // Fensterhöhe

function collectScenes() {
  $$('[data-scene]').forEach((node) => {
    scenes.push({ el: node, type: node.dataset.scene, top: 0, height: 0, last: -1 }); // Szene registrieren
  });
}

function measure() {
  vh = window.innerHeight;                                   // Fensterhöhe neu lesen
  const y = window.scrollY;                                  // aktuelle Scrollposition
  scenes.forEach((s) => {
    s.top = s.el.getBoundingClientRect().top + y;            // Abstand zum Seitenanfang
    s.height = s.el.offsetHeight;                            // Höhe der Sektion
    s.last = -1;                                             // erzwingt Neuberechnung
  });
  measureShards();                                           // Scherben-Mittelpunkte neu berechnen
  scrollDirty = true;                                        // beim nächsten Frame alles aktualisieren
  requestTick();                                             // Frame anfordern
}

function sceneProgress(s, y) {                               // Fortschritt 0–1 je nach Szenentyp
  if (s.type === 'hero') return clamp(y / Math.max(1, s.height));                 // Hero: 0 oben, 1 wenn rausgescrollt
  if (s.type === 'flow') return clamp((y - s.top) / Math.max(1, s.height - vh));  // Sticky: 0 beim Andocken, 1 beim Ablösen
  return clamp((y + vh - s.top) / (vh + s.height));                               // Standard: 0 kommt unten rein, 1 oben raus
}

function updateScenes(y) {
  for (const s of scenes) {
    if (y + vh < s.top - 200 || y > s.top + s.height + 200) continue; // weit außer Sicht → überspringen
    const p = sceneProgress(s, y);                           // Fortschritt berechnen
    if (Math.abs(p - s.last) < 0.0005) continue;             // praktisch unverändert → nichts tun
    s.last = p;                                              // merken
    s.el.style.setProperty('--p', p.toFixed(4));             // an CSS übergeben
    if (s.type === 'flow') updateFlow(p);                    // Ablauf-Szene braucht zusätzlich JS-Logik
  }
}


// ==== SCROLL-ENGINE (rAF-TICK) ====
// EIN zentraler Animations-Frame für alles: Scroll-Szenen, Fortschritts-
// balken und Scherben-Physik. Läuft nur, wenn es etwas zu tun gibt.
let ticking = false;                                         // ist schon ein Frame angefordert?
let scrollDirty = true;                                      // hat sich die Scrollposition geändert?
const progressBar = document.getElementById('progress-bar'); // Balken oben

function requestTick() {
  if (ticking) return;                                       // schon angefordert → nicht doppelt
  ticking = true;                                            // merken
  requestAnimationFrame(tick);                               // zum nächsten Bildschirm-Frame ausführen
}

function tick(now) {
  ticking = false;                                           // Anforderung verbraucht
  const y = window.scrollY;                                  // EINMAL pro Frame lesen
  if (scrollDirty) {                                         // nur bei Scroll-Änderung
    scrollDirty = false;                                     // zurücksetzen
    updateScenes(y);                                         // Szenen aktualisieren
    const max = document.documentElement.scrollHeight - vh;  // maximal möglicher Scrollweg
    progressBar.style.transform = `scaleX(${clamp(y / Math.max(1, max)).toFixed(4)})`; // Balken füllen
  }
  let again = false;                                         // braucht es noch einen Frame?
  if (heroVisible) again = stepShards(now, y);               // Scherben nur, solange Hero sichtbar
  if (again) requestTick();                                  // weitermachen, sonst Schleife schlafen lassen
}


// ==== EINSCHLAG-REVEALS (IntersectionObserver) ====
// Alles mit data-reveal bekommt .is-in, sobald es ins Bild scrollt
// (einmalig). Zusätzlich: Hero-Sichtbarkeit für Glitch/Ticker/Physik.
function observeReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;                         // noch nicht sichtbar → warten
      e.target.classList.add('is-in');                       // Animation auslösen
      io.unobserve(e.target);                                // nur einmal, danach nicht mehr beobachten
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });    // auslösen, wenn 25 % sichtbar (etwas über dem unteren Rand)
  $$('[data-reveal]').forEach((n) => io.observe(n));         // alle Kandidaten anmelden

  const hero = $('#top');                                    // Hero beobachten
  const heroIO = new IntersectionObserver(([e]) => {
    heroVisible = e.isIntersecting;                          // sichtbar ja/nein
    hero.classList.toggle('is-visible', heroVisible);        // CSS: Ticker pausiert außer Sicht
    if (heroVisible) requestTick();                          // wieder sichtbar → Scherben auf Stand bringen
  });
  heroIO.observe(hero);                                      // anmelden
}


// ==== START ====
// Reihenfolge: erst Inhalte bauen, dann Texte einsetzen, dann messen und
// die Bewegung einschalten.
function init() {
  buildTicker();                                             // Laufband
  const charCount = buildHeroTitle();                        // Titel zerlegen
  buildShards();                                             // Scherben anlegen
  buildWhy();                                                // Warum-Zeilen und Kästen
  buildFlow();                                               // Ablauf-Karten und Timeline
  buildChat();                                               // Beispiel-Chat
  buildThumb();                                              // Thumbnail-Puzzle
  buildPodium();                                             // Podest
  buildChecklist();                                          // Schalter
  applyConfig();                                             // Texte/Links einsetzen (nach dem Bauen, damit auch .glitch-Texte stimmen)
  collectScenes();                                           // scroll-gesteuerte Sektionen registrieren
  observeReveals();                                          // Reveals + Hero-Sichtbarkeit

  if (REDUCED) {                                             // ruhige Variante:
    $('#top').classList.add('is-landed');                    // Scherben statisch zeigen
    return;                                                  // keine Scroll-Engine, keine Physik, kein Glitch
  }

  measure();                                                 // Positionen messen
  bindShardPointer();                                        // Maus/Finger für Scherben
  heroIntro(charCount);                                      // Einschlag-Intro starten
  window.addEventListener('scroll', () => { scrollDirty = true; requestTick(); }, { passive: true }); // Scrollen → nächsten Frame anfordern
  window.addEventListener('resize', measure);                // Fenstergröße geändert → neu messen
  window.addEventListener('load', measure);                  // nach dem Laden aller Inhalte nochmal messen
  if ('ResizeObserver' in window) new ResizeObserver(() => measure()).observe(document.body); // Seitenhöhe ändert sich (z. B. Umbruch) → neu messen
}

init(); // los geht's (Skript ist "defer", das HTML ist also schon da)
