import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HNumberComponent } from './h-number.component';

describe('HNumberComponent', () => {
  let component: HNumberComponent;
  let fixture: ComponentFixture<HNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
