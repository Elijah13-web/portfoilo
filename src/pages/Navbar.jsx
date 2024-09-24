import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from '../components/Wrapper';
import logo from "../assets/image 1.png";
import col from "../assets/Column.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const onCloseMenu =() => {
    setMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 '>
      <Wrapper>
      <nav className='flex justify-between items-center md:py-2 py-2 mx-3'>
        <div className='flex items-center '>
        <Link to="/" className=''>
          <img src={logo} alt='logo' className='w-5 h-5' />
        </Link>
        <h1 className='ml-2'>ElijahWeb</h1>
        </div>
        <div
              onClick={onToggleMenu}
              className=" cursor-pointer text-custom-green md:hidden"
            >
              {menuOpen ? <IoMdClose  className="mx-3"/> : <GiHamburgerMenu className="mx-3"/>}
            </div>
        <div className='hidden md:flex space-x-8'>
          <div className='w-28'>
            <img src={col} alt='colu' />
          </div>
          <h1>Header</h1>
          <h1>Portfolio</h1>
          <h1>About Me</h1>
          <h1>Testimonials</h1>
          <div className='w-36'>
            <img src={col} alt='colu' />
          </div>

          <div className='border-nav border rounded-md p-2 hover:bg-[#5f3bee62]'>
            <Link to="/get in touch" className='text-nav'>Contact Me</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='flex flex-col md:hidden space-y-2 p-4 bg-white border border-gray-300 rounded-md'>
          <h1>Header</h1>
          <h1>Portfolio</h1>
          <h1>About Me</h1>
          <h1>Testimonials</h1>
          
          <div
           className='border-nav border rounded-md p-2 hover:bg-[#5f3bee62] w-28'>
            <Link to="/get in touch" className='text-nav'>Contact Me</Link>
            
          </div>
        </div>
      )}
    </Wrapper>
    </header>
  );
}

export default Navbar;
