
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300 mb-4">
              Apne Wale Coders is dedicated to empowering tech professionals through mentorship, 
              interview preparation, and career guidance services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#resume-building" className="text-gray-300 hover:text-white transition-colors">
                  Resume Building
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services#mock-interview" className="text-gray-300 hover:text-white transition-colors">
                  Mock Interviews
                </Link>
              </li>
              <li>
                <Link to="/services#career-guidance" className="text-gray-300 hover:text-white transition-colors">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link to="/services#career-strategy" className="text-gray-300 hover:text-white transition-colors">
                  Career Strategy & Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Blogs Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Blogs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs/1" className="text-gray-300 hover:text-white transition-colors">
                  Top Interview Questions for 2024
                </Link>
              </li>
              <li>
                <Link to="/blogs/2" className="text-gray-300 hover:text-white transition-colors">
                  Resume Tips That Get You Hired
                </Link>
              </li>
              <li>
                <Link to="/blogs/3" className="text-gray-300 hover:text-white transition-colors">
                  Mastering Data Structures
                </Link>
              </li>
              <li>
                <Link to="/blogs/4" className="text-gray-300 hover:text-white transition-colors">
                  Frontend Developer Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <strong>Email:</strong> apnewalecoders@gmail.com
              </li>
              <li className="text-gray-300">
                <strong>Address:</strong> Mumbai, Maharashtra, India
              </li>
              <li className="mt-4">
                <Link to="/book-slot" className="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md inline-block transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Apne Wale Coders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
