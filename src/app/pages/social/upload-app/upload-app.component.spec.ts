import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAppComponent } from './upload-app.component';

describe('UploadAppComponent', () => {
  let component: UploadAppComponent;
  let fixture: ComponentFixture<UploadAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
