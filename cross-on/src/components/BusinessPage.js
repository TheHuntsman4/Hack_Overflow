import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const BusinessPage = ({Business}) => {

  return (
        <body>
            <nav className='top-0 sticky z-10 bg-[#101010] opacity-90'>
                <Navbar dispNav={true}/>
            </nav>
            <main className='max-w-4xl mx-auto'>

                <div className='my-11 w-[900px]'>
                    <BusinessCard Business={Business}/>
                </div>
                <div className='h-10'/>
                <div className='flex'>
                    <Overview Overview={Business} />
                    <div className='mx-5'/>
                    <Projects projects={Business}/>
                </div>
            </main>
        </body>
  )
}

export default BusinessPage


const BusinessCard = ({Business}) => {
    return (
        <section className='bg-[#212121] rounded-[20px]'>
            
            <div className='bg-[#2ab73a] h-[113px] rounded-t-[20px] opacity-70'></div>
            
            <div className='relative'>
                <img className='z-0 mx-10 mt-[-45px] rounded-[25px]' src="https://media.licdn.com/dms/image/C4D0BAQFPP1NRP4F5dQ/company-logo_200_200/0/1656657976685?e=1693440000&v=beta&t=9c6CRR6r54CdMf6KH7VPokyFI77hfRxsi7-JP-FFLlI" alt='Profile_pic'/>
            </div>
            <div className='mx-10'>
                <div className='text-white text-4xl my-2 font-bold'>
                    Business["name"]
                </div>
                <div className='text-white text-xl'>
                    Business["motto"]
                </div>
                <div className='text-white text-[15px] opacity-50'>
                    Business["industry"]
                </div>
                <div className='text-white text-[15px] opacity-50'>
                    Business['headquarters']
                </div>
                <div>
                    <button className='text-black mt-5 mx-auto p-4 bg-white rounded-full'>
                        <a target='_blank' href={Business["websitelink"]}>Visit website</a>
                    </button>
                </div>
            </div>
            <div className='h-10'/>
            <div className='bg-[#2ab73a] h-[100px] rounded-b-[20px] opacity-70'></div>
        </section>
    )
}

const Overview = ({Business}) => {
    return(
        <section className='bg-[#212121] rounded-[20px] p-10 mb-20 '>
            <div className='text-white font-bold mx-10 text-xl'>
                Overview
            </div>
            <div className='text-white mx-10 mb-10 mt-5'>
            Business["about"]
            </div>
            <div className='text-white font-bold mx-10'>
                Website
            </div>
            <div className='text-white mx-10'>
                <a href={Business["websitelink"]} target="_blank">Business["websitelink"]</a>
            </div>
            <div className='text-white font-bold mx-10'>
                Industry
            </div>
            <div className='text-white mx-10'>
                Business["industry"]
            </div>
            <div className='text-white mx-10 font-bold'>
                Company Size
            </div>
            <div className='text-white mx-10'>
                Business["size"]
            </div>
            <div className='text-white mx-10 font-bold'>
                Specialties
            </div>
            <div className='text-white mx-10'>
                Business["specialties"]
            </div>

        </section>
    )
}


const Projects = ({projects}) => { 
    return (
        <section className='bg-[#212121] rounded-[20px] p-10 mb-20'>
            <div className='text-white font-bold mx-10 text-xl'>
                Projects
            </div>
            <div className='my-10'>
                {
                    projects.map((project) => {
                            return (
                                <ProjectCard project={project}/>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}


const ProjectCard = ({project}) => {
    return (
        <a href={project["website"]} target="_blank">
            <div className='bg-[#2F2F2F] rounded-[20px] p-5 my-3 w-[350px] h-[150px] text-xl text-white'>
                {project["name"]}
            </div>
        </a>
    )
}