import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooLayoutComponent } from './woo-layout.component';

describe('WooLayoutComponent', () => {
  let component: WooLayoutComponent;
  let fixture: ComponentFixture<WooLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
