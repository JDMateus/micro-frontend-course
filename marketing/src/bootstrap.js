import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = el => ReactDOM.render(<App />, el);
// Develompent mode
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  // In isolation
  if (devRoot) mount(devRoot);
}

// Running through continer
export { mount };
