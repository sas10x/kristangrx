import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooUpdateComponent } from './woo-update.component';

describe('WooUpdateComponent', () => {
  let component: WooUpdateComponent;
  let fixture: ComponentFixture<WooUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
