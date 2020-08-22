import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooAnalyticsComponent } from './woo-analytics.component';

describe('WooAnalyticsComponent', () => {
  let component: WooAnalyticsComponent;
  let fixture: ComponentFixture<WooAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
