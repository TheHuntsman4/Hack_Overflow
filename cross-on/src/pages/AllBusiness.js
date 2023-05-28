import React from 'react'
import Navbar from '../components/Navbar.js'
import BusinessPage from "../components/BusinessPage.js";
import { useEffect,useState } from 'react';
import axios from 'axios';
import logo from './assets/logo1.svg';
import { useNavigate } from 'react-router';

const AllBusiness = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



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
        <div className='flex flex-col justify-center items-center'>
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
  const navigate = useNavigate();

const handleClick = () => {
  // Navigate to a different page
  navigate('/business');
};
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    navigate("/business")
  };
    return (
            <>
              <div className='flex py-[2rem]'>
                <div className='w-[20rem] h-auto bg-[#2B2727] mx-auto my-auto rounded-2xl overflow-hidden p-[3rem] ' onClick={()=>openModal({categories})}>
                {isModalOpen && (
                  
  // Render your modal component or create a custom modal
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4 text-center">
      {/* Modal content */}
      <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={()=>closeModal()}>
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h1>{categories["name"]}</h1>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button href="/business" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
            <a href='/business'>Close</a>
          </button>
        </div>
      </div>
    </div>
  </div>
)}
                  <div className=''>
                  </div>
                  <div className='relative p-[2rem]'>
                    <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={"https://www.digital.ink/wp-content/uploads/airbnb_logo_detail.jpg"} alt='Logo_pic' />
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