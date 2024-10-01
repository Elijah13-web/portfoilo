import React from 'react';
import Wrapper from '../components/Wrapper';
import face from "../assets/images/elijah.jpg";

const Home = () => {
  return (
    <div className='pt-10'>
      <Wrapper>
        {/* Background image with reduced opacity */}
        <div 
          className='relative  gap-10 md:pt-64 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${face})`, opacity: 0.9 }}
        >
          {/* Overlay that contains text */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional dark overlay for better text readability */}
          <div className='relative z-10 flex flex-col lg:flex-row gap-10 '>
            <div className='bottom-24 top-28 lg:py-20 p-10 text-white '>
              <h1 className='text-2xl font-semibold text-center md:text-start'>
                HELLO, I AM <br /> ELIJAH AJIBOYE
              </h1>
              <p className='text-center md:text-start my-2'>A fullstack Software Developer.</p>
              <h1 className='md:text-4xl text-2xl font-bold text-center md:text-start'>
                I develop dynamic and User-Centered Web Applications.
              </h1>
              <p className='py-3 lg:w-[700px] text-center md:text-start w-full'>
                My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.
              </p>
              <div className='bg-nav lg:w-28 rounded-xl hover:border py-2 text-center justify-center lg:justify-between'>
                <div className=' text-[#FFFFFF] '>Get in Touch</div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
