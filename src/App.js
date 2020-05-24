import React from 'react';

import Router from './router/Router';
import routes from './router/routes';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router routes={routes} />
    </div>
  );
}

export default App;
