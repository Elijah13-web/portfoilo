import React from 'react'
import star from "../assets/icons/Stars.png"
import face from "../assets/images/Frame 141 (1).png"
import face2 from "../assets/images/Frame 138 (1).png"
import face3 from "../assets/images/Frame 142 (1).png"
import Wrapper from '../components/Wrapper'

const Testimonials = () => {
  return (

<section id="testimonials">
<div className='bg-[#f5fcffce] pb-8 my-14'>
     <Wrapper>
      <div className='pt-12 font-[Roboto] p-2'>
          <div>
            <h2 className='font-bold'>Clients Feedback</h2>
            <h1 className='md:text-4xl text-2xl font-bold py-4'>Customer testimonials</h1>
          </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2  pt-10 gap-5'>
        <div className=' border border-[#006B6A] rounded-md p-5 h-[270px]'>
            <img src={star} alt='star' className='w-24 pb-5'/>
            <p className='text-[#1C1E53] '> Proffessional and efficient service. I find your work to be very well arranged and neat.</p>
           <div className='py-4 flex'>
           <img src={face}alt='face' className='w-24 rounded-3xl' />
         <div className='pt-6 p-4'>
         <h1>Gabriel Isaac</h1>
         </div>
           </div>
          </div>
        <div className=' border border-[#006B6A] rounded-md p-5 h-[270px]'>
            <img src={star} alt='star' className='w-24 pb-5'/>
            <p className='text-[#1C1E53] '> Great exprience from start to finish, proffesional, knowledgeable, and incredibly fast. Thank you for working with me on this ptoject.</p>
           <div className='py-4 flex'>
           <img src={face2}alt='face' className='w-24 rounded-3xl' />
         <div className='pt-6 p-4'>
         <h1>Priscilla John</h1>
         </div>
           </div>
          </div>
        <div className=' border border-[#006B6A] rounded-md p-5 h-[270px]'>
            <img src={star} alt='star' className='w-24 pb-5'/>
            <p className='text-[#1C1E53] '> I am beyond thrilled with the website you created for me. From our initial consultation to the final launch. </p>
           <div className='py-4 flex'>
           <img src={face3}alt='face' className='w-24 rounded-3xl' />
         <div className='pt-6 p-4'>
         <h1>Sara Wilson</h1>
         </div>
           </div>
          </div>
        </div>
      </div>
    </Wrapper>
   </div>
</section>
   
  )
}

export default Testimonials