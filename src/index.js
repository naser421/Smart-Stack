import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const seed = ReactDOM.createRoot(document.getElementById('seed'));
seed.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);

serviceWorkerRegistration.register();