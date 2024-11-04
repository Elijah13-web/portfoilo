import React from 'react'
import Wrapper from '../components/Wrapper'
import face from "../assets/images/elijah.jpg"

const AboutMe = () => {
  return (
    <Wrapper>
    
<section id="about">
<div className='py-10'>
<div className=' flex flex-col md:flex-row gap-10 '>
<div className=''>
    <img src={face} alt='elijah' className='lg:w-[600px] lg:h-[380px] w-full md:h-[300px] md:w-[350px] rounded-3xl '/>
  </div>
  <div className='md:my-24 text-center md:text-start'>
    <h1 className='text-2xl font-bold'>About Me </h1>
    <p className='text-[#1C1E53] font-[Roboto] lg:w-[600px] md:w-[400px]'>My name is Elijah Ajiboye. <b/> <b>I am a Full-stack Developer</b>, a ptoduct of Tech studio academy, and i have been a full stack developer for more than six months now . </p>
  </div>
</div>
</div>
</section>
    </Wrapper>
  )
}

export default AboutMe
