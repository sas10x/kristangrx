import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KComboComponent } from './k-combo.component';

describe('KComboComponent', () => {
  let component: KComboComponent;
  let fixture: ComponentFixture<KComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
