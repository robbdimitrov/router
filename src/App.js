import React from 'react';

import Navbar from './shared/Navbar';
import { Router } from './router';

const Home = React.lazy(() => import('./screens/Home'));
const Profile = React.lazy(() => import('./screens/Profile'));
const Settings = React.lazy(() => import('./screens/Settings'));
const NotFound = React.lazy(() => import('./screens/NotFound'));

const routes = [
  { path: '/home', component: Home },
  { path: '/users/:userId', component: Profile },
  { path: '/settings', component: Settings },
  { path: '/not-found', component: NotFound },
  { path: '/', redirectTo: '/home' },
  { path: '*', redirectTo: '/not-found' }
];

function App() {
  return (
    <Router routes={routes}>
      <Navbar />
    </Router>
  );
}

export default App;
