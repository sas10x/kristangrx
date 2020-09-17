import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CommentEffects } from './comment.effects';

describe('CommentEffects', () => {
  let actions$: Observable<any>;
  let effects: CommentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CommentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
