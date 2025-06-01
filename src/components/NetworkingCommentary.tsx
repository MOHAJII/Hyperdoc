import React from 'react';
import { Users } from 'lucide-react';

const NetworkingCommentary = () => {
  return (
    <section id="networking-commentary" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">My Networking Commentary</h2>

        <div className="card animate-fade-in">
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-icon-bg rounded-full flex items-center justify-center mr-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Building Professional Connections</h3>
            </div>
            
            <div className="prose max-w-none space-y-4 text-gray-700">
              <p>
                I build my network by reaching out to people I know and asking for introductions to professionals with experience in the tech industry. Whenever I meet someone connected to this field, I try to gather contact information to stay in touch.
              </p>
              
              <p>
                I also actively use LinkedIn to grow my professional connections and stay updated on opportunities. Beyond online efforts, I engage in real-world conversations with people to learn more about the industry and discover potential internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkingCommentary;