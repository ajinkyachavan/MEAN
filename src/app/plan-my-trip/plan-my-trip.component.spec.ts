import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMyTripComponent } from './plan-my-trip.component';

describe('PlanMyTripComponent', () => {
  let component: PlanMyTripComponent;
  let fixture: ComponentFixture<PlanMyTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanMyTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
