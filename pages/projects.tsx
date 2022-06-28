import React from 'react';

const Projects = () => {

  return (
    <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2">
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide">
        Software 
      </h1>
      <div className="prose md:prose-lg prose-p:text-gray-900 dark:prose-p:text-gray-100 dark:prose-invert prose-gray mb-16">
        <p>
          I have produced a few different projects throughout my journey studying computer science.
          
         
        </p>

        <p>
          These have included a restauraunt booking / ordering application &#40;a group project in Java&#41;, several web applications &#40;this website is a next.js react app written in typescript&#41;, and several command line projects.
          I am currently studying some of the fundamentals in machine learning &#40;in Python&#41; and building some small projects on datasets using linear regression and classification algorithms.

        </p>

        <p>
          Check out my <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ORJackson"
          >
            GitHub
          </a> for more info.
        </p>
        
      </div>

    </div>
  );
};

export default Projects;

