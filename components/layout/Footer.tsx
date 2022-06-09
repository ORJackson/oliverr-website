import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-screen-lg px-4 mx-auto py-8">
      <hr className="w-full border-1 border-gray-100 dark:border-gray-800 mb-8" />
      <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {/* <div className="flex flex-col space-y-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div> */}
        <div className="flex flex-col space-y-4 items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ojacksonio"
          >
            Twitter
          </a>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ORJackson"
          >
            GitHub
          </a>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/oliver-jackson-874a7b19b/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};