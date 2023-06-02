import { Component, Input } from '@angular/core';
import { ArticleInterface } from 'src/article';
import { ARTICLES } from 'src/mock-articles';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css'],
})
export class ArtikelComponent {
  @Input() article: ArticleInterface | null = null;

  @Input()
  set id(id: string) {
    this.article = this.getArticleById(id, ARTICLES);
  }

  protected getEncodedHeadline() {
    if (this.article !== null) {
      return encodeURIComponent(this.article.ueberschrift);
    } else {
      return null;
    }
  }

  /**
   * Liefert den Artikel zu einer ID
   *
   * @param id - gesuchte ID
   * @param articles - Array mit den zu durchsuchenden Blogeinträgen
   * @returns Blogeintrag mit der ID oder null, falls nicht gefunden
   */
  private getArticleById(id: string, articles: ArticleInterface[]) {
    // Suche den Index
    for (var i = 0; i < articles.length; i++) {
      if (articles[i].id === id) {
        // gefunden -> return
        return articles[i];
      }
    }

    // nichts gefunden
    return null;
  }
}
