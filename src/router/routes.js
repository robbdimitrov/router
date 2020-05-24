import React from 'react';

const Home = React.lazy(() => import('../screens/Home'));
const Profile = React.lazy(() => import('../screens/Profile'));
const Settings = React.lazy(() => import('../screens/Settings'));
const NotFound = React.lazy(() => import('../Shared/NotFound'));

const routes = [
  { path: 'home', component: Home },
  { path: 'users/:userId', component: Profile },
  { path: 'settings', component: Settings },
  { path: '404', component: NotFound },
  { path: '', redirectTo: '/home' },
  { path: '**', redirectTo: '/404' }
];

export default routes;
