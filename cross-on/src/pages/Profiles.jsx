// This is the layout for the Profile search reuslts
import {React, useEffect,useState} from 'react'
import { Profile_Card } from '../components'
import axios from 'axios';
import logo from "./assets/logo1.svg"

const Profiles = () => {
  const[Profiles,setProfiles]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get("http://django.biscuitbobby.me/getusers/")
        console.log(response.data);
        setProfiles(response.data);
      }catch(error){  
        console.error("Ooga Booga Something Went Wrong");
      }
    };
    fetchData();
  },[]);


  return (
    <>
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
      <div className='grid grid-cols-2 gap-[1.5rem] md:grid-cols-4'>
        
      {Profiles.map((Profile,index)=>{
        return(
            <Profile_Card key={index} domain={Profile["domain"]} username={Profile["username"]} email={Profile["email"]}  />
        )
      })}
    </div>
    </>
  )
        

}

export default Profiles
