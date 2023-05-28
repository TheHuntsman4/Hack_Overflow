import React from 'react'
import Navbar from '../components/Navbar.js'
import BusinessPage from '../components/BusinessPage.js'
import { useEffect,useState } from 'react';
import axios from 'axios';
import logo from './assets/logo1.svg';

const AllBusiness = () => {

  const[Business,setBusiness]=useState([])
  
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get("http://django.biscuitbobby.me/getbuisness/")
        console.log(response.data);
        setBusiness(response.data);
      }catch(error){  
        console.error("Ooga Booga Something Went Wrong");
      }
    };
    fetchData();
  },[]);

  function moveToBusiness(id) {
    window.location.href = `#/id=${id}`
  }
   
  return (
    <body>
        <div>
        <nav className='top-0 z-10 bg-[#101010] opacity-90'>
            <section className="w-full p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-white">
                    <a href="/"><img src={logo} className= 'h-[5%] w-[20%]'></img></a>
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
           {Business.map((business,index) => {
            return (
              <button onClick={() => moveToBusiness(index)} className='ml-10'>
              <div>
                  <BusiCard categories={business} />
              </div>
            </button>
            )
           })}
        </div>
    </body>
  )
}

export default AllBusiness



const BusiCard = ({categories}) => {
    return (
            <>
              <div className='flex py-[2rem]'>
                <div className='w-auto h-auto bg-[#2B2727] mx-auto my-auto rounded-2xl overflow-hidden'>
                  <div className=''>
                  </div>
                  <div className='relative'>
                    <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={categories["pfp"]} alt='Profile_pic' />
                  </div>
                  <div className='flex-col'>
                    <h1 className='text-center text-[2rem] font-main font-bold mt-[12px] text-white'>{categories["name"]}</h1>
                    {/* <h2 className='text-center font-main text-[1rem] mt-[12px] text-[#6B7082]'>@{categories["username"]}</h2> */}
                    <div className='flex flex-wrap justify-center gap-2= p-[2rem]'>
                     
        
                      </div>
                    </div>
                  </div>
                </div>
            </>
          )
}