import React from 'react'
import Wrapper from '../components/Wrapper'
import face from "../assets/images/elijah.jpg"

const AboutMe = () => {
  return (
    <Wrapper>
      <div className='py-10'>
      <div className='grid md:grid-cols-2 gap-10 '>
      <div className=''>
          <img src={face} alt='elijah' className='lg:w-[700px] h-[400px] w-full rounded-3xl '/>
        </div>
        <div className='md:my-24 text-center md:text-start'>
          <h1 className='text-2xl font-bold'>About Me </h1>
          <p className='text-[#1C1E53] font-[Roboto] size[24px]'>My name is Elijah Ajiboye. <b/> <b>I am a Full-stack Developer</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex exercitationem eligendi libero. Beatae earum, cumque eaque culpa doloremque velit reiciendis quos magni autem vel dolor dolorum temporibus? Unde, accusantium. </p>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

export default AboutMe