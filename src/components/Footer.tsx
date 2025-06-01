import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center text-gray-300">
              <Mail size={18} className="mr-2" />
              <a href="mailto:mohammedhaji9991@gmail.com" className="hover:text-white transition-colors">
                mohammedhaji9991@gmail.com
              </a>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;