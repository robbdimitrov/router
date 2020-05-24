import React from 'react';

import Router from './router/router';
import routes from './router/routes';
import Navbar from './shared/Navbar';

// TODO: use router context
const router = new Router(routes);

console.log(`router.resolve /users/10/ ${router.resolve('/users/10/')}`)

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Router routes={routes} /> */}
    </div>
  );
}

export default App;
