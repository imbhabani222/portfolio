// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
// import NotFound from './pages/NotFound';        // 404 Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* Optional: Dedicated pages later */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="*" element={<NotFound />} />  404 fallback */}
      </Routes>
    </Router>
  );
}

export default App;