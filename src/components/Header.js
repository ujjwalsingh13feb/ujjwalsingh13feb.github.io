import React, { useEffect, useState } from 'react';

// import components
// import Logo from '../assets/img/logo.PNG';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';


const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      id="nav-menu"
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div id="nav-menu" className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        
        <h1 style={{fontSize:"2rem"}}>UJJWAL SINGH</h1>
       
        {/* nav */}
        {/* 𝒰𝒿𝒿𝓌𝒶𝓁 𝒮𝒾𝓃𝑔𝒽 */}
        <div id="nav-menu" className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div id="nav-menu" className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div id="nav-menu" className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
