import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerratingComponent } from './customerrating.component';

describe('CustomerratingComponent', () => {
  let component: CustomerratingComponent;
  let fixture: ComponentFixture<CustomerratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
