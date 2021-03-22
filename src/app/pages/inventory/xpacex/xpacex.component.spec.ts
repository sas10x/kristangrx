import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpacexComponent } from './xpacex.component';

describe('XpacexComponent', () => {
  let component: XpacexComponent;
  let fixture: ComponentFixture<XpacexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpacexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpacexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
