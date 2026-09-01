import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy loading components for better performance (Code Splitting)
const AllTests = lazy(() => import('./pages/AllTests'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const TestSeries = lazy(() => import('./pages/TestSeries'));
const TestDetails = lazy(() => import('./pages/TestDetails'));
const UnlockTest = lazy(() => import('./pages/UnlockTest'));
const MockTest = lazy(() => import('./pages/MockTest'));
const Result = lazy(() => import('./pages/Result'));
const AnswerReview = lazy(() => import('./pages/AnswerReview'));
const MyAttempts = lazy(() => import('./pages/MyAttempts'));

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '24px', color: '#6366f1' }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* MockTest runs outside the main AppLayout so it can be full screen without standard header */}
          <Route path="/test/:testId" element={<MockTest />} />
          
          {/* All other routes use the standard AppLayout */}
          <Route path="*" element={
            <AppLayout>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<AllTests />} />
                  <Route path="/tests" element={<Navigate to="/" replace />} />
                  <Route path="/courses" element={<Navigate to="/" replace />} />
                  <Route path="/courses/:courseId" element={<CoursePage />} />
                  <Route path="/test-series/:courseId/:subjectId" element={<TestSeries />} />
                  <Route path="/test-series/:courseId/:subjectId/:testId" element={<TestDetails />} />
                  <Route path="/test-series/:courseId/:subjectId/:testId/unlock" element={<UnlockTest />} />
                  
                  <Route path="/result/:testId" element={<Result />} />
                  <Route path="/result/:testId/review" element={<AnswerReview />} />
                  
                  <Route path="/my-attempts" element={<MyAttempts />} />
                </Routes>
              </Suspense>
            </AppLayout>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
