import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvpieComponent } from './advpie.component';

describe('AdvpieComponent', () => {
  let component: AdvpieComponent;
  let fixture: ComponentFixture<AdvpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
