import React from 'react'
import Wrapper from '../components/Wrapper'
import git from "../assets/icons/mdi_github.png"
import dash from "../assets/images/Dashboard.png"

const Portfolio = () => {
  return (
   <Wrapper>
     <div>
       <div className="">
      <h2 className='font-bold text-center md:text-start'>Recent Projects</h2>
      <div className='flex justify-between flex-col md:flex-row'>
      <h1 className='text-[#282938] font-[Roboto] text-4xl font-bold text-center py-2'>My Portfoilo</h1>
      <button className='border rounded-xl bg-nav px-2 flex mx-auto'>
        <img src={git} alt='hub' className='  py-3'/>
        <h2 className='text-white py-3 text-xl '>visit My GitHub</h2>
      </button>
      </div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-3'>
      <div className='border rounded-xl p-2 '>
        <img src={dash} alt='dash' className='w-[404.67px] h-[300px] py-2'/>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, odio reiciendis iste et atque distinctio delectus. Asperiores nemo incidunt, nesciunt ad voluptas esse necessitatibus nam possimus similique laboriosam molestiae maiores!</p>
        <h1 className='font-bold text-xl'>View Website</h1>
      </div>
    </div>
    </div>
   </Wrapper>
  )
}

export default Portfolio
