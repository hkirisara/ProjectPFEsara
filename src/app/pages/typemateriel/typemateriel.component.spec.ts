import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypematerielComponent } from './typemateriel.component';

describe('TypematerielComponent', () => {
  let component: TypematerielComponent;
  let fixture: ComponentFixture<TypematerielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypematerielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypematerielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
