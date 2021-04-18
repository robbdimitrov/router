import {match} from './route';

const routes = [
  {path: '/home'},
  {path: '/users/:userId'},
  {path: '/not-found'},
  {path: '/', redirectTo: '/home'},
  {path: '*', redirectTo: '/not-found'},
];

describe('#match()', () => {
  it('matches default path', () => {
    const route = match(routes, '/');
    expect(route.redirectTo).toEqual('/home');
  });

  it('redirects to wildcard if route is not found', () => {
    const route = match(routes, '/sometest/route/12');
    expect(route.redirectTo).toEqual('/not-found');
  });

  it('matches correct route', () => {
    const route = match(routes, '/home');
    expect(route.path).toEqual('/home');
  });

  it('matches route with path params', () => {
    const route = match(routes, '/users/12');
    expect(route.path).toEqual('/users/:userId');
    expect(route.params).toStrictEqual({userId: '12'});
  });
});
