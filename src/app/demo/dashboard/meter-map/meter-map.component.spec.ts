import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterMapComponent } from './meter-map.component';

describe('MeterMapComponent', () => {
  let component: MeterMapComponent;
  let fixture: ComponentFixture<MeterMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
