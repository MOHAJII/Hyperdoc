import React from 'react';

const CoverLetter = () => {
  return (
    <section id="cover-letter" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Cover Letter</h2>

        <div className="bg-white shadow-md rounded-lg">
          <div className="p-6 sm:p-8">
            <div className="mb-4 text-gray-700">
              <p className="font-bold">MOHAMMED HAJI</p>
              <p>Mohammedia, Morocco</p>
              <p>mohammedhaji9991@gmail.com</p>
              <p>+212 608537301</p>
              <p>June 3, 2025</p>
              <hr className="my-4" />
              <p className="font-bold">M. El Banyaoui</p>
              <p>Zaytech</p>
              <p>Mohammedia, Morocco</p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4"><strong>Dear M. El Banyaoui,</strong></p>
              
              <p className="mb-4">
                I am excited to apply for the Software Engineering Internship at Zaytech, a renowned company building innovative software solutions. As a dedicated Software Engineering student at ENSET Mohammedia, I have honed my skills in mobile development and various technologies, making me a strong candidate to contribute to your team.
              </p>
              
              <p className="mb-4">
                My academic and project experience aligns with Zaytech’s needs. For instance, I developed a Blind Assistance System using Python and HuggingFace, integrating IoT and AI to support visually impaired users, which improved accessibility for over 50 test users. I am proficient in Java, Python, Spring Boot, and React—skills that match your team’s diverse tech requirements. My internship at OCP further strengthened my ability to deliver solutions in a professional setting, where I collaborated on a software project that streamlined internal processes.
              </p>
              
              <p className="mb-4">
                I am eager to bring my technical expertise and passion for innovation to Zaytech. Thank you for considering my application. I would welcome the opportunity to discuss how my skills can support your upcoming projects. Please feel free to contact me at +212 608537301 or mohammedhaji9991@gmail.com to schedule a conversation.
              </p>
              
              <p className="mb-4"><strong>Sincerely,</strong></p>
              <p className="font-bold">MOHAMMED HAJI</p>
              <p className="mt-4 text-sm italic">P.S. My Blind Assistance System project was recognized at ENSET Mohammedia for its innovative use of AI, a skill I’m excited to apply at Zaytech.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;