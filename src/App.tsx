import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import SEOHead from './components/SEOHead';
import BlogList from './components/BlogList';
import BlogPost from './pages/BlogPost';

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Home"
        description="InfraTech Construction Materials - Building stronger futures with advanced construction materials. Trusted quality, smart innovation, sustainable strength."
      />
      <Hero />
      <About />
      <Products />
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
        description={`High-quality ${productId} from InfraTech Construction Materials. Discover our premium construction materials for your building needs.`}
        url={location.pathname}
      />
      <ProductPage />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductPageWrapper />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
          <FloatingCallButton />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
