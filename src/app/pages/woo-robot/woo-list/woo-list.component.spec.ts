import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooListComponent } from './woo-list.component';

describe('WooListComponent', () => {
  let component: WooListComponent;
  let fixture: ComponentFixture<WooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
