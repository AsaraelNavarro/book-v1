import React from 'react';
import { Routes, Route } from "react-router-dom";

//Page and layout imports
import { Homepage } from './pages/Homepage';
/* import { JobDetails } from './pages/JobDetails';
import { Category } from './pages/Category'; */
import { SiteHeader } from './components/SiteHeader';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/detalles/:id" element={<JobDetails />} />
        <Route path="/categoria/:id" element={<Category />} />
        <Route path="*" element={<h1>404</h1>} /> */}
      </Routes>
    </div>
  );
}

export default App;
