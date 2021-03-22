import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddXComponent } from './add-x.component';

describe('AddXComponent', () => {
  let component: AddXComponent;
  let fixture: ComponentFixture<AddXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
