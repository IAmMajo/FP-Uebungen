# Übungsaufgaben Angular Teil 1 - Fortführung

### Aufgabe 5

Komponenten für Kopfbereich und Fußbereich anlegen und einbinden

Erstellen Sie die Komponenten für Kopfbereich und Fußbereich und binden Sie diese in die App-Komponente ein.

Das Template der App-Komponente (`app.component.html`) App-Komponente dürfte jetzt nur noch sehr wenig HTML-Markup enthalten, da alle vorher vorhandenen Bestandteile in die Templates der speziellen Komponenten ausgelagert wurden.

### Aufgabe 6

Artikelliste ausgeben

a) Kopieren Sie die Testdaten der Artikel in eine neue Datei entsprechend des [Vorgehens im Angular Tutorial](https://angular.io/tutorial/toh-pt2#create-mock-heroes).

b) Informieren Sie sich über die [Repeater Direktive \*ngFor](https://blog.angular-university.io/angular-2-ngfor/) von Angular. Modifizieren Sie das Template der Root-Komponente (`src/app/app.component.html`) so, dass es alle Artikel untereinander einbindet (entsprechend der bisherigen `index.html` aus dem jQuery Client).

Beachten Sie, dass sie im Template der Root-Komponente den einzelnen Artikel an die Artikel Komponente übergeben müssen:

```html
<app-artikel [article]="a"></app-artikel>
```

Dabei ist `article` das Attribut in der Klasse der Artikel Komponente und `a` die Laufvariable der `*ngFor` Direktive.

Erweitern Sie die Artikel Komponente um den `@Input` Decorator, um den einzelnen Artikel vom Template der Root-Komponente an die Artikel Komponente übergeben zu können. Sie müssen dazu das `Input`-Modul in die Artikel Komponente importieren:

```typescript
import { Input } from "@angular/core";
```

Orientieren Sie sich auch am Angular Tutorial:

- [\*ngFor Direktive](https://angular.io/tutorial/toh-pt2#list-heroes-with-ngfor)
- [@Input](https://angular.io/tutorial/toh-pt3#add-the-input-hero-property)

Beachten Sie, dass jetzt kein einzelner Artikel mehr angezeigt wird, sondern nur noch die Liste, die aktuell in der Root-Komponente erzeugt wird. Später werden wir für die Artikelliste eine eigene Komponente erstellen.

### Aufgabe 7

Komponente für die Sidebar anlegen und einbinden

a) Erstellen Sie eine neue Komponente für die Sidebar und binden Sie diese in die App-Komponente ein.

b) Für die Darstellung der Tagcloud müssen Sie das Array der Artikel an die Sidebar Komponente übergeben. Orientieren sie sich an der Lösung zur vorherigen Aufgabe (`@Input`). Initialisieren Sie die Map der Tags in der Funktion `ngOnInit` der Sidebar Komponente und greifen Sie dann von Template der Sidebar Komponente aus auf die Map zu, um die Einträge der Tagcloud auszugeben.

Beachten Sie, dass für die Lösung zur Aufgabe b) einige Teilprobleme mittels Recherche zu lösen sind (Verwendung von Maps in Typescript im Allgemeinen sowie Iterieren über Mapelemente mit \*ngFor).

# Übungsaufgaben Angular Teil 2 - Router und Queryparameter

## Einführung

Ziel dieser Übung ist es, die verschiedenen Ansichten des Blogs (bisherige HTML-Dateien) als Komponenten abzubilden und sie unter Verwendung des Angular Routers anzuzeigen. Dabei werden weiterhin die temporären Testdaten verwendet.

### Aufgabe 1

Artikelliste in Komponente auslagern

Bislang wird die Liste aller Artikel (ehemalige `index.html`) in der Root-Komponente erzeugt (siehe [vorherige Übung](https://gitlab.hsrw.eu/lv-fortgeschrittene-programmierung/uebungen/uebungen-v2/uebung-6#aufgabe-6)).

Erstellen Sie eine eine Komponente `ArtikelListeComponent`, welche diese Funktionalität übernimmt und binden Sie die Komponente in die Root-Komponente ein. Verwenden Sie weiterhin die Komponente `ArtikelComponent` (siehe [vorherige Übung](https://gitlab.hsrw.eu/lv-fortgeschrittene-programmierung/uebungen/uebungen-v2/uebung-6#aufgabe-4)) als Unterkomponente zur Darstellung eines einzelnen Artikels. Das Template der neuen Komponente enthält also im Wesentlichen das Element mit der `*ngFor`-Direktive.

**Hinweis:** eine Komponente mit mehreren Großbuchstaben erstellt man mit Bindestrichen an den jeweiligen Stellen:

```
> ng generate component artikel-liste
```

### Aufgabe 2

Alle weiteren Views als Komponenten implementieren

Erstellen Sie Komponenten für die folgenden weiteren bisher in HTML-Dateien implementierten Views:

- `artikelNeu.html` --> `ArtikelEditorComponent`
- `impressum.html` --> `ImpressumComponent`
- `kontakt.html` --> `KontaktComponent`
- `teilenEmail.html` --> `ArtikelShareComponent`

Für die HTML-Dateien

- `monatsliste.html`
- `suchergebnis.html`
- `tagliste.html`

werden keine eigenen Komponenten benötigt, diese Funktionalität wird später in die `ArtikelListeComponent` integriert.

**Hinweis:** Sie können die neuen Komponenten aktuell noch nicht über URLs testen, da wir den Router noch nicht integriert haben. Vorübergehend können Sie diese zum Testen in das Template der Root-Komponente einbinden.

### Aufgabe 3

Angular Router kennenlernen: Impressum und Kontakt

Richten Sie Routen mit den Pfaden und Verweisen auf die genannten Komponenten

- `impressum` --> `ImpressumComponent`
- `kontakt` --> `KontaktComponent`

ein. Verlinken Sie die entsprechenden Einträge in der `FooterComponent` so, dass die genannten Komponenten angezeigt werden. Sie können selbst entscheiden, ob Sie das `router-outlet` Element zum Testen vorübergehend zusätzlich oder bereits ausschließlich in die Root-Komponente einbinden wollen.

Orientieren Sie sich an

- [Vorlesungsvideo 2018](https://youtu.be/hqaKyomb0qQ?t=2784)
- [Angular Tutorial](https://angular.io/tutorial/toh-pt5#routing)

### Aufgabe 4

Angular Router: weitere Views anzeigen

Fügen Sie eine weitere Route `articles` hinzu, die zur `ArtikelListeComponent` führt. Fügen Sie außerdem eine Standardroute ([default route](https://angular.io/guide/router#set-up-redirects)) für den Leerstring hinzu, die auf `articles` umleitet. Beachten Sie, dass reguläre Routenpfade ohne führenden Slash `/` angegeben werden, Umleitungen jedoch mit Slash.

Verlinken Sie das Logo und die Überschrift so, dass sie die Standardroute verwenden.

Fügen Sie Routen für die weiteren Komponenten, **außer** Einzelartikel, Header, Footer und Sidebar hinzu.

### Aufgabe 5

Routenparameter für Einzelartikel

Zu einzelnen Artikeln (bisherige `artikel.html`) soll mit dem Pfad `article/id` navigiert werden, wobei `id` die ID des jeweiligen Artikels ist.

Informieren Sie sich über parametrisierte Routen in der [Angular Dokumentation](https://angular.io/guide/router#route-definition-with-a-parameter) oder im [Angular Tutorial](https://angular.io/tutorial/toh-pt5#add-a-hero-detail-route).

Binden Sie die Route ein. Denken Sie dabei auch an die verlinkten Überschriften der Artikel und die Social Media Links in den Artikeln.

**Wichtiger Hinweis:** Beachten Sie, dass die `ArtikelComponent` jetzt über zwei Wege eingebunden werden kann: mit der Route `article/:id` zur Anzeige eines einzelnen Artikels und in die Liste aller Artikel in der `ArtikelListeComponent`. Auf den beiden Wegen muss das Attribut `article` der Komponentenklasse auf verschiedene Weise gesetzt werden.

**Hinweis:** Im Angular Tutorial wird für das Lesen des Artikels aus dem `ARTIKEL` Array ein Service verwendet. Sie können auf den Service verzichten, wenn Sie das Array `ARTIKEL` in die `ArtikelComponent` importieren und den Code zum Finden des Artikels mit der ID in der Methode `ngOnInit` platzieren. Alternativ zum Finden des Artikels mit der ID können Sie die Testdaten auch wieder von Array auf Map umstellen und die App daran anpassen.

### Aufgabe 6

Bidirektionale Datenbindung: Artikel bearbeiten

a) Erweitern Sie Ihre Route zur `ArticleEditComponent` analog der vorherigen Aufgabe, dass sie einen Routenparameter mit der ID des Artikels enthält. Laden Sie den entsprechenden Artikel in das Formular.

Verwenden Sie bidirektionale Datenbindung, um Änderungen am Artikel in das Artikelobjekt zu schreiben. Orientieren Sie sich am [Angular Tutorial](https://angular.io/tutorial/toh-pt1#edit-the-hero).

Binden Sie vorerst nicht die Attribute `tags` und `bild` des Artikels in das Formular ein, da diese Typen über die bidirektionale Datenbindung nicht ohne weitere Maßnahmen modifiziert werden können.

**Hinweis:** Beachten Sie, dass die Testdaten im Array `ARTIKEL` geändert werden können, obwohl das Array als Konstante definiert ist. Konstant ist in diesem Fall nur der Verweis auf das Array (die Adresse). Die einzelnen im Array liegenden Artikel sind davon nicht betroffen. Falls Ihr Browser trotzdem Änderungen an den Objekten verhindern sollte (unwahrscheinlich!), definieren Sie das Array nicht als Konstante, sondern als normale Variable.

b) Welchen Effekt bezüglich der Aktualisierung der Artikeldaten beobachten Sie, wenn Sie bidirektionale Datenbindung für das Bearbeiten der Artikel verwenden? Ist dieser Effekt erwartungskonform? Welche Änderungen sollten ggf. vorgenommen werden?
