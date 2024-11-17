import React from 'react'
import logo from "../assets/icons/image 1.png"
import face from "../assets/icons/Facebook.png"
import ig from "../assets/icons/Instagram.png"
import twitter from "../assets/icons/Twitter.png"
import link from "../assets/icons/LinkedIn.png"
import Wrapper from '../components/Wrapper'

const Footer = () => {
  return (
   <div className='bg-slate-300 '> 
    <Wrapper>
     <div className='py-8'>
        <div className='flex md:justify-between text-center flex-col justify-center md:flex-row'>
        <div className='flex items-center justify-center lg:justify-start '>
        <a href='/' className=''>
          <img src={logo} alt='logo' className='w-8 h-7' />
        </a>
        <h1 className='ml-2 font-bold'>ElijahWeb,</h1>
        </div>  
        <div className='md:flex space-x-2 lg:space-x-9'>
          <h1 className='font-bold'>Home</h1>
          <h1 className='font-bold'>My Skills</h1>
          <h1 className='font-bold'>Portfolio</h1>
          <h1 className='font-bold'>About Me</h1> 
          <h1 className='font-bold'>Testimonials</h1>
        </div>
        <div className='flex w-5 md:mx-16 justify-center mx-auto items-center gap-2 pt-5'>
            <img src={face} alt='book'/>
            <img src={ig}alt='ig'/>
            <img src={twitter} alt='twitter'/>
            <img src={link}alt='linkedin'/>
        </div>
        </div>
     </div>
   </Wrapper>

   <div className="w-full bg-inherit border-t border-t-slate-400 text-sm py-6">
        <div className="bg-inherit flex flex-col justify-center items-center">
          <p className="text-center text-sm bg-inherit text-slate-300">
            Copyright&copy;2024&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved.
          </p>
          <small className="text-center text-xs bg-inherit text-slate-400 mt-3">
         
            | Coded by @Elijah
          </small>
        </div>
      </div>

   </div>
   
  )
}

export default Footer