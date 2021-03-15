import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HLineComponent } from './h-line.component';

describe('HLineComponent', () => {
  let component: HLineComponent;
  let fixture: ComponentFixture<HLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
