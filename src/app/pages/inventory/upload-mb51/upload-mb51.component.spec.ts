import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMb51Component } from './upload-mb51.component';

describe('UploadMb51Component', () => {
  let component: UploadMb51Component;
  let fixture: ComponentFixture<UploadMb51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMb51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMb51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
