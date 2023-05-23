# Jetzt unter https://schmetterlinge.maxoverlack.dev/ spielen

# Testataufgabe 2023

## Organisatorisches

Die folgenden genauen Anweisungen sind nicht dazu gedacht, Sie zu schikanieren oder zu ängstigen, sondern das Ergebnis leidvoller Erfahrungen aus den letzten Jahren und dienen dazu, unnötige Mehrarbeit zu vermeiden.

**Modus:** Das Testat ist eine Programmieraufgabe mit anschließender Präsentation der Lösung. Die Präsentation findet 1:1 statt. Die genauen Termine und Räume für den 16. und 19.05.2023 gebe ich am 12.05.2023 nach dem Ende der Einschreibung zum Testat bekannt. Die Termine werden Ihnen zugewiesen, das lässt sich anders nicht sinnvoll organisieren. Ich versuche, Ihre gewählte Übungsgruppe zu berücksichtigen.

**Abgabeformat:** Legen Sie Ihre Dateien ins root-Verzeichnis und ggf. Unterverzeichnisse des Projekts. Falls Sie Frameworks verwenden (z. B. jQuery, Bootstrap, etc.), nutzen Sie bitte CDN-Links, dann muss nichts extra heruntergeladen oder installiert werden. Ihr Projekt sollte nach dem Clonen direkt startfähig sein. Das bedeutet, dass Sie relative Links verwenden müssen, wenn Ihre Lösung aus mehr als einer HTML-Datei besteht. Möglicherweise ist es am einfachsten, wenn Sie nur eine einzige Datei erstellen, die das komplette HTML, CSS und JavaScript enthält. Nennen Sie die Hauptdatei index.html und legen Sie diese ins Projekt-root

**Selbständigkeit der Lösung:** Nachdem es bei diesem Testat in der Vergangenheit **wiederholt Betrugsversuche** gegeben hat (im Wesentlichen Plagiate von Internetquellen oder anderen Teilnehmern) weise ich ausdrücklich darauf hin, dass Sie die Lösung selbst erarbeiten müssen. Bitte lösen Sie die Aufgaben selbständig, die Lösungen werden untereinander verglichen. Sie dürfen zu _technischen_ Fragen selbstverständlich im Internet recherchieren, aber keine _fachlichen_ Lösungskonzepte vollständig oder teilweise übernehmen.

Zulässige Fragen, die Sie mit Webquellen lösen dürfen, sind beispielsweise:

- Wie sorgt man dafür, dass ein Spiel einen Takt hat, also regelmäßig bestimmter Code ausgeführt wird?
- Wie stellt man fest, welche DOM-Elemente sich an einem bestimmten Punkt auf dem Bildschirm befinden?
- Wie verschiebt man DOM-Elemente auf dem Bildschirm so dass eine Bewegung entsteht?
- Wie erkennt man einen Tastendruck auf der Tastatur und wie reagiert man darauf?

Ich rate Ihnen dringend davon ab, Fragen zu stellen wie:

- Wie programmiert man mit HTML und JavaScript das Spiel XYZ?

Falls Sie das versuchen, werden Sie auf Lösungskonzepte stoßen, die so bestechend sind, dass es schwer fällt, sich selbst etwas anderes zu überlegen. Also

- **suchen Sie am besten erst gar nicht nach bestehenden Lösungen** und
- **tauschen Sie sich nicht über Lösungskonzepte aus**.

Suchen Sie auch nicht nach Lösungen zu ähnlichen Spielen, da dies denselben mentalen Effekt hat. Machen Sie sich selbst Gedanken dazu, wie die Aufgabe konzeptionell zu lösen ist.

Bedenken Sie: Wir sehen Dutzende Lösungen innerhalb kurzer Zeit. Selbst wenn Sie Variablen- oder Funktionsnamen ändern oder mehrere Dateien zusammenlegen oder auftrennen, Funktionen anders anordnen usw.: wiederkehrende Konzepte bleiben doch erkennbar und spezifische softwaretechnische Lösungsdetails plagiierter Lösungen lassen sich nur mit Aufwand entfernen - dann können Sie die Lösung auch gleich selbst erstellen.

Das Teiltestat wird erteilt, wenn die Aufgaben gelöst sind und der Quellcode zum Testattermin im Gespräch erläutert werden kann.

**Testattermin:** Das Testat findet am 16.05. und 19.05.2023 statt. Es ist vorgesehen, dazu den Zeitraum der Übungen zu nutzen. Falls diese Zeiten angesichts der Teilnehmerzahlen nicht ausreichen sollten, müssen weitere Zeiten an diesen Tagen vergeben werden.

Falls dies mit einer anderen Lehrveranstaltung kollidiert **UND** dies ein massives Problem darstellt (z. B. wegen einer terminierten Präsentation) informieren Sie mich bitte frühestmöglich per Mail unter Angabe von:

- Ihr Name
- Ihre Matrikelnummer
- Uhrzeit und Raum Ihres Testattermins
- betroffene Lehrveranstaltung
- Lehrende der Veranstaltung (inkl. Mailadresse)

Ich werde dann versuchen, eine Lösung im Dialog mit der betreffenden Lehrenden zu finden.

Die Testate finden unter gewissem Zeitdruck statt, da sehr viele Abnahmen in kurzer Zeit erfolgen. Sorgen Sie bitte dafür, dass Ihre Lösung zu Beginn des Termins bereits auf Ihrem Computer läuft. Falls Sie keinen transportablen Computer haben, melden Sie sich bitte bis zum 02.05.2023 14:00 Uhr bei Fabian Lennartz. Er wird Ihnen am 03.05.2023 ein Laptop des Softwarelabors mit Ubuntu Linux zur Verfügung stellen.

Bitte bringen Sie zum Testat Ihren Personalausweis sowie die Studienbescheinigung mit.

## Aufgabe

Implementieren Sie mit JavaScript, HTML und CSS eine vereinfachte Version des Spiels [Schmetterlinge](https://www.youtube.com/watch?v=9sZYq_ZRuZo&t=619). Weitere Videos des Spiels können Sie mit dem Suchbegriff "Polyplay DDR" finden. Die Gestaltung ist Ihnen freigestellt.

1. Alle Objekte des Spiels sollen HTML-Elemente (z. B. `div`) sein. Am einfachsten funktioniert das mit absoluter Positionierung der Elemente. Verwenden Sie **nicht das `canvas`-Objekt**.
1. Das Spiel wird mit einem Klick auf einen Button oder mit einem Tastendruck gestartet. Sie müssen nur eine der beiden Varianten implementieren.
1. Die Laufzeit des Spiels beträgt 30 Sekunden. Für Ihre Tests können Sie das höher einstellen, in der Testatprüfung gelten jedoch die 30 Sekunden.
1. Es gibt drei verschiedene Arten Schmetterlinge, die Sie entweder durch verschiedene Farben oder durch verschiedene Formen oder durch beides darstellen können. Für verschiedene Arten von Schmetterlingen erhält man verschiedene Punktzahlen.
1. Schmetterlinge erscheinen an zufälligen Positionen. Sie bewegen sich von ihrer aktuellen Position zufällig nach oben oder rechts oder unten oder links, jedoch nicht schräg. Die Anzahl der Schmetterlinge können Sie frei wählen.
1. Ein Schmetterling gilt als gefangen, wenn der Maulwurf an derselben Position steht. Es ist nicht erforderlich, dass der Maulwurf den Schmetterling mit einem Kescher fängt.
1. Sobald ein Schmetterling gefangen wurde erscheint ein neuer an zufälliger Position.
1. Auf dem Spielfeld sind zufällig Blumen verteilt über die Maulwurf nicht hinweglaufen kann. Bei jedem Start des Spiels ändert sich die Verteilung der Blumen.
1. Der Maulwurf wird mit den Cursortasten (Pfeiltasten) gesteuert.
1. Den Takt des Spiels (nach welcher Zeit die Schmetterlinge sich weiterbewegen) können Sie selbst festlegen. Bei der Entwicklung der Beispiellösung hat sich gezeigt, dass eine Taktfrequenz im Bereich 2 bis 4 Hertz praktikabel ist. Wählen Sie anfangs einen langsamen Takt, um die Entwicklung zu vereinfachen.
1. Das Spiel ist beendet, wenn die Spielzeit abgelaufen ist.
1. Nach Spielende kann ein neues Spiel mit Buttonklick oder Tastendruck gestartet werden.
1. Während des Spiels wird die Punktzahl angezeigt.

Abweichungen zur Vorlage

- Es muss kein Rekord über mehrere Spiele gespeichert werden
- Die Schmetterlinge müssen nicht mit dem Kescher gefangen werden
- Der Maulwurf hat keine Blickrichtung
- Die Schmetterlinge müssen sich nicht über den Rand des Bildschirms bewegen können (Bsp.: links verlassen, rechts erscheinen)

**Tipp:** Zerlegen Sie die Aufgabe in verschiedene Teilaufgaben, implementieren Sie diese einzeln prototypisch und fügen Sie die Lösung schrittweise zusammen. Es empfiehlt sich, dafür jeweils git-Branches und Merges zu verwenden. Ich habe bei der Beispiellösung in diesen Schritten gearbeitet:

1. Maulwurf erzeugen und mit den Cursortasten bewegen
1. Blumen erzeugen
1. Überqueren der Blumen und des Spielfeldrands durch den Maulwurf verhindern
1. Schmetterlinge anzeigen
1. Kollisionen des Maulwurfs mit den Schmetterlingen erkennen und Punktzahl hochzählen
1. Zeit rückwärts laufen lassen und Ende erkennen
1. Schmetterlinge zufällig im Spieltakt bewegen, ggf. zuerst nur einen
1. Anzeige des Spielergebnisses

Es geht darum, dass die genannten Anforderungen konzeptionell realisiert werden. Das Design ist nicht wichtig. Es genügt völlig, wenn die Schmetterlinge, Blumen sowie der Maulwurf farbige Quadrate sind.

Falls Sie Spaß daran und genügend Zeit haben, freue ich mich natürlich trotzdem über besonders gelungene grafische Umsetzungen. Das ist aber nicht verpflichtend.

## Video der Beispiellösung

[![Beispiellösung Testat 2023](https://i.ytimg.com/vi/t5vGS7kBDAk/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4AcwEgALgA4oCDAgAEAEYRCBfKGUwDw==)](https://youtu.be/t5vGS7kBDAk "Beispiellösung Testat 2023")
