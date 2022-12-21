import React from 'react';

// import components
//by default hight 1400
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[900px]'> 
      <div className='container mx-auto '>
        <div className='flex flex-col items-center text-center '>
          <h1 className='section-title before:content- relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
          Portfolio
          </h1>
          {/* content-portfolio */}
          <p className='subtitle'>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam */}
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
