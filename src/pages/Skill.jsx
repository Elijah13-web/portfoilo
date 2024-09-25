import React from 'react'
import Wrapper from '../components/Wrapper'
import phone from "../assets/icons/icomoon-free_mobile.png"
import branding from "../assets/icons/tag 1.png"
import ui from "../assets/icons/carbon_ibm-engineering-test-mgmt.png"
import webflow from "../assets/icons/feather-pen 1.png"

const Skill = () => {
  return (
   <Wrapper>
     <div className=' py-10'>
        <div className='text-center lg:text-start '>
            <h2 className='my-3'>My Skills</h2>
            <h1 className='font-bold text-2xl'>My Expertise</h1>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='border bg-slate-300 rounded-xl p-5 w-full lg:w-70 2xl:w-80 h-56 hover:bg-slate-100 my-5 text-center lg:text-start'>
                <img src={phone} alt='phone' className='border bg-slate-50 rounded-2xl py-2 p-1 mx-auto'/>
                <h1 className='text-xl 2xl:text-xl font-bold'>Responsive Design</h1>
                <p className=''>what is done is done. My beans ooooo</p>
            </div>
            <div className='border bg-slate-300 rounded-xl p-5 w-full lg:w-70 2xl:w-80 h-56 hover:bg-slate-100 my-5 text-center lg:text-start'>
                <img src={branding} alt='logo' className='border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto '/>
                <h1 className='text-xl 2xl:text-xl font-bold'>Front-End Frameworks</h1>
                <p className=''>what is done is done. My beans ooooo</p>
            </div>
            <div className='border bg-slate-300 rounded-xl p-5 w-full lg:w-70 2xl:w-80 h-56 hover:bg-slate-100 my-5 text-center lg:text-start'>
                <img src={ui} alt='ux' className='border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto'/>
                <h1 className='text-xl 2xl:text-xl font-bold'>Testing and Debugging</h1>
                <p className=''>what is done is done. My beans ooooo</p>
            </div>
            <div className='border bg-slate-300 rounded-xl p-5 w-full lg:w-70 2xl:w-80  h-56 hover:bg-slate-100 my-5 text-center lg:text-start'>
                <img src={webflow} alt='dev' className='border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto'/>
                <h1 className=' text-xl 2xl:text-xl font-bold'>Cloud Services</h1>
                <p className=''>what is done is done. My beans ooooo</p>
            </div>
        </div>
     </div>
   </Wrapper>
  )
}

export default Skill