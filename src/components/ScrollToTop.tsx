import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Force scroll to top on initial load and when no state is present
    if (!location.state) {
      window.scrollTo(0, 0);
    }
  }, [location.state]); // Run when state changes or on mount

  useEffect(() => {
    // Add event listener for page refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollToTop;