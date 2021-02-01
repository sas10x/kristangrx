import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HPieComponent } from './h-pie.component';

describe('HPieComponent', () => {
  let component: HPieComponent;
  let fixture: ComponentFixture<HPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
