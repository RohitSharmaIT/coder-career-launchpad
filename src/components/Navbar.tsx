
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, isAdmin, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-brand-red">
            Apne Wale Coders
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className={`text-sm font-medium hover:text-brand-red ${
              location.pathname === '/' ? 'text-brand-red' : 'text-gray-700'
            }`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium hover:text-brand-red ${
              location.pathname === '/about' ? 'text-brand-red' : 'text-gray-700'
            }`}>
              About Us
            </Link>
            <Link to="/services" className={`text-sm font-medium hover:text-brand-red ${
              location.pathname === '/services' ? 'text-brand-red' : 'text-gray-700'
            }`}>
              Services
            </Link>
            <Link to="/blogs" className={`text-sm font-medium hover:text-brand-red ${
              location.pathname.startsWith('/blogs') ? 'text-brand-red' : 'text-gray-700'
            }`}>
              Blogs
            </Link>
            <Link to="/jobs" className={`text-sm font-medium hover:text-brand-red ${
              location.pathname.startsWith('/jobs') ? 'text-brand-red' : 'text-gray-700'
            }`}>
              Jobs
            </Link>
            <Link to="/study-material" className={`text-sm font-medium hover:text-brand-red ${
              location.pathname === '/study-material' ? 'text-brand-red' : 'text-gray-700'
            }`}>
              Study Material
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                {isAdmin() && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm" className="bg-brand-red hover:bg-red-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            <Link to="/post-job">
              <Button variant="outline" size="sm" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                Post a Job
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-4">
              <Link to="/" className={`text-base font-medium hover:text-brand-red ${
                location.pathname === '/' ? 'text-brand-red' : 'text-gray-700'
              }`}>
                Home
              </Link>
              <Link to="/about" className={`text-base font-medium hover:text-brand-red ${
                location.pathname === '/about' ? 'text-brand-red' : 'text-gray-700'
              }`}>
                About Us
              </Link>
              <Link to="/services" className={`text-base font-medium hover:text-brand-red ${
                location.pathname === '/services' ? 'text-brand-red' : 'text-gray-700'
              }`}>
                Services
              </Link>
              <Link to="/blogs" className={`text-base font-medium hover:text-brand-red ${
                location.pathname.startsWith('/blogs') ? 'text-brand-red' : 'text-gray-700'
              }`}>
                Blogs
              </Link>
              <Link to="/jobs" className={`text-base font-medium hover:text-brand-red ${
                location.pathname.startsWith('/jobs') ? 'text-brand-red' : 'text-gray-700'
              }`}>
                Jobs
              </Link>
              <Link to="/study-material" className={`text-base font-medium hover:text-brand-red ${
                location.pathname === '/study-material' ? 'text-brand-red' : 'text-gray-700'
              }`}>
                Study Material
              </Link>
              
              <div className="pt-4 border-t border-gray-100">
                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard" className="block mb-3">
                      <Button variant="outline" className="w-full justify-center">
                        Dashboard
                      </Button>
                    </Link>
                    {isAdmin() && (
                      <Link to="/admin" className="block mb-3">
                        <Button variant="outline" className="w-full justify-center">
                          Admin Panel
                        </Button>
                      </Link>
                    )}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center mb-3"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block mb-3">
                      <Button variant="outline" className="w-full justify-center">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" className="block mb-3">
                      <Button className="w-full justify-center bg-brand-red hover:bg-red-600 text-white">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                <Link to="/post-job" className="block">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    Post a Job
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
