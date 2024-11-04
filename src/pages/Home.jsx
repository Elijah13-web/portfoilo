import React from 'react';
import Wrapper from '../components/Wrapper';
import face from "../assets/images/elijah.jpg";

const Home = () => {
  return (
    <div className='pt-20 pb-10 bg-[#F5FCFF]'>
      <Wrapper>
      <section id="home">
      <div className='flex flex-col md:flex-row gap-20'>  
<div className=' flex flex-col lg:flex-row gap-10 '>
    <div className='md:py-20 text-black  '>
      <h1 className='text-2xl font-semibold text-center md:text-start'>
        Hey, I am Elijah
      </h1>
      <p className='text-center md:text-start my-2'>A fullstack Software Developer.</p>
      <h1 className='lg:text-5xl text-2xl font-bold text-center md:text-start lg:w-[600px] '>
        I develop dynamic and User-Centered Web Applications.
      </h1>
      <p className='py-3 lg:w-[500px] text-center md:text-start w-full'>
        My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.
      </p>
      <div className='bg-nav md:w-28 rounded-xl hover:border py-2 text-center justify-center lg:justify-between'>
        <div className=' text-[#FFFFFF] '>Get in Touch</div>
      </div>
    </div>
  </div>

  <div className='md:py-12'>
    <img src={face} alt='face' className='w-[600px] h-[350px] rounded-3xl'/>
  </div>

</div> 
</section>

      </Wrapper>
    </div>
  );
};

export default Home;
