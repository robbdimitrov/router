import React, { Suspense } from 'react';

import NotFound from '../shared/NotFound';
import { pathToComponent } from './utils';

window.onpopstate = function (event) {
  console.log(`event = ${JSON.stringify(event)}`);
}

function Router({ routes }) {
  const path = window.location.pathname;
  const Component = pathToComponent(routes, path) || NotFound;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default Router;
