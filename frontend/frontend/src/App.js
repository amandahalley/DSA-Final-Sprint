import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTreePage from './pages/CreateTreePage';
import PreviousTreesPage from './pages/PreviousTreesPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateTreePage />} />
          <Route path="/history" element={<PreviousTreesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
