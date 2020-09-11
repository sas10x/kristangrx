import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBlankComponent } from './social-blank.component';

describe('SocialBlankComponent', () => {
  let component: SocialBlankComponent;
  let fixture: ComponentFixture<SocialBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
