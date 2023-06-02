import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeitenleisteComponent } from './seitenleiste.component';

describe('SeitenleisteComponent', () => {
  let component: SeitenleisteComponent;
  let fixture: ComponentFixture<SeitenleisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeitenleisteComponent]
    });
    fixture = TestBed.createComponent(SeitenleisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
