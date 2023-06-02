import { Component } from '@angular/core';
import { ARTICLES } from 'src/mock-articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected articles = ARTICLES;
}
