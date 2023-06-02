import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelListeComponent } from './artikel-liste.component';

describe('ArtikelListeComponent', () => {
  let component: ArtikelListeComponent;
  let fixture: ComponentFixture<ArtikelListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtikelListeComponent]
    });
    fixture = TestBed.createComponent(ArtikelListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
