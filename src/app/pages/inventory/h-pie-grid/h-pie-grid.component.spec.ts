import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HPieGridComponent } from './h-pie-grid.component';

describe('HPieGridComponent', () => {
  let component: HPieGridComponent;
  let fixture: ComponentFixture<HPieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPieGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
