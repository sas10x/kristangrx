import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooCreateComponent } from './woo-create.component';

describe('WooCreateComponent', () => {
  let component: WooCreateComponent;
  let fixture: ComponentFixture<WooCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
