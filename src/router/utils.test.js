import { combine, isParam, normalize } from './utils';

it('combines strings', () => {
  expect(combine('', '')).toBe('');
  expect(combine('first', '')).toBe('first');
  expect(combine('', 'second')).toBe('second');
  expect(combine('first', 'second')).toBe('first second');
});

it('validates parameters', () => {
  expect(isParam(':userId')).toBe(true);
  expect(isParam('settings')).toBe(false);
});

it('normalizes paths', () => {
  expect(normalize('/users/:userId/likes/'))
    .toStrictEqual('users/:userId/likes');
  expect(normalize('settings/')).toStrictEqual('settings');
});
