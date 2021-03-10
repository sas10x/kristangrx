import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XampleComponent } from './xample.component';

describe('XampleComponent', () => {
  let component: XampleComponent;
  let fixture: ComponentFixture<XampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
