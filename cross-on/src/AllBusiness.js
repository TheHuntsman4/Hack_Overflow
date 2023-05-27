import React from 'react'
import Navbar from './components/Navbar.js'
const AllBusiness = () => {
    const businessList = [{"name":"bla", "username":"boobs","website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}, {"name":"bla", "username":"boobs", "website":"https://youtube.com", "categories":['Space', 'IT']}]
  return (
    <body className='max-w-4xl mx-auto'>
        <div>
            <Navbar dispNav={false}/>
        </div>
        <div className='mt-40 flex justify-center'>
            <input type="text" placeholder="Search" className='rounded-full w-1/2 h-11 p-5'/>
        </div>
        <div className='mt-10'>
            <Businesses businesses={businessList}/>
        </div>
    </body>
  )
}

export default AllBusiness


const Businesses = ({businesses}) => {
    return (
        <div className='flex justify-center space-x-10 grid grid-cols-4'>
            {businesses.map((business) => {
                return (
                <div className='ml-10'>
                    <BusiCard categories={business} />
                </div>
                )
            })
    }
        </div>
    )
}

const BusiCard = ({categories}) => {
    return (
            <>
              <div className='flex py-[2rem]'>
                <div className='w-auto h-auto bg-[#2B2727] mx-auto my-auto rounded-2xl overflow-hidden'>
                  <div className=''>
                    <img className='top-0 z-10 bg-green-600 w-full' alt='' />
                  </div>
                  <div className='relative'>
                    <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' alt='Profile_pic' />
                  </div>
                  <div className='flex-col'>
                    <h1 className='text-center text-[2rem] font-main font-bold mt-[12px] text-white'>{categories["name"]}</h1>
                    <h2 className='text-center font-main text-[1rem] mt-[12px] text-[#6B7082]'>@{categories["username"]}</h2>
                    <div className='flex flex-wrap justify-center gap-2= p-[2rem]'>
                      {categories["categories"].map((category) => {
                        return (
                            <>
                          <p key={category} className='bg-[#2e3349] text-white rounded-full px-4 py-2 text-sm font-main'>
                            {category}
                          </p>
                          </>
                        );
                      })}
        
                      </div>
                    </div>
                  </div>
                </div>
            </>
          )
}