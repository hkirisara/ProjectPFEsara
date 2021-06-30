import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisqueComponent } from './statisque.component';

describe('StatisqueComponent', () => {
  let component: StatisqueComponent;
  let fixture: ComponentFixture<StatisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
