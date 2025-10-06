import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import all your page components
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
import ExeComPage from './pages/ExeComPage';
import RegistrationPage from './pages/RegistrationPage';
import RegistrationComingSoonPage from './pages/RegistrationComingSoonPage';
import RegistrationClosedPage from './pages/RegistrationClosedPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import IEEEDayPage from  './pages/IEEEDayPage';

// This Layout component conditionally renders the Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideOnRoutes = ['/login', '/admin'];
  const shouldHide = hideOnRoutes.includes(location.pathname);

  // If the current route is in the hideOnRoutes array, don't render Navbar/Footer
  if (shouldHide) {
    return <>{children}</>;
  }

  // Otherwise, render the standard layout
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-gray-800">
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<IEEEDayPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/execom" element={<ExeComPage />} />
            <Route path="/register/:eventSlug" element={<RegistrationPage />} />
            <Route path="/registration-coming-soon" element={<RegistrationComingSoonPage />} />
            <Route path="/registration-closed" element={<RegistrationClosedPage />} />
            
            {/* Auth Route */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Admin Route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;