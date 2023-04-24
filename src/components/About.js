import React from 'react';


// import img
import Image from '../assets/img/ujjwal.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about' >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-justify lg:items-start lg:text-justify'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content- relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Ujjwal Singh
              </h2>
              {/* about  */}
              <p className='mb-4 text-accent'>
                Full Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Absorbent and intuitive problem solver. Aspiring full-stack
              developer with a specialization in MERN stack. Passionate about
              building user-centric products by translating user requirements
              into technical solutions. <br />
                {/* <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus. */}
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
