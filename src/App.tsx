import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import Mindmap from './components/Mindmap';
import NetworkingCommentary from './components/NetworkingCommentary';
import LinkedIn from './components/LinkedIn';
import JobOffer from './components/JobOffer';
import DigitalPortfolio from './components/DigitalPortfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 space-y-16 sm:space-y-24">
          <AboutMe />
          <Resume />
          <CoverLetter />
          <Mindmap />
          <NetworkingCommentary />
          <LinkedIn />
          <JobOffer />
          <DigitalPortfolio />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;