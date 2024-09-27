import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from '../components/Wrapper';
import logo from "../assets/icons/image 1.png"
import col from "../assets/icons/Column.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const onCloseMenu =() => {
    setMenuOpen(false);
  };

  return (
   <header className='fixed top-0 left-0 right-0 z-50  bg-[#f5fcffce]'>
    <Wrapper>
    <div>
    <nav className='flex justify-between items-center md:py-2 py-2 mx-3'>
        <div className='flex items-center '>
        <a href='/' className=''>
          <img src={logo} alt='logo' className='w-8 h-7' />
        </a>
        <h1 className='ml-2 font-bold'>ElijahWeb,</h1>
        </div>
        <div
              onClick={onToggleMenu}
              className=" cursor-pointer text-custom-green md:hidden"
            >
              {menuOpen ? <IoMdClose  className="mx-3"/> : <GiHamburgerMenu className="mx-3"/>}
            </div>
        <div className='hidden md:flex space-x-2 lg:space-x-9'>
          <div className='lg:w- w-28'>
            <img src={col} alt='colu' />
          </div>
          <h1 className='font-bold'>Home</h1>
          <h1 className='font-bold'>My Skills</h1>
          <h1 className='font-bold'>Portfolio</h1>
          <h1 className='font-bold'>About Me</h1>
          <h1 className='font-bold'>Testimonials</h1>
          <div className='w-28 lg:w-36'>
            <img src={col} alt='colu' />
          </div>

          <div className='border-nav border rounded-md p-2 hover:bg-[#5f3bee62]'>
            <button className='text-nav'>Contact Me</button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className='flex flex-col md:hidden space-y-2 p-4 bg-white border border-gray-300 rounded-md'>
         <h1 className='font-bold'>Header</h1>
          <h1 className='font-bold'>Portfolio</h1>
          <h1 className='font-bold'>About Me</h1>
          <h1 className='font-bold'>Testimonials</h1>
          <div
           className='border-nav border rounded-md p-2 hover:bg-[#5f3bee62] w-28'>
            <button className='text-nav'>Contact Me</button>
            
          </div>
        </div>
      )}

   </div>
   </Wrapper>
   </header>
  );
}

export default Navbar;
