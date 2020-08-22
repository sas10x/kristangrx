import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooBrandsComponent } from './woo-brands.component';

describe('WooBrandsComponent', () => {
  let component: WooBrandsComponent;
  let fixture: ComponentFixture<WooBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
