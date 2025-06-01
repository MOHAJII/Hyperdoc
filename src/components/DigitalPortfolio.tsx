import React from 'react';
import { ExternalLink } from 'lucide-react';

const DigitalPortfolio = () => {
  return (
    <section id="portfolio" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Digital Portfolio</h2>

        <div className="card">
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore My Projects</h3>
            
            <p className="text-gray-600 mb-6">
              Discover my collection of projects showcasing my skills in mobile development and AI integration.
            </p>
            
            <a 
              href="https://mohammedhaji.vercel.app" // Replace with your actual portfolio URL
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <ExternalLink size={20} className="mr-2" />
              View My Digital Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPortfolio;