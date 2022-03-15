import {getAuthors} from '../../src/middleware/authors';

test('if authors count is 6 from the api', async () => {
  const response = await getAuthors();

  expect(response.data.length).toBe(6);
});
