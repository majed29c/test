import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 ">
      <div className=" mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Passionate developer crafting exceptional digital experiences
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white  p-8 ">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Hello, I'm <span className="text-blue-600">Your Name</span>
          </h3>
          
          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              I'm a passionate frontend developer with expertise in building responsive, user-friendly web applications. 
              With over 5 years of experience working with modern frameworks like React and Next.js, I specialize in 
              creating intuitive interfaces that provide exceptional user experiences.
            </p>

            <p className="leading-relaxed">
              My approach combines clean code, thoughtful design, and performance optimization. I'm constantly learning 
              new technologies and techniques to stay at the forefront of web development.
            </p>

            
            <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-gray-700 my-8">
              "I believe that the best digital solutions come from understanding both technical possibilities and human needs."
            </blockquote>

            {/* Skills Section */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">My Skills</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'UI/UX'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

         
          <div className="mt-10 text-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;