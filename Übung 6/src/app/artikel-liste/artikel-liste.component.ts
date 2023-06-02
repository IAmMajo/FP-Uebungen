import { Component } from '@angular/core';
import { ARTICLES } from 'src/mock-articles';

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent {
  protected articles = ARTICLES;
}
