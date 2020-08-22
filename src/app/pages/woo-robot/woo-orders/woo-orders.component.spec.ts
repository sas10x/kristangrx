import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooOrdersComponent } from './woo-orders.component';

describe('WooOrdersComponent', () => {
  let component: WooOrdersComponent;
  let fixture: ComponentFixture<WooOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
