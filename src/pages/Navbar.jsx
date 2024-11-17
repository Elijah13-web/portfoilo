import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from '../components/Wrapper';
import logo from "../assets/icons/image 1.png";
import col from "../assets/icons/Column.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-slate-300'>
      <Wrapper>
        <div>
          <nav className='flex justify-between items-center py-4 mx-2'>
            <div className='flex items-center'>
              <a href='/' className=''>
                <img src={logo} alt='logo' className='w-8 h-7' />
              </a>
              <h1 className='ml-2 font-bold'>ElijahWeb,</h1>
            </div>
            <div
              onClick={onToggleMenu}
              className="cursor-pointer text-custom-green md:hidden"
            >
              {menuOpen ? <IoMdClose className="mx-3" /> : <GiHamburgerMenu className="mx-3" />}
            </div>
            <div className='hidden md:flex space-x-2 lg:space-x-9 md:space-x-5'>
              <div className='lg:w-28 md:w-3'>
                <img src={col} alt='colu' />
              </div>
              <a href="#home" className='font-bold'>Home</a>
              <a href="#skills" className='font-bold'>My Skills</a>
              <a href="#portfolio" className='font-bold'>Portfolio</a>
              <a href="#about" className='font-bold'>About Me</a>
              <a href="#testimonials" className='font-bold'>Testimonials</a>
              <div className='w-2 lg:w-36'>
                <img src={col} alt='colu'/>
              </div>
              <a href="#contact" className='border-nav border rounded-md p-2 hover:bg-[#5f3bee62]'>
                <button className='text-nav'>Contact Me</button>
              </a>
            </div>
          </nav>

          {menuOpen && (
            <div className='flex flex-col md:hidden space-y-2 p-4 bg-white border border-gray-300 rounded-md'>
              <h1 className='font-bold'><a href="#home">Home</a></h1>
              <a href="#skills" className='font-bold'>My Skills</a>
              <h1 className='font-bold'><a href="#portfolio">Portfolio</a></h1>
              <h1 className='font-bold'><a href="#about">About Me</a></h1>
              <h1 className='font-bold'><a href="#testimonials">Testimonials</a></h1>
              <a href="#contact" className='border-nav border rounded-md p-2 hover:bg-[#5f3bee62] w-28'>
                <button className='text-nav'>Contact Me</button>
              </a>
            </div>
          )}
        </div>
      </Wrapper>
    </header>
  );
}

export default Navbar;
