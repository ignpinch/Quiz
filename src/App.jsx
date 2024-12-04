import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage'; // Homepage Component
import Quiz from './components/Quiz'; // Quiz Component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} /> {/* Home Route */}
        <Route path="/quiz" element={<Quiz />} /> {/* Quiz Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
