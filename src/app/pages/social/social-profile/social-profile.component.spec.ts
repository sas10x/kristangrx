import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileComponent } from './social-profile.component';

describe('SocialProfileComponent', () => {
  let component: SocialProfileComponent;
  let fixture: ComponentFixture<SocialProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
