import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import FAQ from './components/FAQ';
import FloatingCallButton from './components/FloatingCallButton';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import BlogList from './components/BlogList';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import { AdminProvider } from './context/AdminContext';
import ProtectedRoute from './components/ProtectedRoute';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import Testimonials from './components/Testimonials';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Only handle scroll to section when coming from navigation with state
    if (location.state) {
      const sectionId = location.state.scrollToContact ? 'contact' : 
                       location.state.scrollToProducts ? 'products' : '';
      
      if (sectionId) {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Clear the state after scrolling
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <SEOHead
        title="Home"
        description="CemStrong Construction Products - Building stronger futures with advanced construction products. Trusted quality, smart innovation, sustainable strength."
      />
      <Hero />
      <About />
      <Products />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
    </>
  );
};

const ProductPageWrapper = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];

  return (
    <>
      <SEOHead
        title={`${productId} - Construction Materials`}
        description={`High-quality ${productId} from CemStrong Construction Products. Discover our premium construction products for your building needs.`}
        url={location.pathname}
      />
      <ProductPage />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <AdminProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:productId" element={<ProductPageWrapper />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              
              {/* Protected admin routes */}
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* 404 route - must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <FloatingCallButton />
            <BackToTop />
          </div>
        </Router>
      </AdminProvider>
    </HelmetProvider>
  );
}

export default App;
