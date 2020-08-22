import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooCustomersComponent } from './woo-customers.component';

describe('WooCustomersComponent', () => {
  let component: WooCustomersComponent;
  let fixture: ComponentFixture<WooCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
