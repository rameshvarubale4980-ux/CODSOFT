import React from 'react';
import { FaEnvelopeOpenText } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className='space-y-8'>
      {/* First Section */}
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>
        <p className='text-primary/75 text-base mb-4'>
          Ut esse eiusmod aute. Sit enim labore dolor. Aute ea fugiat commodo ea foes
        </p>
        <div className='w-full space-y-4'>
          <input 
            type='email' 
            name='emailJobs' 
            placeholder='Email@gmail.com' 
            className='w-full block py-2 pl-3 border focus:outline-none rounded-sm'
          />
          <input  
            type='submit' 
            value="Subscribe" 
            className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'
          />
        </div>
      </div>

      {/* Second Section */}
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText />
          Get notice faster
        </h3>
        <p className='text-primary/75 text-base mb-4'>
          Ut esse eiusmod aute. Sit enim labore dolor. Aute ea fugiat commodo ea foes
        </p>
        <div className='w-full space-y-4'>

          <input  
            type='submit' 
            value="Upload your resume" 
            className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'
          />
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
