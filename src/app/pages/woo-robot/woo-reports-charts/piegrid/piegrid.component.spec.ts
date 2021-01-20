import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiegridComponent } from './piegrid.component';

describe('PiegridComponent', () => {
  let component: PiegridComponent;
  let fixture: ComponentFixture<PiegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
