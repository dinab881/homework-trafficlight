import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficlightComponent } from './trafficlight.component';

describe('TrafficlightComponent', () => {
  let component: TrafficlightComponent;
  let fixture: ComponentFixture<TrafficlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
