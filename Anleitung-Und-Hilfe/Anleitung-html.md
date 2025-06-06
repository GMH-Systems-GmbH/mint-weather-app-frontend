# Wetter-App mit HTML

## Was wir heute lernen
- Was HTML-Tags sind und wie man sie verwendet
- Wie man eine Webseite strukturiert
- Wie man verschiedene HTML-Elemente sinnvoll einsetzt
- Wie man IDs und Klassen nutzt

## Was ist HTML?
HTML (HyperText Markup Language) ist die Sprache, mit der wir Webseiten erstellen. HTML besteht aus Tags wie `<p>` für Absätze oder `<h1>` für Überschriften.

Ein HTML-Tag sieht so aus: `<tagname>Inhalt</tagname>`

**Beispiel:** `<p>Hallo Welt!</p>` erstellt einen Absatz mit dem Text "Hallo Welt!".

---

## Die Aufgaben 

### Aufgabe 1: Überschrift für unsere App erstellen
1. Öffne die Datei `index.html` in einem Texteditor.
2. Suche den Kommentar `<!-- Hier kommt die Überschrift der App hin -->`.
3. Erstelle eine Überschrift erster Ebene mit der ID `app-title`.
4. Gib deiner Wetter-App einen Namen in dem du in das Überschriftsegment schreibst (z.B. <>"Wetter App"</>).

**Ressourcen:**
- [Überschriften in HTML](https://developer.mozilla.org/de/docs/Web/HTML/Element/Heading_Elements)
- [HTML-Attribute: ID](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/id)

---

### Aufgabe 2: Stadt-Auswahl erstellen
1. Suche den Kommentar `<!-- Hier kommt das Dropdown-Menü hin -->`.
2. Erstelle ein Dropdown-Menü mit der ID `city-dropdown`.
3. Füge eine erste Option mit dem Text "Stadt auswählen..." hinzu.

**Ressourcen:**
- [Dropdown-Menüs in HTML](https://developer.mozilla.org/de/docs/Web/HTML/Element/select)
- [Optionen in Dropdown-Menüs](https://developer.mozilla.org/de/docs/Web/HTML/Element/option)

---

### Aufgabe 3: Bereich für aktuelles Wetter erstellen
1. Suche den Bereich mit `<div id="weather-container" class="hidden">`.
2. Erstelle direkt nach dieser Zeile einen Container für das aktuelle Wetter mit der ID `current-weather`.
3. Dieser Container sollte drei weitere Container umfassen:

#### Standort-Informationen (ID: `location-info`)
- Eine Überschrift zweiter Ebene für den Stadtnamen (ID: `city-name`)
- Ein Absatz für das Land (ID: `country`)

#### Aktuelle Wetterbedingungen (ID: `current-conditions`)
- Ein Bereich für das Wettersymbol (ID: `condition-icon`, Klasse: `weather-icon`)
- Ein Bereich für Detailinformationen (ID: `condition-details`) mit:
  - Einem Absatz für die Wetterbeschreibung (ID: `condition-text`)
  - Einem Absatz für die aktuelle Temperatur (ID: `current-temp`)

#### Weitere Wetterdetails (ID: `current-details`)
- Erstelle einen Container mit der Klasse `detail-item`.
  - Erstelle ein `<span>` mit der Klasse `detail-label` und dem Inhalt `Luftfeuchtigkeit`.
  - Erstelle ein zweites `<span>` mit der id `hunmidity`.  

- Erstelle einen weiteren Container mit der Klasse `detail-item`.
  - Erstelle ein `<span>` mit der Klasse `detail-label` und dem Inhalt `Luftdruck`.
  - Erstelle ein zweites `<span>` mit der id `pressure`.

- Erstelle einen letzten Container mit der Klasse `detail-item`.
  - Erstelle ein `<span>` mit der Klasse `detail-label` und dem Inhalt `Wind`.
  - Erstelle ein zweites `<span>` mit der id `wind`.

**Ressourcen:**
- [Container-Elemente: div](https://developer.mozilla.org/de/docs/Web/HTML/Element/div)
- [Textabsätze: p](https://developer.mozilla.org/de/docs/Web/HTML/Element/p)
- [Inline-Textformatierung: span](https://developer.mozilla.org/de/docs/Web/HTML/Element/span)

---

### Aufgabe 4: Bereich für die 3-Tage Vorhersage erstellen
1. Suche den Kommentar `<!-- AUFGABE 4: Bereich für die 3-Tage Vorhersage -->`.
2. Erstelle einen Container mit der ID `forecast-container`.
3. Füge eine Überschrift dritter Ebene mit dem Text "3-Tage Vorhersage" hinzu.
4. Erstelle einen leeren Container mit der ID `forecast-cards`, in den später die Vorhersagekarten eingefügt werden.

**Ressourcen:**
- [HTML-Container: Abschnitte und Gliederung](https://developer.mozilla.org/de/docs/Web/HTML/Element/section)
- [Überschriften verschiedener Ebenen](https://developer.mozilla.org/de/docs/Web/HTML/Element/Heading_Elements)

---

### Aufgabe 5: Lade-Anzeige erstellen
1. Suche den Kommentar `<!-- AUFGABE 5: Lade-Anzeige erstellen -->`.
2. Erstelle einen Container mit der ID `loading-indicator` und der Klasse `hidden`.
3. Füge einen Text ein, der anzeigt, dass Daten geladen werden (z.B. "Daten werden geladen...").

**Ressourcen:**
- [HTML-Klassen: class-Attribut](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/class)
- [Sichtbarkeit von Elementen](https://developer.mozilla.org/de/docs/Web/CSS/visibility)

---

### Aufgabe 6: Fehlermeldung erstellen
1. Suche den Kommentar `<!-- AUFGABE 6: Fehlermeldung erstellen -->`.
2. Erstelle einen Container mit der ID `error-message` und der Klasse `hidden`.
3. Füge einen Text ein, der Benutzern mitteilt, dass ein Fehler aufgetreten ist (z.B. "Fehler beim Laden der Wetterdaten. Bitte versuche es später erneut.").

**Ressourcen:**
- [Semantische Elemente für Benachrichtigungen](https://developer.mozilla.org/de/docs/Web/HTML/Element/aside)
- [Verwendung von Klassen und IDs](https://developer.mozilla.org/de/docs/Web/CSS/Class_selectors)

---

## Visuelle Darstellung der App-Struktur

```
+---------------------------------------------+
|                 Wetter App                  | <- Überschrift (Aufgabe 1)
|                                  [☀️/🌙]   | <- Theme Switch (bereits vorhanden)
|                                             |
| Stadt auswählen... ▼                        | <- Dropdown (Aufgabe 2)
+---------------------------------------------+
|                                             |
| Berlin                                      | <- Standort-Info
| Deutschland                                 |
|                                             |
| [☀️] Sonnig 22°C                            | <- Wetterbedingungen
|                                             |
|                                             |
| Luftfeuchtigkeit: 45%                       | <- Wetterdetails
| Luftdruck: 1013 hPa                         |    (detail-items)
| Wind: 12 km/h Nord-Ost                      |
|                                             |
+---------------------------------------------+
|                                             |
| 3-Tage Vorhersage                           | <- Vorhersage (Aufgabe 4)
|                                             |
| [Karte Tag 1] [Karte Tag 2] [Karte Tag 3]   |
|                                             |
+---------------------------------------------+
```

---

## Warum sind IDs und Klassen wichtig?
- **IDs** sind eindeutige Bezeichner, die im JavaScript verwendet werden, um bestimmte Elemente zu finden und mit Daten zu füllen.
- **Klassen** können mehreren Elementen zugewiesen werden und werden hauptsächlich für die Gestaltung (CSS) und für Gruppen ähnlicher Elemente verwendet.

**Hinweis:** Wenn du die IDs änderst, kann das JavaScript die Elemente nicht mehr finden und die App funktioniert nicht mehr!

---

## Prüfe deine Arbeit
- Sind alle Tags korrekt geöffnet und geschlossen?
- Hast du die vorgegebenen IDs verwendet?
- Ist die Struktur logisch aufgebaut?
- Verstehst du, welche Funktion jeder Bereich in der App hat?