import React from 'react';

const About = () => {

  return (
    // <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2">
    <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2">
    {/* <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2"> */}
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide">
        About Me
      </h1>
      {/* <div className="prose md:prose-lg prose-p:text-gray-900 dark:prose-p:text-gray-100 dark:prose-invert prose-gray mb-16"> */}
      <div className="prose md:prose-lg prose-p:text-gray-900 dark:prose-p:text-gray-100 dark:prose-invert prose-gray mb-16">
        <p>
          Hi, I&#39;m Oliver. I am an aspiring object-oriented software engineer, and will soon graduate with a master&#39;s in Computer Science from Swansea University. 
          
        </p>

        <p>
          I really enjoy the challenges involved in writing code. 
          The language I am most skilled in is Java. 
          However, I am also familiar with Python, SQL, TypeScript, Javascript, and HTML/CSS. 
          My technical interests include software engineering and machine learning.
          
        </p>

        <p>
          My first degree was in Philosophy. 
          I loved it as it was essentially a degree in problem-solving, plus you get to debate complex issues and reimagine how the world should work, starting from first principles. 
          Between my first and second degrees, I worked various jobs, travelled extensively, and started a business. 
          
        </p>

        <p>
          Returning to university and transitioning from philosophy to computer science was a significant change. 
          Initially, I thought not coming from a hard-science background would be an obstacle. 
          I now think the analytical approach encouraged in Philosophy provides a strong foundation from which to transition into programming. 
          The practice of breaking down an argument into its constituent parts and exploring how they work together, if at all, is not too dissimilar from the way you can think about fixing bugs in code. 

        </p>

        <p>
          Now, I am almost finished at university, and I&#39;ve enjoyed the degree even more than I expected to. 
          Studying objected-oriented programming in Java has been the highlight. 
          I&#39;ve also enjoyed learning about relational and object-oriented database systems working with MySQL, working on group software engineering projects in Java / JavaFX, and studying how to design efficient algorithms in Java. 
          I am currently working on my final project and dissertation, in which I am carrying out sentiment analysis on Twitter data using machine learning &#40;in Python&#41;.
    
        </p>

        <p>
          I&#39;m originally from the UK, but I&#39;ve lived in several different countries. I&#39;m also quite outdoorsy, I particularly like to surf, ski, and climb.
          
        </p>

        <p>  
          I am currently in search of a role as a software engineer. Check out my <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ORJackson"
          >
            GitHub
          </a> to see some of my projects.
          If you&#39;d like to get to know me more, feel free to contact me on <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ojacksonio"
          >
            Twitter
          </a> or <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/oliverrobinjackson/"
          >
            LinkedIn
          </a>.

        </p>
      </div>

    </div>
  );
};

export default About;