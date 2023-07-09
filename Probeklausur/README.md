# Aufgabe 1

Gegeben ist in der Datei `aufgabe1.html` ein Grundgerüst, das Sie wie folgt
erweitern sollen:

- Erzeugen Sie mittels _HTML_, _CSS_ und _JavaScript_ ein Windrad mit vier
  Flügeln. Das Windrad soll dabei mittig auf dem verfügbaren Display erscheinen.
- Sofern man mit der Maus den Wellenkopf (kleiner schwarzer Kreis in der Mitte)
  betritt (_mouseenter_), soll sich das Windrad im Uhrzeigersinn drehen.
- Die Geschwindigkeit für den Start und Ablauf der Drehung können Sie nach
  eigenem Ermessen festlegen. Die Drehung selbst sollte sich aber
  _weitestgehend_ ruckelfrei verhalten. Kleinere Ruckelbewegungen im Ablauf
  sollen nicht Ihre Sorge sein.
- Verlässt der Mauszeiger (_mouseleave_) den Wellenkopf, hört das Windrad auf
  sich zu drehen. Auch hier sind kleinere Verzögerungen in Ordnung und beim
  Anhalten ist Ihnen die Ausrichtung der Flügel freigestellt.

# Aufgabe 2

Gegeben ist in der Datei `server.js` ein Node.js-basiertes REST-Interface einer
Windparkanlage. Die Datei ist obfuscated: Sie können den Quelltext nicht lesen,
den Server aber trotzdem ausführen. Das REST-Interface erfüllt folgende
Funktionen:

- `GET /cities` – Liefert alle Städtenamen mit Windparkanlagen als
  JSON-kodiertes Objekt.
- `GET /turbines/STADTNAME` – Liefert die Windparkdaten für den überlieferten
  _Stadtnamen_ aus der _URL_ als JSON-kodiertes Objekt zurück. Ermitteln Sie
  selbst, in welchem Format die Daten vom Server bereitgestellt werden. Der
  Index des Arrays dient dabei auch als Windrad-ID.
- `PUT /turbines/STADTNAME/state` – Sendet die Auswahl des _Users_ für den
  überlieferten _Stadtnamen_ in der _URL_ an den Server. Dieser erwartet ein
  JSON-kodiertes Objekt für die Auswahl des _Users_ im _Request-Body_. Verwenden
  Sie daher clientseitig ein Array für die Liste des Users, welche die _IDs_ der
  Windkrafträder enthält. Der Server schaltet die Windkrafträder mit den
  überlieferten _IDs_ aus, indem das Attribut _state_ auf 0 gesetzt wird.
  Anschließend wird der aktuelle Datensatz als JSON-kodiertes Objekt an den
  Client zurückgesendet.

  Ermitteln Sie selbst, wie der Server auf richtige und falsche Antworten
  reagiert.

Sie können den Server über das Terminal abhängig von Ihrem Verezeichnis
`.../aufgabe2/` mit `node server` starten. Das REST-Interface ist unter
`http://localhost:3000` erreichbar. Alle Dateien im Verzeichnis `app` werden vom
Server statisch ausgeliefert.

Erweitern Sie die im Verzeichnis app liegende Datei `index.html` so, dass eine
Auswahl der verfügbaren Windparkanlagen möglich ist. Nachdem eine Stadt
ausgewählt worden ist, erscheint eine Übersicht der einzelnen Windräder mit
folgenden Daten:

_Stadtname id: lat: x.xxxx lon: x.xxxx kWh: xxxx_ und einer Checkbox für nicht
defekte Windräder, die nur dann _enabled_ ist, wenn das Windkraft-Attribut
_state_ aktiv (1) ist. Ihr Interface soll nur aktive Windräder ausschalten
können.

Außerdem wird für jedes Element der Auflistung das Attribut _background-color_
in Abhängigkeit des Windkraft-Attributs _state_ wie folgt gesetzt: _0: inactive
(weiß-default), 1: active (blauton), 2: defect (grauton)_. Die Farben sind in
der `index.html` vordefiniert. Am Ende der Auflistung wird noch ein _Button
Ausschalten_ hinzugefügt.

Beim Klick auf eine aktive Checkbox wird die Auswahl vorgemerkt (Farbe ändert
sich und kann durch erneutes Klicken der Checkbox wieder entfernt werden. Sobald
der _User_ den _Button Ausschalten_ anklickt, wird die vorgemerkte Auswahl an
den Server gesendet und die entsprechenden Windräder werden ausgeschaltet. Der
Server sendet dann das Update zurück an den Client, welchem nun auch die vorher
aktiven Windräder als inaktiv (weißer _background-color_ und Checkbox
_disabled_) angezeigt werden.

Beachten Sie, dass sobald Sie den Server neu starten, sich der Datensatz für
_Issum_ und _Meerwind_ ändert, da dieser zufällig neu generiert wird.

# Aufgabe 3

Gegeben ist im Angularprojekt wind eine Datei `data.ts`, die Daten für einzelne
Windräder eines Windparks enthält. Erweitern Sie die `app.component` soweit,
dass die einzelnen Windräder in Issum ausgewählt werden können.

Sobald die Auswahl (z.B. Issum 3) getätigt worden ist, wird der Text
vervollständigt und die Werte in der Anzeige werden alle auf _0_ gesetzt.

Sobald der _Button Absenden_ gedrückt worden ist, wird die Anzeige aktualisiert.
Hier sollen die Anzeige-Daten über den Inhalt der data.ts eingebunden und über
geeignetes _property binding_ bzw. _interpolation_ verarbeitet und angezeigt
werden. Für das _select-tag_ inkl. _binding_ ist es notwendig sich über
_Angular: value und ngValue_ zu informieren.

Hinweis: _Build_ and _Start_ der Anwendung erfolgt mit _ng serve_ über die
Konsole im Projektordner `wind`. Die Anwendung ist anschließend im Browser über
_localhost:4200_ erreichbar.

_Optionale Zusatzteilaufgabe_: Ausblenden des Satzes: _Nachdem Absenden erhalten
Sie eine Übersicht über die Daten für Ihre Auswahl:_ nachdem der User den
_Button Absenden_ angeklickt hat und Wiedereinblenden, wenn sich die Auswahl
ändert.
