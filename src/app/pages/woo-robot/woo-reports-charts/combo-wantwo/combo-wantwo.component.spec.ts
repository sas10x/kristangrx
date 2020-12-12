import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboWantwoComponent } from './combo-wantwo.component';

describe('ComboWantwoComponent', () => {
  let component: ComboWantwoComponent;
  let fixture: ComponentFixture<ComboWantwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboWantwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboWantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
