
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-brand-red">Apne Wale</span> Coders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Home
          </Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            About Us
          </Link>
          <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Services
          </Link>
          <Link to="/blogs" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Blogs
          </Link>
          <Link to="/jobs" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Jobs
          </Link>
          <Link to="/study-material" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Study Material
          </Link>
          <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Dashboard
          </Link>
          <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Login
          </Link>
          <Link to="/post-job" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
            Post a Job
          </Link>

          <Link to="/book-slot">
            <Button className="ml-2 bg-brand-red hover:bg-red-600 text-white">
              Book a Slot
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/blogs" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link to="/jobs" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Jobs
            </Link>
            <Link to="/study-material" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Study Material
            </Link>
            <Link to="/dashboard" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Dashboard
            </Link>
            <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Login
            </Link>
            <Link to="/post-job" className="px-3 py-2 text-gray-700 hover:text-brand-red transition-colors" onClick={toggleMenu}>
              Post a Job
            </Link>
            <Link to="/book-slot" className="px-3 py-2 bg-brand-red text-white rounded-md text-center" onClick={toggleMenu}>
              Book a Slot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
