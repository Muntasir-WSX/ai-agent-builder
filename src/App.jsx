import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import BuilderPage from './pages/BuilderPage';
import HeroCanvas from './components/HeroCanvas';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isBuilder = location.pathname === '/builder';

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Conditional Navbar */}
      {!isBuilder && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* HOME / BANNER ROUTE */}
          <Route path="/" element={
            <motion.section 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -50 }}
              className="relative h-screen flex flex-col items-center justify-center text-center px-4"
            >
              <HeroCanvas />
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Build Your Future AI
              </h1>
              <p className="text-slate-400 max-w-2xl text-lg mb-8">
                The most advanced drag-and-drop AI agent profile builder. 
                Custom personalities, skills, and logic in seconds.
              </p>
              <button 
                onClick={() => navigate('/builder')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                Get Started
              </button>
            </motion.section>
          } />

          {/* BUILDER ROUTE */}
          <Route path="/builder" element={
            <motion.div 
              initial={{ opacity: 0, x: 100 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0 }}
            >
              <BuilderPage />
            </motion.div>
          } />

        </Routes>
      </AnimatePresence>

      {/* Conditional Footer */}
      {!isBuilder && (
        <footer className="py-8 text-center text-slate-500 border-t border-white/5">
          © 2026 AxonBuilder AI. All rights reserved.
        </footer>
      )}
    </div>
  );
}

export default App;