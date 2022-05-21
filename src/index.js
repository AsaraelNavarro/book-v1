import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//Page and layout imports
/* import { Homepage } from './pages/Homepage';
import { JobDetails } from './pages/JobDetails';
import { Category } from './pages/Category'; */
/* import { SiteHeader } from './components/SiteHeader'; */
import './css/main.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

