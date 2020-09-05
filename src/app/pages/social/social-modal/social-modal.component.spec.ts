import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialModalComponent } from './social-modal.component';

describe('SocialModalComponent', () => {
  let component: SocialModalComponent;
  let fixture: ComponentFixture<SocialModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
