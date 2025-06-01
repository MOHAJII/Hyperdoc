import React from 'react';
import { Network, Search } from 'lucide-react';

const Mindmap = () => {
  return (
    <section id="mindmap" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Mindmap</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Network size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">My Networking</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                I actively build my network by connecting with professors, alumni, LinkedIn professionals, and participating in tech communities and career events.
              </p>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  University Professors
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Industry Professionals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Alumni Network
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  LinkedIn Contacts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Online Communities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Career Fairs & Events
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Search size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Hidden Job Market</h3>
              </div>
              
              <p className="text-gray-700">
                Many job and internship opportunities are found through personal connections and are not publicly advertised. Networking helps uncover these hidden offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mindmap;