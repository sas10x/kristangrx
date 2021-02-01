import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HAdvpieComponent } from './h-advpie.component';

describe('HAdvpieComponent', () => {
  let component: HAdvpieComponent;
  let fixture: ComponentFixture<HAdvpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HAdvpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HAdvpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
