import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { ArtikelShareComponent } from './artikel-share/artikel-share.component';
import { ArtikelComponent } from './artikel/artikel.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArtikelListeComponent },
  { path: 'article/:id', component: ArtikelComponent },
  { path: 'artikel-share', component: ArtikelShareComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'artikel-editor', component: ArtikelEditorComponent },
  { path: 'artikel-editor/:id', component: ArtikelEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
