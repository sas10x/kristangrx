import * as fromSocialStore from './social-store.actions';

describe('loadSocialStores', () => {
  it('should return an action', () => {
    expect(fromSocialStore.loadSocialStores().type).toBe('[SocialStore] Load SocialStores');
  });
});
