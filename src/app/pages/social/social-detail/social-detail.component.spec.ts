import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDetailComponent } from './social-detail.component';

describe('SocialDetailComponent', () => {
  let component: SocialDetailComponent;
  let fixture: ComponentFixture<SocialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
