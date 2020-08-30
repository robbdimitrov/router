import { parse } from './query';

it('parses empty query string', () => {
  expect(parse('')).toStrictEqual({});
});

it('parses query string', () => {
  const query = '?name=John&year=2020';
  const result = {name: 'John', year: '2020'};
  expect(parse(query)).toStrictEqual(result);
});
