import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Resume</h2>

        <div className="card">
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FileText size={32} className="text-blue-600" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">My Professional Resume</h3>
            
            <p className="text-gray-600 mb-6">
              View my complete professional background, skills, and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a 
                href="/resume-ats.pdf" // Replace with your ATS-friendly resume path
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <Download size={20} className="mr-2" />
                View ATS-friendly Resume
              </a>
              <a 
                href="/resume.pdf" // Replace with your normal resume path
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-200 text-blue-700 rounded-lg transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <Download size={20} className="mr-2" />
                View Normal Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;