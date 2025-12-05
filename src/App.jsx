import { useState, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Theme Context
const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem('portfolio-theme', JSON.stringify(newValue));
      return newValue;
    });
  };

  const theme = {
    isDark,
    colors: isDark ? {
      bg: 'from-slate-900 via-purple-900 to-slate-900',
      card: 'bg-white/10 backdrop-blur-xl border border-white/20',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'from-cyan-400 to-blue-600',
      accentHover: 'from-cyan-300 to-blue-500',
      button: 'bg-white/20 hover:bg-white/30 text-white border border-white/30',
      buttonPrimary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white'
    } : {
      bg: 'from-blue-50 via-purple-50 to-pink-50',
      card: 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'from-blue-600 to-purple-600',
      accentHover: 'from-blue-500 to-purple-500',
      button: 'bg-white/40 hover:bg-white/60 text-gray-900 border border-white/50',
      buttonPrimary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Toggle Button Component
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-300 group-hover:text-yellow-200 transition-colors" />
      ) : (
        <Moon className="w-6 h-6 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
      )}
    </motion.button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, isDark } = useTheme();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.colors.bg} ${theme.colors.text} transition-colors duration-500`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ThemeToggle />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export { useTheme, ThemeProvider };
export default App;