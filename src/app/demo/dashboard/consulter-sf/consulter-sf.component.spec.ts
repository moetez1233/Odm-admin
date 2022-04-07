import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSfComponent } from './consulter-sf.component';

describe('ConsulterSfComponent', () => {
  let component: ConsulterSfComponent;
  let fixture: ComponentFixture<ConsulterSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
