import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KBubbleComponent } from './k-bubble.component';

describe('KBubbleComponent', () => {
  let component: KBubbleComponent;
  let fixture: ComponentFixture<KBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
