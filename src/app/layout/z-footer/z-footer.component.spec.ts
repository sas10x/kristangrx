import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZFooterComponent } from './z-footer.component';

describe('ZFooterComponent', () => {
  let component: ZFooterComponent;
  let fixture: ComponentFixture<ZFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
