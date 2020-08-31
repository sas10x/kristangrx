import * as fromActivity from './activity.actions';

describe('loadActivitys', () => {
  it('should return an action', () => {
    expect(fromActivity.loadActivities().type).toBe('[Activity] Load Activitys');
  });
});
