import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationtechnicienComponent } from './affectationtechnicien.component';

describe('AffectationtechnicienComponent', () => {
  let component: AffectationtechnicienComponent;
  let fixture: ComponentFixture<AffectationtechnicienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationtechnicienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationtechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
