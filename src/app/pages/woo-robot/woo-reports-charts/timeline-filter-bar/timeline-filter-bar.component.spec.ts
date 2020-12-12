import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFilterBarComponent } from './timeline-filter-bar.component';

describe('TimelineFilterBarComponent', () => {
  let component: TimelineFilterBarComponent;
  let fixture: ComponentFixture<TimelineFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
