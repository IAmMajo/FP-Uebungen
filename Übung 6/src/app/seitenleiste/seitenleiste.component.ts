import { Component, Input, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/article';

@Component({
  selector: 'app-seitenleiste',
  templateUrl: './seitenleiste.component.html',
  styleUrls: ['./seitenleiste.component.css'],
})
export class SeitenleisteComponent implements OnInit {
  @Input() articles!: ArticleInterface[];

  protected tagMap: { [tag: string]: number } = {};

  // größte Häufigkeit eines Tags
  protected max = 1;

  ngOnInit(): void {
    // Alle Artikel durchgehen und alle Tags aufsammeln. Für die Schriftgrößen
    // benötigen wir für jedes Tag die Anzahl des Vorkommens über alle Artikel.
    // Je häufiger ein Tag vorkommt, desto größer soll es dargestellt werden.

    // Alle Artikel durchlaufen
    for (var i = 0; i < this.articles.length; i++) {
      var a = this.articles[i];

      // Alle Tags des Artikels durchlaufen
      for (var j = 0; j < a.tags.length; j++) {
        var tag = a.tags[j];
        // Testen, ob das Tag schon in der Map ist
        if (!(tag in this.tagMap)) {
          // Nein, taucht zum ersten Mal auf
          // --> mit Anzahl 1 in die Map schreiben
          this.tagMap[tag] = 1;
        } else {
          // war schon da, Anzahl erhöhen
          this.tagMap[tag]++;
          // Maximum ggf. anpassen
          if (this.tagMap[tag] > this.max) {
            this.max = this.tagMap[tag];
          }
        }
      }
    }
  }

  protected calculateTagSize(occurences: number): number {
    // Schriftgröße bestimmen, nach Häufigkeit in fünf Klassen 1 - 5 einordnen
    return Math.ceil(Math.floor(occurences / (this.max / 5.0)));
  }
}
