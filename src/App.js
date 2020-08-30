import React, { Suspense } from 'react';

import Navbar from './shared/Navbar';
import { RouterContext, useRoutes } from './router';

const Home = React.lazy(() => import('./screens/Home'));
const Profile = React.lazy(() => import('./screens/Profile'));
const Settings = React.lazy(() => import('./screens/Settings'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

const routes = [
  { path: '/home', component: <Home /> },
  { path: '/users/:userId', component: <Profile /> },
  { path: '/settings', component: <Settings /> },
  { path: '/not-found', component: <NotFound /> },
  { path: '/', redirectTo: '/home' },
  { path: '*', redirectTo: '/not-found' }
];

function App() {
  const route = useRoutes(routes);

  return (
    <div className="app">
      <RouterContext.Provider value={route}>
        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          {route.component}
        </Suspense>
      </RouterContext.Provider>
    </div>
  );
}

export default App;
