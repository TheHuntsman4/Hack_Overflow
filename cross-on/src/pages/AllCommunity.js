import React from 'react'
import Navbar from '../components/Navbar.js';

const AllCommunity = () => {
  const businessList = [{"id": "1","name":"Lemon Society","website":"https://youtube.com", "categories":['Space', 'IT']}, 
    {"id": "2", "name":"Ice Society", "website":"https://youtube.com", "categories":['Space', 'IT']}, 
    {"id": "3", "name":"Water Society", "website":"https://youtube.com", "categories":['Space', 'IT']}, 
    {"id": "4", "name":"Fire Society", "website":"https://youtube.com", "categories":['Space', 'IT', 'Health Care']}, 
    {"id": "5", "name":"Wind Society", "website":"https://youtube.com", "categories":['Space', 'IT']}, 
    {"id": "6", "name":"Earth Society", "website":"https://youtube.com", "categories":['Space', 'IT']}, 
    {"id": "7", "name":"Plant Society", "website":"https://youtube.com", "categories":['Space', 'IT']}, 
    {"id": "8", "name":"Sky Society", "website":"https://youtube.com", "categories":['Space', 'IT']}
  ]
  return (
    <body className='max-w-4xl mx-auto'>  
        <div>
        <nav className='top-0 md:sticky z-10 bg-[#101010] opacity-90'>
            <section className="w-full p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-white">
                    <a href="#hero">Logo</a>
                </h1>
                <div>
                    <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                        <a href="/profiles" className="hover:opacity-90 text-white">Profiles</a>
                        <a href="/communities" className="hover:opacity-90 text-white">Communities</a>
                        <a href="/business" className="hover:opacity-90 text-white">Businesses</a>
                        <a href="/login" className="hover:opacity-90 text-white">Sign in</a>
                        <a href="/register" className='text-sm h-10 text-white border border-white p-2'>Sign Up</a>
                    </nav>
                </div>
            </section>
        </nav>
        </div>
        <div className='mt-40 flex justify-center'>
            <input type="text" placeholder="Search" className='rounded-full w-1/2 h-11 p-5'/>
        </div>
        <div className='mt-10'>
            <Communities community={businessList}/>
        </div>
    </body>
  )
}

export default AllCommunity

const Communities = ({community}) => {
  function moveToCommunity(id) {
    window.location.href = `/id=${id}`
  }
    return (
        
          <div className='justify-center space-x-10 grid grid-cols-3'>
              {community.map((com) => {
                  return (
                  <button onClick={() => moveToCommunity(com["id"])} className='ml-10'>
                    <div>
                        <CommCard categories={com} />
                    </div>
                  </button>
                  )
                })
              }
          </div>
        
    )
}


const CommCard = ({categories}) => {
  return (
          <>
            <div className='flex py-[2rem]'>
              <div className='w-auto h-auto bg-[#2B2727] mx-auto my-auto rounded-2xl min-h-[250px] min-w-[200px] overflow-hidden p-[11px]'>
                <div className=''>
                </div>
                <div className='relative'>
                  <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={categories["img"]} alt='Profile_pic' />
                </div>
                <div className='flex-col'>
                  <h1 className='text-center text-[2rem] font-main font-bold mt-[12px] text-white'>{categories["name"]}</h1>
                  <div className='flex flex-wrap justify-center gap-2 p-[2rem]'>
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
