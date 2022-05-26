import Image from 'next/image';
import React from 'react';
import Me from '../public/images/me.jpg';

export const Hero = () => {
  return (
    <div className="py-28">
      <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-20 justify-center items-center">
        
        
        <div className="">
          <h1 className=" text-5xl md:text-7xl mb-5 font-bold tracking-wide">
            Oliver R Jackson
          </h1>
          <p className="text-xl mb-5">
            Computer Science MSc student
          </p>
          <p className="text-xl">
           Soon to be: Software Engineer 
          </p>
          <p className="text-xl">
           Previously: Director of Operations @ Spatial
          </p>
          <p className="text-xl mb-5">
           Surfing, skiing, new to sport climbing 
          </p>
        </div>

        <div>
          <Image
            src={Me}
            alt="Oliver Jackson"
            width="400px"
            height="400px"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

