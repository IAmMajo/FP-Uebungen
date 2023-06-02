export interface ArticleInterface {
  ueberschrift: string;
  autor: string;
  datum: string;
  anriss: string;
  text: string;
  bild: string;
  tags: string[];
  id: string;
}

export class Article implements ArticleInterface {
  public ueberschrift: string = '';
  public autor: string = '';
  public datum: string = '';
  public anriss: string = '';
  public text: string = '';
  public bild: string = '';
  public tags: string[] = [];
  public id: string = '';
}
