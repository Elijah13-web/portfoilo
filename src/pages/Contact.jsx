import React, { useState } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa'; // Import the check and unchecked icons
import Wrapper from '../components/Wrapper';

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper>
      <div className='py-12 text-[#282938] font-[Roboto]'>
        <div className='text-center '>
          <h2>Get in touch</h2>
          <h1 className='font-bold text-3xl'>Contact me</h1>
          <p className='pt-3'>ajiboyeelijah242@gmail.com</p>
        </div>
        <div className=''>
          <div className='lg:mx-60 pt-6 p-1 mx-auto'>
            <form action="" method="post">
              <div className="flex md:flex-row flex-col lg:gap-10 gap-5">
                <div>
                  <h1>First name</h1>
                  <input
                    type="text"
                    required
                    className="w-[380px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                  />
                </div>
                <div>
                  <h1>Last name</h1>
                  <input
                    type="text"
                    required
                    className="w-[380px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col lg:gap-10 gap-5 py-4">
                <div>
                  <h1>Email</h1>
                  <input
                    type="email"
                    required
                    className="w-[380px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                  />
                </div>
                <div>
                  <h1>Phone number</h1>
                  <input
                    type="text"
                    required
                    maxLength={11}
                    className="w-[380px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                  />
                </div>
              </div>

              <div className='pt-5 '>
                <textarea
                  placeholder="Write your message here"
                  required
                  rows="4"
                  className="lg:w-[780px] w-full pl-5 max-h-56 py-3 border border-gray-800 rounded-lg text-xl"
                />
              </div>

              <div className='w-[200px] pb-4 text-[#282938] flex items-center  cursor-pointer' onClick={handleCheckboxClick}>
                {isChecked ? (
                  <FaCheckSquare className="text-green-500" />
                ) : (
                  <FaRegSquare className="text-gray-500" />
                )}
                <h1 className='px-3'>I accept the terms</h1>
              </div>

              <div className="justify-center">
                <button
                  type="submit"
                  className="lg:w-[800px] w-full p-5 bg-[#5E3BEE] text-white font-semibold rounded-xl hover:bg-[#5f3beee3]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
