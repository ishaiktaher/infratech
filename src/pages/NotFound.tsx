// Removing unused React import since we're using React 17+ with automatic JSX runtime
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to InfraTech Construction Materials homepage."
      />
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-6xl font-bold bg-theme text-transparent bg-clip-text mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-center text-white transition duration-200 ease-in-out bg-theme rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;