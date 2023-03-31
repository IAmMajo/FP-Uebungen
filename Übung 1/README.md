# Übung HTML

## Allgemeine Aufgaben

## Aufgabe 1

Entwicklungsumgebung aufsetzen und erstes HTML-Dokument erstellen und validieren

Legen Sie ein neues JavaScript-Projekt in Eclipse und in diesem das Verzeichnis `uebung01` und in diesem Verzeichnis eine leere HTML-Datei `index.html` an. Schreiben Sie beliebigen Text in das `body`-Element. Testen Sie Ihre HTML-Datei im Browser, indem Sie sie aus dem Dateisystem laden (Ctrl-O in Windows).

Öffnen Sie die Entwicklertools in Chrome (Ctrl-Shift-I in Windows) und machen Sie sich mit deren Funktion vertraut.

Überprüfen Sie Ihr Markup mit dem [W3C-Validator](https://validator.w3.org/). Falls Fehler angezeigt werden: Beseitigen Sie diese und validieren Sie erneut.

### Aufgabe 2

HTML-Tabelle erstellen

Informieren Sie sich in den bekannten Onlinequellen über die Definition von Tabellen
mit HTML5.

Bauen Sie eine HTML5 Seite, die Ihren Stundenplan dieses Semesters als Tabelle darstellt.
Verlinken Sie die Einträge in der Tabelle mit den jeweiligen Moodle-Kursen.

Öffnen Sie die Entwicklertools Ihres Browsers und stellen Sie die Darstellung auf mobil / Smartphone um. Beobachten Sie die Effekte.

### Aufgabe 3

HTML-Formular erstellen

Legen Sie ein neues HTML5 Dokument an. Informieren Sie sich in den bekannten
Onlinequellen über HTML-Formulare.

a) Entwerfen Sie ein Formular, mit dem man sich für eine Prüfung anmelden kann. Die verfügbaren
Prüfungen sollen aus einer Liste gewählt werden können.

b) Finden Sie heraus, wie der Inhalt des Formulars vom Browser unter Verwendung des lokalen
Mailprogramms als Mail verschickt werden kann. Passen Sie Ihr Formular so an, dass ein
entsprechender Mailversand erfolgt. Sie benötigen hierzu nur HTML, KEIN JavaScript oder Sonstiges.

## Blogsystem

**Hinweis:** Bitte kopieren Sie für jede Übung ihr bisheriges Projektverzeichnis (bislang `uebung01`) und erhöhen Sie die Versionsnummer. Kopieren Sie also `uebung01` nach `uebung02`.

### Einführung

Das Ziel dieses Übungskomplexes ist die Erstellung eines Klickprototypen, der alle funktionalen der Elemente des Blogs enthält und durch miteinander verlinkte Seiten den Kontrollfluss nachvollziehbar macht. Es werden keinerlei gestalterische Gesichtspunkte berücksichtigt, sondern reines HTML implementiert. Dadurch wird insbesondere keine Anordnung der einzelnen Bereiche (z. B. Seitenleiste) abgebildet.

Ein Blogartikel hat die Attribute

- Überschrift
- Erscheinungsdatum
- Autor
- Anrisstext (Teaser)
- Artikeltext
- mehrelementige Liste von Tags (Schlagworten)
- Bild (Zeichenkette, Verweis auf eine Datei)

In der Darstellung des Artikels werden außerdem Social Media Links angezeigt.

Erstellen Sie im Verzeichnis `uebung01` eine Datei `artikel.html`, die einen Artikel ähnlich dem im Beispiel gezeigten enthält. Verwenden Sie die HTML-Elemente `article`, `h2`, `p`, `div`, `a`.

Überprüfen Sie Ihr Markup mit dem [W3C-Validator](https://validator.w3.org/).

### Aufgabe 4

Artikelattribute vervollständigen

Erweitern Sie die Datei `artikel.html` so, dass sie die gesamte oben genannte Struktur eines Artikels einschließlich Tagliste und Social Media Links enthält.
Das Bild im Artikel soll im Verzeichnis `medien` liegen. Informieren Sie sich ggf., wie mittels HTML-Attributen die Größe des Bildes beeinflusst werden kann.

### Aufgabe 5

Grundstruktur Blog anlegen

Erweitern Sie die Datei `index.html` so, dass sie die gesamte Grundstruktur der Startseite des Blogs enthält:

- Kopfleiste
- Hauptteil mit
- mehreren Artikeln (kopiert aus `artikel.html`)
- Link oder Button zum Erstellen eines neuen Artikels
- Seitenleiste mit
- Login-Formular
- Suchformular
- Monatsliste
- Tagcloud
- Fußleiste

Verwenden Sie zur Strukturierung der Seite die HTML-Elemente `header`, `main`, `footer`, `aside`.

Kopieren Sie die Struktur der einzelnen Artikel aus der Datei `artikel.html`.

Überprüfen Sie Ihr Markup mit dem [W3C-Validator](https://validator.w3.org/).

Legen Sie vorerst keinen Wert auf die Gestaltung der Seite. Dies wird dazu führen, dass beispielsweise die Seitenleiste unter (oder über) dem Hauptteil mit den Artikeln angezeigt wird.

### Aufgabe 6

Seiten des Klickprototypen anlegen

Sobald die Grundstruktur in der Datei `index.html` fertiggestellt, getestet und validiert ist, kann sie auf die weiteren Dateien übertragen werden. Legen Sie die HTML-Seiten

- `kontakt.html`: Kontaktinformationen
- `impressum.html`: Impressum
- `suchergebnis.html`: Anzeige des Suchergebnisses. Der Klick auf _Suchen_ in der Seitenleiste führt zu dieser Seite. Der Klick auf einen Listeneintrag führt von dieser Seite zum Artikel (`artikel.html`). Alle Artikel in der Liste sollten verlinkt sein, für den Prototyp genügt es, nur einen zu verlinken.
- `tagliste.html`: Anzeige einer Liste aller Artikel mit einem bestimmten Tag. Der Klick auf ein Tag im Artikel oder in der Tagcloud führt zu dieser Seite. Der Klick auf einen Listeneintrag führt von dieser Seite zum Artikel (`artikel.html`). Alle Artikel in der Liste sollten verlinkt sein, für den Prototyp genügt es, nur einen zu verlinken.
- `monatsliste.html`: Anzeige einer Liste aller in einem bestimmten Monat veröffentlichten Artikel. Der Klick auf einen Monat in der Seitenleiste führt zu dieser Seite. Der Klick auf einen Listeneintrag führt von dieser Seite zum Artikel (`artikel.html`). Alle Artikel in der Liste sollten verlinkt sein, für den Prototyp genügt es, nur einen zu verlinken.
- `teilenEmail.html`: Formular zum Teilen eines Artikels per Mail. Der Klick auf _Teilen via E-Mail_ führt zu dieser Seite. Der Klick auf _Absenden_ führt von dieser Seite zur Startseite.
- `artikelNeu.html`: Formular zum Erstellen eines neuen Artikels, wird erreicht durch den Link _Neuen Artikel erstellen_ auf der Startseite. Der Klick auf _Neuen Artikel erstellen_ in der Startseite führt führt zu dieser Seite. Der Klick auf _Senden_ führt von dieser Seite zur Startseite
- `artikel.html`: Anzeige eines einzelnen Artikels (nicht neu anlegen, wird nur geändert)

an. Modifizieren Sie die Grundstruktur in der Datei `index.html` so, dass die Links zu den neu angelegten Seiten an den richtigen Stellen in der Grundstruktur enthalten sind. Der Klick auf die Überschrift oder auf das Foto im Kopfbereich soll immer zur Startseite führen.

**ACHTUNG** Falls Ihre Grundstruktur noch Fehler enthält oder geändert werden muss, müssen Sie diese Änderungen später in jede der Dateien kopieren. Daher empfiehlt es sich, die Grundstruktur zuvor ausgiebig zu testen. In der Praxis vermeidet man redundanten Code durch Modularisierung (s. Themenkomplexe JavaScript und Angular) oder den Einsatz eines Content Management Systems.

Sobald alles getestet ist, kopieren Sie die Grundstruktur in die neu erstellten Dateien. Entfernen Sie dann in jeder der Dateien die Blogartikel aus dem `main`-Element und setzen Sie die jeweiligen Inhalte ein. Für Beispiele und Erläuterungen zu den einzelnen Seiten achten Sie auf die Erläuterungen im Video:

[![Demo der Blog-App für die Übungen](https://img.youtube.com/vi/0Vs-LxYcsw4/0.jpg)](https://www.youtube.com/watch?v=0Vs-LxYcsw4 "Demo der Blog-App für die Übungen")

### Aufgabe 7

Modifizieren Sie die Schablone für einen Artikel so, dass ein Klick auf 'Teilen auf Facebook' oder 'Twittern' zur Teilen-Funktion dieser Dienste führt. Als URL (der Link zu dem jeweiligen Artikel, der geteilt werden soll) kann ein Phantasiewert hinterlegt werden, da die Datei ja lokal auf Ihrer Festplatte liegt und (noch) nicht online verfügbar ist.

### Aufgabe 8

Testen Sie Ihre Lösung ausgiebig darauf, ob alle Links in allen Seiten funktionieren und zu den gewünschten Seiten führen.
