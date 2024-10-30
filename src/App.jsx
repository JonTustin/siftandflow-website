// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar (Header) */}
        <header className="flex-none">
          <Navbar />
        </header>

        {/* Main Content Area with Scroll */}
        <main className="flex-grow overflow-y-auto pt-11">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>

        {/* Fixed Footer */}
        <footer className="flex-none fixed bottom-0 w-full">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
