import { capitalizeWords, formatDate } from './helpers';

describe('Utilities tests', () => {
  test('capitalizeWords should capitalize each word in a sentence', () => {
    expect(capitalizeWords('this is long sentence')).toEqual('This Is Long Sentence');
  });

  test('formatDate should return date in desired format', () => {
    expect(formatDate('03-03-2020', 'YYYY-MM-DD')).toEqual('2020-03-03');
    expect(formatDate('Wed Jun 08 2022 22:26:41 GMT+0300 (Eastern European Summer Time)', 'YYYY-MM-DD'))
      .toEqual('2022-06-08');
  });
});