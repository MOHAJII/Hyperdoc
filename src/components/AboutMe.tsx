import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="./images/profile.jpg"
                  alt="Mohammed Haji"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I'm Mohammed Haji, a software engineering student at ENSET Mohammedia, passionate about mobile development and AI integration.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center">
                  <Mail size={18} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">mohammedhaji9991@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">+212 608537301</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Mohammedia, Maroc</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/MOHAJII" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/mohammedhaji9991" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;