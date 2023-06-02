import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelEditorComponent } from './artikel-editor.component';

describe('ArtikelEditorComponent', () => {
  let component: ArtikelEditorComponent;
  let fixture: ComponentFixture<ArtikelEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtikelEditorComponent]
    });
    fixture = TestBed.createComponent(ArtikelEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
