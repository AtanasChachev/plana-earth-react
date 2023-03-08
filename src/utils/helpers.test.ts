import { capitalizeWords, formatDate, getObjectValues } from './helpers';

const mockObject = {
  'name': '1',
  'country': {
    'id': '2',
    'name': '3',
  },
  'startDate': '4',
  'endDate': '5',
  'interval': '6',
};

describe('Utilities tests', () => {
  test('capitalizeWords should capitalize each word in a sentence', () => {
    expect(capitalizeWords('this is long sentence')).toEqual('This Is Long Sentence');
  });

  test('formatDate should return date in desired format', () => {
    expect(formatDate('03-03-2020', 'YYYY-MM-DD')).toEqual('2020-03-03');
    expect(formatDate('Wed Jun 08 2022 22:26:41 GMT+0300 (Eastern European Summer Time)', 'YYYY-MM-DD'))
      .toEqual('2022-06-08');
  });

  test('Flatten nested objects with getObjectValues', () => {
    expect(getObjectValues(mockObject)).toEqual(['1', '2', '3', '4', '5', '6']);
  });
});