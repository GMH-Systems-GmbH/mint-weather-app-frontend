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
1. Suche den Kommentar `<!-- AUFGABE 1: Überschrift für unsere App erstellen -->`.
2. Erstelle unter diesem Kommentar eine Abschnittsüberschrift erster Ebene und vergebe dem Element eine ID `app-title`.
3. Gib deiner Wetter-App einen Namen in dem du in das Überschriftsegment deinen Wetter App Namen schreibst (z.B. <> Wetter App </>).

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<br>

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary> 

Es gibt die Abschnittsüberschriften Elemente `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` und `<h6>`.

Das ID-Attribut wird immer im öffnenden Tag eines HTML-Elements vergeben, zum Beispiel nach dem Tag-Namen und vor dem schließenden spitzen Klammerzeichen.
Der Name deiner App steht zwischen dem öffnenden und schließenden Tag.

**Indirektes Codebeispiel:**
```html
<!-- AUFGABE 1: Überschrift für unsere App erstellen -->
<h1 id="...">Dein App-Name</h1>
```


</details>

<br>

**Ressourcen:**
- [Überschriften in HTML](https://developer.mozilla.org/de/docs/Web/HTML/Element/Heading_Elements)
- [HTML-Attribute: ID](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/id)


#### Schaue dir nach jeder Aufgabe gerne das Ergebnis deiner Arbeit im Browser an. Damit im Browser der aktuelle Stand deines HTML-Dokuments abgebildet wird, musst du das Dokument immer nach einer Änderung mit dem Tastenkürzel Strg + S speichern.  

---

### Aufgabe 2: Lade-Anzeige erstellen
1. Suche den Kommentar `<!-- AUFGABE 2: Lade-Anzeige erstellen -->`. Scrolle dafür nach fast ganz unten in dem HTML Dokument.
2. Erstelle unter diesem Kommentar einen **Container** und gebe ihm die ID `loading-indicator` sowie auch die Klasse `hidden`.
3. Füge in dem Container einen Text ein, der anzeigt, dass Daten geladen werden (z.B. "Daten werden geladen...").

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<br>

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Für einen **Container** verwendest du das `<div>`-Element.
- Die **ID** und die **Klasse** werden beide im öffnenden Tag des **Container**s (also im `<div>`) angegeben. Mehrere Attribute werden mit Leerzeichen getrennt.
- Die Klasse `hidden` sorgt dafür, dass der **Container** zunächst nicht sichtbar ist.
- Der angezeigte Text zum Ladevorgang steht als Inhalt zwischen dem öffnenden und schließenden `<div>`-Tag.
- Du kannst als Text zum Beispiel "Daten werden geladen..." oder eine ähnliche Formulierung wählen.


**Indirektes Codebeispiel:**
```html
<!-- AUFGABE 2: Lade-Anzeige erstellen -->
<div id="..." class="...">Text für die Ladeanzeige</div>
```


</details>

<br>

**Ressourcen:**
- [HTML-Klassen: class-Attribut](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/class)
- [Sichtbarkeit von Elementen](https://developer.mozilla.org/de/docs/Web/CSS/visibility)

---

### Aufgabe 3: Fehlermeldung erstellen
1. Suche den Kommentar `<!-- AUFGABE 3: Fehlermeldung erstellen -->`. Diesen findest du direkt unter der Aufgabe 2.
2. Erstelle unter diesem Kommentar einen **Container** mit der ID `error-message` und der Klasse `hidden`.
3. Füge einen Text ein, der Benutzern mitteilt, dass ein Fehler aufgetreten ist (z.B. "Fehler beim Laden der Wetterdaten. Bitte versuche es später erneut.").

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<br>

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Verwende für den **Container** das `<div>`-Element.
- Die **ID** und die **Klasse** werden beide im öffnenden Tag des **Container**s angegeben. Mehrere Attribute werden mit Leerzeichen getrennt.
- Die Klasse `hidden` sorgt dafür, dass der Fehlerbereich zunächst nicht sichtbar ist.
- Der Text mit der Fehlermeldung steht zwischen dem öffnenden und schließenden `<div>`-Tag.
- Die genaue Formulierung der Fehlermeldung kannst du selbst wählen, sie sollte aber deutlich machen, dass ein Fehler aufgetreten ist.

**Indirektes Codebeispiel:**
```html
<!-- AUFGABE 3: Fehlermeldung erstellen -->
<div id="..." class="...">Text für die Fehlermeldung</div>
```

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

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<br>

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Für ein **Dropwdown**-Menü verwendest du das `<select>`-Element.
- Die einzelnen Auswahlmöglichkeiten im **Dropwdown**-Menü werden mit `<option>`-Elementen erstellt.
- Der Text, den der Nutzer sieht (z.B. "Stadt auswählen..."), steht zwischen dem öffnenden und schließenden `<option>`-Tag.
- Achte darauf, dass jedes `<option>`-Element innerhalb des `<select>`-Elements steht.


**Indirektes Codebeispiel:**
```html
<!-- AUFGABE 4: Stadt-Auswahl erstellen -->
<select id="...">
  <option value="">Text für die erste Option</option>
  <!-- Weitere Optionen folgen später -->
</select>
```

</details>

<br>

**Ressourcen:**
- [Dropdown-Menüs in HTML](https://developer.mozilla.org/de/docs/Web/HTML/Element/select)
- [Optionen in Dropdown-Menüs](https://developer.mozilla.org/de/docs/Web/HTML/Element/option)

---

### Aufgabe 5: Bereich für aktuelles Wetter erstellen

1. Suche den Kommentar `<!-- AUFGABE 5: Bereich für die Wetteranzeige -->`.
2. Du befindest dich grade in dem Container welcher das Aktuelle Wetter beinhalten wird. 
3. Erstelle unter dem Kommentar `<!-- AUFGABE 5: Bereich für die Wetteranzeige -->` **zwei weitere Container**:
   - Einen für die Standort-Informationen
   - Einen für die aktuellen Wetterbedingungen


---

#### Container 1: Standort-Informationen

3.1 Erstelle einen Container mit der ID `location-info` für die Standort-Informationen.

3.2 In diesen Container müssen dann folgende Elemente dargestellt bzw. hinzugefügt werden:
  - Eine Überschrift zweiter Ebene für den Stadtnamen mit der ID `city-name`
  - Ein Absatz für das Land mit der ID `country`

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<details>

<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Lege einen neuen Container `<div>` im vorhandenen äußeren Container an und gib ihm folgende passende ID (`location-info`).
- In diesen Container müssen nun folgende Elementen dargestellt bzw. hinzugefügt werden:
  - Eine Überschrift der zweiten Ebene (`<h2>`) für den Stadtnamen und vergebe dem Element die ID: `city-name`
  - Ein Absatz (`<p>`) für das Land und vergebe dem Element die ID: `country`
- Beide Elemente (Die Überschrift und der Absatz) bleiben zunächst leer – der Inhalt wird später automatisch durch JavaScript eingesetzt.


**Indirektes Codebeispiel:**
```html
<div id="...">
  <h2 id="..."></h2>
  <p id="..."></p>
</div>
```

</details>

---

#### Container 2: Aktuelle Wetterbedingungen

3.3 Erstelle einen weiteren Container in dem äußeren Container, mit der folgenden ID `current-conditions`, für die aktuellen Wetterbedingungen.

3.4 Dieser Container enthält zwei weitere Container:
  - Einen Container für das Wettersymbol mit der ID `condition-icon` und der Klasse `weather-icon` für das Symbol
  - Einen Container für die Wetterdetails. Dieser Container enthält zwei Absätze(`<p>`):
    - Einen für die Wetterbeschreibung mit der ID `condition-text`
    - Einen für die aktuelle Temperatur `current-temp`

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<details>

<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Direkt nach dem Standort-Container erstellst du einen weiteren Container `<div>` mit der ID `current-conditions`.
- In diesen kommen:
  - Ein leere Container `<div>` für das Wettersymbol mit der ID `condition-icon` und Klasse `weather-icon`
  - Ein weiterer Container `<div>` für die Wetterdetails, mit der ID `condition-details` und darin zwei Absätze (`<p>`):
    - Einer für die Wetterbeschreibung mit der ID `condition-text`
    - Einer für die aktuelle Temperatur mit der ID `current-temp`
- Lasse auch hier alle Felder leer.

**Indirektes Codebeispiel:**  
```html
<div id="...">
  <div id="..." class="..."></div>
  <div id="...">
    <p id="..."></p>
    <p id="..."></p>
  </div>
</div>
```

</details>

---

### Aufgabe 6: Bereich für die 3-Tage-Vorhersage erstellen
1. Suche den Kommentar `<!-- AUFGABE 6: Bereich für die 3-Tage Vorhersage -->`.
2. Erstelle unter diesem Kommentar einen **Container** mit der ID `forecast-container`.
3. Füge innerhalb dieses Containers eine Überschrift dritter Ebene mit dem Text "3-Tage Vorhersage" hinzu.
4. Erstelle innerhalb des containers einen weiteren leeren **Container** mit der ID `forecast-cards`, in den später die Vorhersagekarten eingefügt werden. Dieser **Container** enthält noch keinen Inhalt.

Speichere deine Änderungen mit dem Tastenkürzel `Strg + S`!

<br>

<details>
<summary><strong>Hinweise <-- Anklicken um Hilfe zu öffnen</strong></summary>

- Für einen **Container** verwendest du meist das `<div>`-Element.
- Die **ID** eines **Containers** wird wie gewohnt im öffnenden Tag vergeben.
- Überschriften gibt es in verschiedenen Ebenen: `<h1>`, `<h2>`, `<h3>`, usw. Für eine Überschrift dritter Ebene verwendest du das passende Tag.
- Der Text, der in der Überschrift erscheinen soll, kommt zwischen die öffnenden und schließenden Überschriften-Tags.
- Ein "leerer **Container**" bedeutet, dass du das Element zwar erstellst, aber noch keinen Inhalt hineinschreibst – dieser wird später durch JavaScript ergänzt.
- Achte darauf, dass die Struktur und Reihenfolge wie in der Aufgabenstellung eingehalten wird.

**Indirektes Codebeispiel:**
```html
<!-- AUFGABE 6: Bereich für die 3-Tage Vorhersage -->
<div id="...">
  <h3>Text für die Überschrift</h3>
  <div id="..."></div>
</div>
```

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
