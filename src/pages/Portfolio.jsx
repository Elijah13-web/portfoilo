import React from 'react'
import Wrapper from '../components/Wrapper'
import git from "../assets/icons/mdi_github (1).png"
import dash from "../assets/images/Dashboard.png"
import home from "../assets/images/Hero section (2).png"
import card from "../assets/images/desktop-design.jpg"
import arrow from "../assets/icons/Vector (15).png"

const Portfolio = () => {
  return (
   <Wrapper>
     
<section id="portfolio">
<div>
       <div className="">
      <h2 className='font-bold text-center md:text-start'>Recent Projects</h2>
      <div className='flex justify-between flex-col md:flex-row'>
      <h1 className='text-[#282938] font-[Roboto] text-4xl font-bold text-center py-2'>My Portfoilo</h1>
      <a href="https://github.com/Elijah13-web" target='_blank' className='hover:border rounded-xl bg-nav  px-2 flex justify-center lg:justify-between'>
        <img src={git} alt='hub' className='  py-3'/>
        <h2 className='text-white py-3 text-xl '>visit My GitHub</h2>
      </a>
      </div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-5 gap-5'>
    
      <div className='border rounded-xl p-2 font-[Roboto]'>
        <img src={home} alt='dash' className='h-[300px] rounded-2xl'/>
        <h1 className='text-2xl font-bold '>Home-pro</h1>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, odio reiciendis iste et atque distinctio delectus. Asperiores nemo incidunt, nesciunt ad voluptas esse necessitatibus nam possimus similique laboriosam molestiae maiores!</p>
        <a href='https://homepro-roan.vercel.app/' className='flex hover:border lg:w-48 hover:bg-slate-100 rounded-xl px-3 justify-center lg:justify-between'>
        <h1 className='font-bold text-xl'>View Website</h1>
        <img src={arrow} alt='arro' className='p-2 py-2'/>
        </a>
      </div>
   
      <div className='border rounded-xl p-2 font-[Roboto]'>
        <img src={dash} alt='dash' className=' w-[440px] h-[300px] rounded-2xl'/>
        <h1 className='text-2xl font-bold '>Dashboard</h1>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, odio reiciendis iste et atque distinctio delectus. Asperiores nemo incidunt, nesciunt ad voluptas esse necessitatibus nam possimus similique laboriosam molestiae maiores!</p>
        <a href='https://homepro-roan.vercel.app/' className='flex hover:border lg:w-48 hover:bg-slate-100 rounded-xl px-3 justify-center lg:justify-between'>
        <h1 className='font-bold text-xl'>View Website</h1>
        <img src={arrow} alt='arro' className='p-2 py-2'/>
        </a>
      </div>
   
      <div className='border rounded-xl p-2 font-[Roboto] '>
        <img src={card} alt='dash' className='h-[300px] rounded-2xl'/>
        <h1 className='text-2xl font-bold'>Card-details</h1>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, odio reiciendis iste et atque distinctio delectus. Asperiores nemo incidunt, nesciunt ad voluptas esse necessitatibus nam possimus similique laboriosam molestiae maiores!</p>
        <a href=' https://card-details-seven.vercel.app/' className='flex hover:border lg:w-48 hover:bg-slate-100 rounded-xl px-3 justify-center lg:justify-between'>
        <h1 className='font-bold text-xl'>View Website</h1>
        <img src={arrow} alt='arro' className='p-2 py-2'/>
        </a>
      </div>
    </div>
   
    </div>
</section>

   </Wrapper>
  )
}

export default Portfolio

