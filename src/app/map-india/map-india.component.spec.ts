import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIndiaComponent } from './map-india.component';

describe('MapIndiaComponent', () => {
  let component: MapIndiaComponent;
  let fixture: ComponentFixture<MapIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
