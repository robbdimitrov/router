import React from 'react';

const Home = React.lazy(() => import('../screens/Home'));
const Profile = React.lazy(() => import('../screens/Profile'));
const Settings = React.lazy(() => import('../screens/Settings'));

const routes = [
  { path: 'home', component: Home },
  { path: 'user/:userId', component: Profile },
  { path: 'settings', component: Settings },
  { path: '', redirectTo: '/home' }
];

export default routes;
