import React from 'react';

import routes from './router/routes';
import Navbar from './shared/Navbar';
import { Router } from './router';

function App() {
  return (
    <Router routes={routes}>
      <Navbar />
    </Router>
  );
}

export default App;
