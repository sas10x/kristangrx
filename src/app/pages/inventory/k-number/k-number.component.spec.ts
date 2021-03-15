import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KNumberComponent } from './k-number.component';

describe('KNumberComponent', () => {
  let component: KNumberComponent;
  let fixture: ComponentFixture<KNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
