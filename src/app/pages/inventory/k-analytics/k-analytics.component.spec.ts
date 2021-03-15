import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAnalyticsComponent } from './k-analytics.component';

describe('KAnalyticsComponent', () => {
  let component: KAnalyticsComponent;
  let fixture: ComponentFixture<KAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
