import {getInitialFeeds, getOlderFeeds} from '../../src/middleware/feeds';

test('if count of initial feeds is 10', async () => {
  const response = await getInitialFeeds();

  expect(response.data.length).toBe(10);
});

test('if count of older feeds is 2 or lower when the limit is given as 2', async () => {
  const response = await getOlderFeeds({start: 10, limit: 2});

  expect(response.data.length).toBeLessThanOrEqual(2);
});
