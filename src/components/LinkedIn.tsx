import React from 'react';
import { Linkedin } from 'lucide-react';

const LinkedIn = () => {
  return (
    <section id="linkedin" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">LinkedIn</h2>

        <div className="card">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#0A66C2] rounded-full flex items-center justify-center mb-4">
                <Linkedin size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect with me on LinkedIn</h3>
              
              <a 
                href="https://www.linkedin.com/in/mohammedhaji9991" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0A66C2] text-white rounded-lg transition-colors hover:bg-[#004182] focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-opacity-50"
              >
                <Linkedin size={20} className="mr-2" />
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedIn;