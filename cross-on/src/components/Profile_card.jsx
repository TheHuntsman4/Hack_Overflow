
// This is a singular card element which is returned when 
// the user searches for profiles

import React from 'react';
import banner from './images/bg-pattern-card.png';
import pic from './images/image-victor.jpg';

const ProfileCard = ({ domains }) => {
  return (
    <>
      <div className='flex py-[2rem]'>
        <div className='w-auto h-auto bg-[#2B2727] mx-auto my-auto rounded-2xl overflow-hidden'>
          <div className=''>
            <img className='top-0 z-10 bg-green-600 w-full' src={banner} alt='' />
          </div>
          <div className='relative'>
            <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={pic} alt='Profile_pic' />
          </div>
          <div className='flex-col'>
            <h1 className='text-center text-[2rem] font-main font-bold mt-[12px] text-white'>FullName</h1>
            <h2 className='text-center font-main text-[1rem] mt-[12px] text-[#6B7082]'>@username</h2>
            <div className='flex flex-wrap justify-center gap-2 p-[2rem]'>
              {domains.map((domain) => {
                return (
                    <>
                  <p key={domain} className='bg-[#2e3349] text-white rounded-full px-4 py-2 text-sm font-main'>
                    {domain}
                  </p>
                  </>
                );
              })}

              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProfileCard;
