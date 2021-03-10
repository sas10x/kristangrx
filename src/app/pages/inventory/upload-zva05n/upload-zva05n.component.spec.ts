import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadZva05nComponent } from './upload-zva05n.component';

describe('UploadZva05nComponent', () => {
  let component: UploadZva05nComponent;
  let fixture: ComponentFixture<UploadZva05nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadZva05nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadZva05nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
