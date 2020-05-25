import React, { Suspense } from 'react';

import { RouterContext, useRoutes } from './router';
import routes from './router/routes';
import Navbar from './shared/Navbar';

function App() {
  const { component } = useRoutes(routes);

  return (
    <RouterContext.Provider>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <component />
      </Suspense>
    </RouterContext.Provider>
  );
}

export default App;
