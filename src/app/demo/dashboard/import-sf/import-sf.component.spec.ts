import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSfComponent } from './import-sf.component';

describe('ImportSfComponent', () => {
  let component: ImportSfComponent;
  let fixture: ComponentFixture<ImportSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
