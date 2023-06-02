import { Component, Input } from '@angular/core';
import { Article, ArticleInterface } from 'src/article';
import { ARTICLES } from 'src/mock-articles';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css'],
})
export class ArtikelEditorComponent {
  protected article: ArticleInterface = new Article();

  @Input()
  set id(id: string) {
    const article = this.getArticleById(id, ARTICLES);
    if (article !== null) {
      this.article = article;
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
