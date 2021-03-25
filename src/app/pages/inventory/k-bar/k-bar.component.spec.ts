import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KBarComponent } from './k-bar.component';

describe('KBarComponent', () => {
  let component: KBarComponent;
  let fixture: ComponentFixture<KBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
