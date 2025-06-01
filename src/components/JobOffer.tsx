import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const JobOffer = () => {
  return (
    <section id="job-offer" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Job Offer</h2>

        <div className="card border-l-4 border-blue-500">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold text-blue-600">ZT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Zytech Software</h3>
                    <p className="text-gray-600">Software Development Company</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-gray-800 mb-3">Stage de fin d'année</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2 text-gray-500" />
                    <span>Casablanca, Morocco</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={18} className="mr-2 text-gray-500" />
                    <span>Internship</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2 text-gray-500" />
                    <span>6 months</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 md:border-l md:border-gray-300 md:pl-6 md:ml-6">
                <p className="text-gray-700">
                  Seeking an intern interested in mobile development with AI integration, willing to work onsite if required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOffer;