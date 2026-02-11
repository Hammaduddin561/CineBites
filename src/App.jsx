import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SwipeDeck } from './pages/SwipePage';
import { Peelists } from './pages/Peelists';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ResumePage } from './pages/ResumePage';
import { MoviesPage } from './pages/MoviesPage';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white font-body selection:bg-pink-500 selection:text-white">
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HomePage />
              </motion.div>
            } />
            <Route path="/search" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SearchResultsPage />
              </motion.div>
            } />
            <Route path="/match" element={<SwipeDeck />} />
            <Route path="/peelists" element={<Peelists />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
