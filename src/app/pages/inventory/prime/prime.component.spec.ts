import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeComponent } from './prime.component';

describe('PrimeComponent', () => {
  let component: PrimeComponent;
  let fixture: ComponentFixture<PrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
