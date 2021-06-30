import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoncommandeComponent } from './boncommande.component';

describe('BoncommandeComponent', () => {
  let component: BoncommandeComponent;
  let fixture: ComponentFixture<BoncommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoncommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoncommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
