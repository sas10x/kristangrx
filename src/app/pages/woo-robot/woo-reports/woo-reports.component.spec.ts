import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooReportsComponent } from './woo-reports.component';

describe('WooReportsComponent', () => {
  let component: WooReportsComponent;
  let fixture: ComponentFixture<WooReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
