import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableprdtComponent } from './availableprdt.component';

describe('AvailableprdtComponent', () => {
  let component: AvailableprdtComponent;
  let fixture: ComponentFixture<AvailableprdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableprdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableprdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
