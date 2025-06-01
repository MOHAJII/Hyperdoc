import React from 'react';

const CoverLetter = () => {
  return (
    <section id="cover-letter" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Cover Letter</h2>

        <div className="card">
          <div className="p-6 sm:p-8">
            <div className="mb-4">
              <p className="text-gray-700 mb-1"><strong>Mohammed Haji</strong></p>
              <p className="text-gray-700 mb-1"><strong>Mohammedia, Maroc</strong></p>
              <p className="text-gray-700 mb-1"><strong>mohammedhaji9991@gmail.com</strong></p>
              <p className="text-gray-700 mb-4"><strong>+212 608537301</strong></p>
              <hr className="my-4" />
              <p className="text-gray-700 mb-1"><strong>M. El Banyaoui</strong></p>
              <p className="text-gray-700 mb-1"><strong>Zytech Software</strong></p>
              <p className="text-gray-700 mb-4"><strong>Mohammedia, Morocco</strong></p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4"><strong>Dear M. El Banyaoui,</strong></p>
              
              <p className="mb-4">
                I am writing to express my keen interest in the Software Engineering Internship position at Zytech Software. As a passionate software engineering student at ENSET Mohammedia with a focus on mobile development and AI integration, I believe I would be an excellent fit for your team.
              </p>
              
              <p className="mb-4">
                My academic journey has equipped me with strong technical skills in mobile development frameworks and AI technologies. I have successfully applied these skills in various projects, demonstrating my ability to deliver innovative solutions.
              </p>
              
              <p className="mb-4">
                I am particularly drawn to Zytech Software's commitment to pushing the boundaries of technology through the integration of AI in mobile applications. Your recent projects in this space align perfectly with my interests and expertise.
              </p>
              
              <p className="mb-4">
                I am eager to contribute my skills and learn from your experienced team. My strong foundation in software engineering, combined with my passion for innovation, makes me an ideal candidate for this opportunity.
              </p>
              
              <p className="mb-4">
                Thank you for considering my application. I look forward to discussing how I can contribute to Zytech Software's continued success.
              </p>
              
              <p className="mb-4"><strong>Sincerely,</strong></p>
              <p><strong>Mohammed Haji</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;