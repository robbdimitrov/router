import React from 'react';

import Navbar from './components/Navbar';
import {RouterContext, useRoutes} from '../src/router';

const Home = React.lazy(() => import('./components/Home'));
const Profile = React.lazy(() => import('./components/Profile'));
const Settings = React.lazy(() => import('./components/Settings'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const routes = [
  {path: '/home', component: Home},
  {path: '/users/:userId', component: Profile},
  {path: '/settings', component: Settings},
  {path: '/not-found', component: NotFound},
  {path: '/', redirectTo: '/home'},
  {path: '*', redirectTo: '/not-found'},
];

function App() {
  const route = useRoutes(routes);

  return (
    <div className="app">
      <RouterContext.Provider value={route}>
        <Navbar />

        <React.Suspense fallback={<div>Loading...</div>}>
          <route.component />
        </React.Suspense>
      </RouterContext.Provider>
    </div>
  );
}

export default App;
