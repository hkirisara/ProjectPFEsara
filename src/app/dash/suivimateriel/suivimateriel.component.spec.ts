import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivimaterielComponent } from './suivimateriel.component';

describe('SuivimaterielComponent', () => {
  let component: SuivimaterielComponent;
  let fixture: ComponentFixture<SuivimaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivimaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivimaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
