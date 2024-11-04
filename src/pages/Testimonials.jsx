import React from 'react'
import star from "../assets/icons/Stars.png"
import face from "../assets/images/Avatar Image.png"
import Wrapper from '../components/Wrapper'

const Testimonials = () => {
  return (

<section id="testimonials">
<div className='bg-[#f5fcffce] pb-8'>
     <Wrapper>
      <div className='pt-12 font-[Roboto] p-2'>
          <div>
            <h2 className='font-bold'>Clients Feedback</h2>
            <h1 className='text-4xl font-bold py-4'>Customer testimonials</h1>
          </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2  pt-10 gap-5'>
        <div className=' border border-[#006B6A] rounded-md p-5'>
            <img src={star} alt='star' className='w-24 pb-5'/>
            <p className='text-[#1C1E53] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis autem, impedit doloremque dolore nulla dolorem distinctio quam totam officiis. Velit consectetur sit sequi ipsum, veritatis beatae. Excepturi quaerat ut nostrum.</p>
           <div className='py-4 flex'>
           <img src={face}alt='face' className='w-20' />
         <div className='pt-6 p-4'>
         <h1>Dianne Russell</h1>
         <h1>Starbucks</h1>
         </div>
           </div>
          </div>
        <div className=' border border-[#006B6A] rounded-md p-5'>
            <img src={star} alt='star' className='w-24 pb-5'/>
            <p className='text-[#1C1E53] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis autem, impedit doloremque dolore nulla dolorem distinctio quam totam officiis. Velit consectetur sit sequi ipsum, veritatis beatae. Excepturi quaerat ut nostrum.</p>
           <div className='py-4 flex'>
           <img src={face}alt='face' className='w-20' />
         <div className='pt-6 p-4'>
         <h1>Dianne Russell</h1>
         <h1>Starbucks</h1>
         </div>
           </div>
          </div>
        <div className=' border border-[#006B6A] rounded-md p-5'>
            <img src={star} alt='star' className='w-24 pb-5'/>
            <p className='text-[#1C1E53] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis autem, impedit doloremque dolore nulla dolorem distinctio quam totam officiis. Velit consectetur sit sequi ipsum, veritatis beatae. Excepturi quaerat ut nostrum.</p>
           <div className='py-4 flex'>
           <img src={face}alt='face' className='w-20' />
         <div className='pt-6 p-4'>
         <h1>Dianne Russell</h1>
         <h1>Starbucks</h1>
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