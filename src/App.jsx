import React, { Suspense, lazy, useEffect, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import SEO from './components/SEO';
import { useServiceWorker } from './hooks/useServiceWorker';

// Lazy load de las páginas
const Home = lazy(() => import('./pages/Home'));
const HTMLPage = lazy(() => import('./pages/HTML'));
const CSS = lazy(() => import('./pages/CSS'));
const JavaScript = lazy(() => import('./pages/JavaScript'));
const ReactPage = lazy(() => import('./pages/React'));
const Tailwind = lazy(() => import('./pages/TailwindCSS'));
const Databases = lazy(() => import('./pages/Databases'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = memo(() => {
  useServiceWorker();
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ErrorBoundary>
        <MainLayout>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div {...pageTransition}>
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/html"
                  element={
                    <motion.div {...pageTransition}>
                      <HTMLPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/css"
                  element={
                    <motion.div {...pageTransition}>
                      <CSS />
                    </motion.div>
                  }
                />
                <Route
                  path="/javascript"
                  element={
                    <motion.div {...pageTransition}>
                      <JavaScript />
                    </motion.div>
                  }
                />
                <Route
                  path="/react"
                  element={
                    <motion.div {...pageTransition}>
                      <ReactPage />
                    </motion.div>
                  }
                />
                <Route
                  path="/tailwind"
                  element={
                    <motion.div {...pageTransition}>
                      <Tailwind />
                    </motion.div>
                  }
                />
                <Route
                  path="/databases"
                  element={
                    <motion.div {...pageTransition}>
                      <Databases />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </MainLayout>
      </ErrorBoundary>
    </Router>
  );
});

export default memo(App);
