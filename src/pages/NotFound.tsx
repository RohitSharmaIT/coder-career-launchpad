
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 flex items-center justify-center bg-gray-50 px-4" style={{ minHeight: 'calc(100vh - 5rem)' }}>
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-brand-red mb-4">404</h1>
          <p className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
          </p>
          <Link to="/">
            <Button className="bg-brand-red hover:bg-red-600 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
