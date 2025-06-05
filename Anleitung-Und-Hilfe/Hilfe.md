# Hilfe und erweitertes Wissen

## Häufig verwendete HTML-Elemente

-   `<div>` - Container für andere Elemente
-   `<h1>, <h2>, <h3>` - Überschriften unterschiedlicher Wichtigkeit
-   `<p>` - Textabsatz
-   `<span>` - Inline-Textabschnitt
-   `<select>` und `<option>` - Dropdown-Menü mit Auswahlmöglichkeiten

## HTML-Hilfe und Referenzen

-   Vollständige HTML-Referenz
-   HTML-Einführung für Anfänger
-   Attribute in HTML
-   Wichtige Konzepte in HTML

---

## Was ist eine ID?

-   Eine ID ist ein eindeutiger Bezeichner für ein HTML-Element
-   Jede ID darf auf einer Webseite nur einmal vorkommen
-   IDs werden im HTML mit dem Attribut `id="name"` vergeben

Mit IDs kann man:

-   Elemente per JavaScript ansprechen (z.B. `document.getElementById("meine-id")`)
-   Elemente gezielt per CSS stylen (z.B. `#meine-id { color: blue; }`)

**Beispiel:**
`<div id="header">Meine Überschrift</div>`

---

## Was ist eine Klasse?

-   Klassen gruppieren ähnliche Elemente
-   Eine Klasse kann mehreren Elementen zugewiesen werden
-   Ein Element kann mehrere Klassen haben
-   Klassen werden im HTML mit dem Attribut `class="name"` vergeben

Mit Klassen kann man:

-   Mehrere Elemente gleichzeitig per CSS stylen (z.B. `.meine-klasse { font-size: 16px; }`)
-   Elemente gruppiert per JavaScript ansprechen

**Beispiel:**
`<div class="card wichtig hervorgehoben">Inhalt</div>`

---

## Der Unterschied zwischen Block- und Inline-Elementen

-   Block-Elemente (wie `<div>`, `<p>`, `<h1>`) nehmen die gesamte verfügbare Breite ein und beginnen auf einer neuen Zeile
-   Inline-Elemente (wie `<span>`, `<a>`, `<strong>`) nehmen nur so viel Platz ein wie nötig und können innerhalb einer Textzeile stehen
