import React from 'react';

// import woman image
import ujjwal_photo from '../assets/img/ujjwal_photo.webp';
import resume from '../assets/img/UJJWAL_SINGH.pdf'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-start lg:items-start '>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Ujjwal! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Full Stack <br /> Web Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-justify lg:text-justify '>
              Full stack developer who cares <br/> deeply about user experience.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
             <a href={resume} download={true}>Resume</a>
            </button>
          </div>
          <div className=' lg:flex flex-1 justify-end items-end h-full '>
            <img src={ujjwal_photo} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
