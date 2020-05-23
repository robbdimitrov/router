import React, { Suspense } from 'react';

function getComponent(routes, path) {
  const route = routes.filter((item) => item.path === path)[0];
  if (!route) {
    return (
      <h1>404</h1>
    )
  }
  return route.component;
}

function Router({ routes }) {
  const path = window.location.pathname;
  const Component = getComponent(routes, path);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default Router;
