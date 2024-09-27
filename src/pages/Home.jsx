import React from 'react'
import Wrapper from '../components/Wrapper'
import face from "../assets/images/elijah.jpg"


const Home = () => {
  return (
   <div className='bg-[#f5fcffce] '>
    <Wrapper>
    <div className='flex flex-col lg:flex-row gap-10 py-8'>
      <div className='bottom-24 top-28 lg:py-20 p-6'>
        <h1 className='text-2xl font-semibold text-center md:text-start'> HELLO, I AM <br/> ELIJAH AJIBOYE</h1>
        <p className='text-center md:text-start my-2'>A fullstack Software Developer.</p>
        <h1 className='md:text-4xl text-2xl font-bold text-center md:text-start'>I develop dynamic and User-Centered Web  Applications.</h1>
        <p className='py-3 text-[#1C1E53] lg:w-[700px] text-center md:text-start w-full '>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
        <div className='bg-nav lg:w-28 rounded-xl hover:border py-2 text-center justify-center lg:justify-between'>
        <div className=' text-[#FFFFFF] '>Get in Touch</div>
      </div>
      </div>
      <div>
        <div className='lg:m-10'>
          <img src={face} alt='elijah' className='lg:w-[800px] h-[400px] w-full rounded-3xl '/>
        </div>
      </div>
     </div>
    </Wrapper>
   </div>
  )
}

export default Home