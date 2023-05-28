import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import isometric from '../components/images/isometric.jpg';
import {Footer} from '../components';
import webdev from './assets/code-1115-svgrepo-com.svg';
import devops from './assets/dev-ops-solid-svgrepo-com.svg';
import ai from './assets/artificial-brain-computer-svgrepo-com.svg';
import desktop from './assets/computer-monitor-svgrepo-com.svg';
import android from './assets/android-svgrepo-com.svg';
import ios from './assets/ios-svgrepo-com.svg';
import graphic from './assets/graphic-design-book-svgrepo-com.svg';
import flutter from './assets/flutter-svgrepo-com.svg';
import logo from './assets/logo1.svg';

const Landing = () => {
    function Search(){
        console.log("Search")
    };
  return (
    <>
    <nav className='top-0 z-10 bg-[#101010] opacity-90'>
            <section className="w-full p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-white">
                    <a href="#hero"><img src={logo} className= 'h-[5%] w-[20%]'></img></a>
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

    <div class="flex h-[75vh] justify-center">
        <div class="w-full h-full bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
            <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                    <span class="text-white text-4xl w-1/2 text-center">Fueling Alumni Entrepreneurship, Igniting Success</span>
            </div>
        </div>
    </div>
    <div className='text-center text-white p-[4rem] text-[3rem]'>WHY US?</div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-[#101010]'>
            <img src={isometric}></img>
        </div>
        <div className='bg-[#101010] text-white text-[2rem] p-[2rem] '>
        Discover a dynamic community where graduates evolve into industry disruptors, pioneering new solutions and shaping the future of entrepreneurship.
        <div className='my-[5rem]'></div>
        Embark on a transformative journey, where alumni entrepreneurs unleash their creativity, passion, and knowledge to make a lasting impact on the business landscape.
        </div>
    </div>
    <div className='text-center text-white p-[4rem] text-[3rem] '>FEATURED STARTUPS</div>
    <div className='grid grid-cols-1 gap-[1.5rem] md:grid-cols-3 h-[25vh] bg-no-repeat '>  
        <div className='flex flex-col bg-[#212121] rounded-md p-[2rem]'>
            <div className='bg-[url("https://ksofttechnologies.com/wp-content/uploads/2018/11/airbnb.png")] bg-no-repeat object-fill h-[75%] rounded-md'></div>
                <div className='text-white p-[1rem]'>this is a fearured startup</div>
        </div>
        <div className='flex flex-col bg-[#212121] rounded-md p-[2rem]'>
            <div className='bg-[url("https://ksofttechnologies.com/wp-content/uploads/2018/11/airbnb.png")] bg-no-repeat object-fill h-[75%] rounded-md'></div>
                <div className='text-white p-[1rem]'>this is a fearured startup</div>
        </div>
        <div className='flex flex-col bg-[#212121] rounded-md p-[2rem]'>
            <div className='bg-[url("https://ksofttechnologies.com/wp-content/uploads/2018/11/airbnb.png")] bg-no-repeat object-fill h-[75%] rounded-md'></div>
                <div className='text-white p-[1rem]'>this is a fearured startup</div>
        </div>
    </div>

    <div className='text-center mt-[14rem] text-white p-[4rem] text-[3rem] md:mt-0'>EXPLORE</div>
    
    <div className='mx-1/2 grid grid-cols-1 text-white gap-[1.5rem] justify-center items-center md:grid-cols-4 mb-[14rem]'>
        <div className='flex flex-col justify-center items-center'>
            <img src={webdev} className='h-[5rem] w-[5rem] justify-center items-center'></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"WEB-DEV"}</p>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <img src={devops} className='h-[5rem] w-[5rem] justify-center items-center'></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"DEV-OPS"}</p>
        </div>
        
        <div className='flex flex-col justify-center items-center '>
            <img src={ai} className='h-[5rem] w-[5rem] justify-center items-center'></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"AI/ML"}</p>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <img src={flutter} className='h-[5rem] w-[5rem] justify-center items-center'></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"FLUTTER"}</p>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <img src={android} className='h-[5rem] w-[5rem] '></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"ANDROID"}</p>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <img src={ios} className='h-[5rem] w-[5rem] justify-center items-center'></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"iOS"}</p>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <img src={desktop} className='h-[5rem] w-[5rem] '></img>
            <p className='text-[#2ab73a] p-[1rem]  font-semibold'>{"DESKTOP DEV"}</p>
        </div>
        <div className='flex flex-col justify-center items-center '>
            <img src={graphic} className='h-[5rem] w-[5rem] '></img>
            <p className='text-[#2ab73a] p-[1rem] font-semibold'>{"GRAPHIC DESIGN"}</p>
        </div>
    </div>

    <Footer />
</>
  )
}

export default Landing

