import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelComponent } from './artikel.component';

describe('ArtikelComponent', () => {
  let component: ArtikelComponent;
  let fixture: ComponentFixture<ArtikelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtikelComponent],
    });
    fixture = TestBed.createComponent(ArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
