import {truncate} from '../../src/common/util';

test('should truncate the given string if it is more than 100 characters', () => {
  const longText: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  expect(truncate(longText, 100)).toBe(longText.slice(0, 100) + '...');
});

test('should not truncate the given string if it is lower than 100 characters', () => {
  const shortText: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  expect(truncate(shortText, 100)).toBe(shortText);
});
