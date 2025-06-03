import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Detect active section
      const sectionOffsets = sections.map(section => {
        const el = document.getElementById(section.id);
        return {
          id: section.id,
          offset: el ? el.getBoundingClientRect().top - 80 : Infinity // 80px header height offset
        };
      });
      // Check if near bottom of page
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      if (pageHeight - scrollPosition < 10) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }
      const visibleSection = sectionOffsets.reduce((prev, curr) => {
        return Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev;
      }, { id: 'about', offset: Infinity });
      setActiveSection(visibleSection.id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { name: 'About Me', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Cover Letter', id: 'cover-letter' },
    { name: 'Mindmap', id: 'mindmap' },
    { name: 'LinkedIn', id: 'linkedin' },
    { name: 'Job Offer', id: 'job-offer' },
    { name: 'Digital Portfolio', id: 'portfolio' }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'gradient-header shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div>
            <h1 className="text-2xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">My Hyperdoc</h1>
            <p className="text-sm text-gray-600">Mohammed Haji</p>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`cursor-pointer text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-colors duration-200 relative px-1
                      ${activeSection === section.id ? 'text-blue-700 font-bold after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-blue-800 after:opacity-80' : ''}`}
                    style={{ zIndex: 1 }}
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden gradient-header">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`cursor-pointer text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-colors duration-200 w-full text-left py-2 relative px-1
                      ${activeSection === section.id ? 'text-blue-700 font-bold after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-blue-800 after:opacity-80' : ''}`}
                    style={{ zIndex: 1 }}
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;