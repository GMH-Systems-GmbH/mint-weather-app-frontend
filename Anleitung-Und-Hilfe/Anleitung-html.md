# Wetter-App mit HTML

## Was wir heute lernen
- Was HTML-Tags sind und wie man sie verwendet
- Wie man eine Webseite strukturiert
- Wie man verschiedene HTML-Elemente sinnvoll einsetzt
- Wie man IDs und Klassen nutzt

## Was ist HTML?
HTML (HyperText Markup Language) ist die Sprache, mit der wir Webseiten erstellen. HTML besteht aus Tags wie `<p>` für Absätze oder `<h1>` für Überschriften.

Ein HTML-Tag sieht so aus: `<tagname>Inhalt</tagname>`

**Beispiel:** `<p>Hallo Welt!</p>` erstellt einen **Absatz** mit dem Text "Hallo Welt!".

---

## Die Aufgaben 

### Aufgabe 1: Überschrift für unsere App erstellen
1. Öffne die Datei `index.html` in dem Code-Editor (Visual Studio Code).
2. Suche den Kommentar `<!-- AUFGABE 1: Überschrift für unsere App erstellen -->`.
3. Erstelle unter diesem Kommentar eine Abschnittsüberschrift erster Ebene mit der ID `app-title`.
4. Gib deiner Wetter-App einen Namen in dem du in das Überschriftsegment schreibst (z.B. <>"Wetter App"</>).

<br>

<details>
<summary>Hinweise</summary> 

Es gibt die Abschnittsüberschriften Elemente `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` und `<h6>`.

Das ID-Attribut wird immer im öffnenden Tag eines HTML-Elements vergeben, zum Beispiel nach dem Tag-Namen und vor dem schließenden spitzen Klammerzeichen.
Der Name deiner App steht zwischen dem öffnenden und schließenden Tag.

</details>

<br>

**Ressourcen:**
- [Überschriften in HTML](https://developer.mozilla.org/de/docs/Web/HTML/Element/Heading_Elements)
- [HTML-Attribute: ID](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/id)


#### Schaue dir nach jeder Aufgabe gerne das Ergebnis deiner Arbeit im Browser an. Damit im Browser der aktuelle Stand deines HTML-Dokuments abgebildet wird, musst du das Dokument immer nach einer Änderung mit dem Tastenkürzel Strg + S speichern.  

---

### Aufgabe 2: Lade-Anzeige erstellen
1. Suche den Kommentar `<!-- AUFGABE 2: Lade-Anzeige erstellen -->`. Scrolle dafür nach fast ganz unten in dem HTML Dokument (`index.html`).
2. Erstelle unter diesem Kommentar einen **Container** mit der ID `loading-indicator` und der Klasse `hidden`.
3. Füge einen Text ein, der anzeigt, dass Daten geladen werden (z.B. "Daten werden geladen...").

<br>

<details>
<summary><strong>Hinweise</strong></summary>

- Für einen **Container** verwendest du das `<div>`-Element.
- Die **ID** und die **Klasse** werden beide im öffnenden Tag des **Container**s (also im `<div>`) angegeben. Mehrere Attribute werden mit Leerzeichen getrennt.
- Die Klasse `hidden` sorgt dafür, dass der **Container** zunächst nicht sichtbar ist.
- Der angezeigte Text zum Ladevorgang steht als Inhalt zwischen dem öffnenden und schließenden `<div>`-Tag.
- Du kannst als Text zum Beispiel "Daten werden geladen..." oder eine ähnliche Formulierung wählen.
</details>

<br>

**Ressourcen:**
- [HTML-Klassen: class-Attribut](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/class)
- [Sichtbarkeit von Elementen](https://developer.mozilla.org/de/docs/Web/CSS/visibility)

---

### Aufgabe 3: Fehlermeldung erstellen
1. Suche den Kommentar `<!-- AUFGABE 3: Fehlermeldung erstellen -->`. Diesen findest du direkt unter der Aufgabe 5.
2. Erstelle unter diesem Kommentar einen **Container** mit der ID `error-message` und der Klasse `hidden`.
3. Füge einen Text ein, der Benutzern mitteilt, dass ein Fehler aufgetreten ist (z.B. "Fehler beim Laden der Wetterdaten. Bitte versuche es später erneut.").

<br>

<details>
<summary><strong>Hinweise</strong></summary>

- Verwende für den **Container** das `<div>`-Element.
- Die **ID** und die **Klasse** werden beide im öffnenden Tag des **Container**s angegeben. Mehrere Attribute werden mit Leerzeichen getrennt.
- Die Klasse `hidden` sorgt dafür, dass der Fehlerbereich zunächst nicht sichtbar ist.
- Der Text mit der Fehlermeldung steht zwischen dem öffnenden und schließenden `<div>`-Tag.
- Die genaue Formulierung der Fehlermeldung kannst du selbst wählen, sie sollte aber deutlich machen, dass ein Fehler aufgetreten ist.
</details>

<br>

**Ressourcen:**
- [Semantische Elemente für Benachrichtigungen](https://developer.mozilla.org/de/docs/Web/HTML/Element/aside)
- [Verwendung von Klassen und IDs](https://developer.mozilla.org/de/docs/Web/CSS/Class_selectors)

---

### Aufgabe 4: Stadt-Auswahl erstellen
1. Suche den Kommentar `<!-- AUFGABE 4: Stadt-Auswahl erstellen -->`.
2. Erstelle unter diesem Kommentar ein **Dropwdown**-Menü mit der ID `city-dropdown`.
3. Füge eine erste **Option** mit dem Text "Stadt auswählen..." hinzu.

<br>

<details>
<summary><strong>Hinweise</strong></summary>

- Für ein **Dropwdown**-Menü verwendest du das `<select>`-Element.
- Die einzelnen Auswahlmöglichkeiten im **Dropwdown**-Menü werden mit `<option>`-Elementen erstellt.
- Der Text, den der Nutzer sieht (z.B. "Stadt auswählen..."), steht zwischen dem öffnenden und schließenden `<option>`-Tag.
- Achte darauf, dass jedes `<option>`-Element innerhalb des `<select>`-Elements steht.

</details>

<br>

**Ressourcen:**
- [Dropdown-Menüs in HTML](https://developer.mozilla.org/de/docs/Web/HTML/Element/select)
- [Optionen in Dropdown-Menüs](https://developer.mozilla.org/de/docs/Web/HTML/Element/option)

---

### Aufgabe 5: Bereich für aktuelles Wetter erstellen
1. Suche den Kommentar `<!-- AUFGABE 5: Bereich für die Wetteranzeige -->`.
2. Erstelle direkt nach dieser Zeile einen **Container** für das aktuelle Wetter mit der ID `current-weather`.
3. Dieser **Container** sollte drei weitere **Container** umfassen:

---

#### Einen **Container** (Standort-Informationen) mit der ID: `location-info`
- Eine Überschrift zweiter Ebene für den Stadtnamen (ID: `city-name`)
- Ein **Absatz** für das Land (ID: `country`)

<details>
<summary><strong>Hinweise</strong></summary>

- Erstelle einen neuen **Container** (`<div>...</div>`) mit der passenden ID für Standort-Informationen.
- In diesen **Container** gehören zwei Elemente:
  - Eine Überschrift zweiter Ebene (`<h2>...</h2>`). Gib dieser Überschrift die richtige ID für den Stadtnamen.
  - Ein **Absatz**-Element für das Land(`<p>...</p>`). Achte auch hier auf die richtige ID.
- Die Überschrift steht typischerweise über dem **Absatz**.
- Beide Elemente werden später mit JavaScript befüllt.

</details>

---

#### Einen **Container** (Aktuelle Wetterbedingungen) mit der ID: `current-conditions`
- Ein **Container** für das Wettersymbol (ID: `condition-icon`, Klasse: `weather-icon`)
- Ein **Container** für Detailinformationen (ID: `condition-details`) mit:
  - Einem **Absatz** für die Wetterbeschreibung (ID: `condition-text`)
  - Einem **Absatz** für die aktuelle Temperatur (ID: `current-temp`)

<details>
<summary><strong>Hinweise</strong></summary>

- Lege einen weiteren **Container** für die aktuellen Wetterbedingungen an und vergib die passende ID.
- Verwende für das Wettersymbol einen weiteren **Container**. Diesem **Container** gibst du die passende ID und zusätzlich die Klasse für das Wettersymbol.
- Für die Details erstelle einen weiteren **Container** mit der passenden ID.
  - In diesen **Container** kommen zwei **Absatz**-Elemente:
    - Eines für die Beschreibung der Wetterlage (mit passender ID)
    - Eines für die aktuelle Temperatur (mit passender ID)
- Achte darauf, dass alle IDs exakt so geschrieben werden wie in der Aufgabenstellung.

</details>

---

#### Einen **Container** (Weitere Wetterdetails) mit der ID: `current-details`
- Erstelle einen **Container** mit der Klasse `detail-item`.
  - Erstelle ein `<span>` mit der Klasse `detail-label` und dem Inhalt `Luftfeuchtigkeit`.
  - Erstelle ein zweites `<span>` mit der ID `humidity`.  

- Erstelle einen weiteren **Container** mit der Klasse `detail-item`.
  - Erstelle ein `<span>` mit der Klasse `detail-label` und dem Inhalt `Luftdruck`.
  - Erstelle ein zweites `<span>` mit der ID `pressure`.

- Erstelle einen letzten **Container** mit der Klasse `detail-item`.
  - Erstelle ein `<span>` mit der Klasse `detail-label` und dem Inhalt `Wind`.
  - Erstelle ein zweites `<span>` mit der ID `wind`.


<details>
<summary><strong>Hinweise</strong></summary>

- Erstelle einen **Container** für weitere Wetterdetails und vergib die passende ID.
- Für jede Wetter-Information (Luftfeuchtigkeit, Luftdruck, Wind) erstelle jeweils einen Untercontainer mit einer bestimmten Klasse.
- In jeden dieser Untercontainer kommen zwei Inline-Elemente (`<span>`):
  - Das erste `<span>` bekommt die Klasse für die Beschriftung und enthält den passenden Text (z.B. "Luftfeuchtigkeit").
  - Das zweite `<span>` bekommt die passende ID für die jeweilige Wetter-Information (z.B. `humidity`, `pressure`, `wind`). Es enthält keinen Text.
- Die Reihenfolge ist: Beschriftung zuerst, dann der Wert.

</details>

---

**Ressourcen:**
- [Container-Elemente: div](https://developer.mozilla.org/de/docs/Web/HTML/Element/div)
- [Textabsätze: p](https://developer.mozilla.org/de/docs/Web/HTML/Element/p)
- [Inline-Textformatierung: span](https://developer.mozilla.org/de/docs/Web/HTML/Element/span)

---

### Aufgabe 6: Bereich für die 3-Tage-Vorhersage erstellen
1. Suche den Kommentar `<!-- AUFGABE 6: Bereich für die 3-Tage Vorhersage -->`.
2. Erstelle unter diesem Kommentar einen **Container** mit der ID `forecast-container`.
3. Füge eine Überschrift dritter Ebene mit dem Text "3-Tage Vorhersage" hinzu.
4. Erstelle einen leeren **Container** mit der ID `forecast-cards`, in den später die Vorhersagekarten eingefügt werden. Dieser **Container** enthält noch keinen Inhalt.

<br>

<details>
<summary><strong>Hinweise</strong></summary>

- Für einen **Container** verwendest du meist das `<div>`-Element.
- Die **ID** eines **Containers** wird wie gewohnt im öffnenden Tag vergeben.
- Überschriften gibt es in verschiedenen Ebenen: `<h1>`, `<h2>`, `<h3>`, usw. Für eine Überschrift dritter Ebene verwendest du das passende Tag.
- Der Text, der in der Überschrift erscheinen soll, kommt zwischen die öffnenden und schließenden Überschriften-Tags.
- Ein "leerer **Container**" bedeutet, dass du das Element zwar erstellst, aber noch keinen Inhalt hineinschreibst – dieser wird später durch JavaScript ergänzt.
- Achte darauf, dass die Struktur und Reihenfolge wie in der Aufgabenstellung eingehalten wird.
</details>

<br>

**Ressourcen:**
- [HTML-Container: Abschnitte und Gliederung](https://developer.mozilla.org/de/docs/Web/HTML/Element/section)
- [Überschriften verschiedener Ebenen](https://developer.mozilla.org/de/docs/Web/HTML/Element/Heading_Elements)


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