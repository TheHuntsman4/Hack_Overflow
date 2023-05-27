import React from 'react'
import Navbar from './Navbar'

const BusinessPage = () => {
    const projectsList = [{"name":"bla", "website":"https://youtube.com"}, {"name":"bla", "website":"https://youtube.com"}, {"name":"bla", "website":"https://youtube.com"}]
  return (
    <html className='bg-[#101010]'>
        <body>
            <nav className='top-0 sticky z-10 bg-[#101010] opacity-90'>
                <Navbar/>
            </nav>
            <main className='max-w-4xl mx-auto'>
                <div className='my-11 w-[900px]'>
                    <BusinessCard />
                </div>
                <div className='h-10'/>
                <div className='flex'>
                    <Overview/>
                    <div className='mx-5'/>
                    <Projects projects={projectsList}/>
                </div>
            </main>
        </body>
    </html>
  )
}

export default BusinessPage


const BusinessCard = () => {
    return (
        <section className='bg-[#212121] rounded-[20px]'>
            
            <div className='bg-[#2ab73a] h-[113px] rounded-t-[20px] opacity-70'></div>
            
            <div className='relative'>
                <img className='z-0 mx-10 mt-[-45px] rounded-[25px]' src="https://media.licdn.com/dms/image/C4D0BAQFPP1NRP4F5dQ/company-logo_200_200/0/1656657976685?e=1693440000&v=beta&t=9c6CRR6r54CdMf6KH7VPokyFI77hfRxsi7-JP-FFLlI" alt='Profile_pic'/>
            </div>
            <div className='mx-10'>
                <div className='text-white text-4xl my-2 font-bold'>
                    Tata Consultancy Services
                </div>
                <div className='text-white text-xl'>
                    Building on belief
                </div>
                <div className='text-white text-[15px] opacity-50'>
                    IT Services and IT Consulting
                </div>
                <div className='text-white text-[15px] opacity-50'>
                    Mumbai, Maharashtra
                </div>
                <div>
                    <button className='text-black mt-5 mx-auto p-4 bg-white rounded-full'>
                        <a target='_blank' href="https://www.tcs.com">Visit website</a>
                    </button>
                </div>
            </div>
            <div className='h-10'/>
            <div className='bg-[#2ab73a] h-[100px] rounded-b-[20px] opacity-70'></div>
        </section>
    )
}

const Overview = () => {
    return(
        <section className='bg-[#212121] rounded-[20px] p-10 mb-20 '>
            <div className='text-white font-bold mx-10 text-xl'>
                Overview
            </div>
            <div className='text-white mx-10 mb-10 mt-5'>
            A purpose-led organization that is building a meaningful future through innovation, technology, and collective knowledge. We're #BuildingOnBelief.

A part of the Tata group, India's largest multinational business group, TCS has over 500,000 of the world’s best-trained consultants in 46 countries. The company generated consolidated revenues of US $22.2 billion in the fiscal year ended March 31, 2021, and is listed on the BSE (formerly Bombay Stock Exchange) and the NSE (National Stock Exchange) in India. 

TCS' proactive stance on climate change and award-winning work with communities across the world have earned it a place in leading sustainability indices such as the MSCI Global Sustainability Index and the FTSE4Good Emerging Index. 

For more information, visit us at the link below 

*Caution against fraudulent job offers*: TCS doesn't charge any fee throughout the recruitment process. Refer here: on.tcs.com/3i9X5BU
            </div>
            <div className='text-white font-bold mx-10'>
                Website
            </div>
            <div className='text-white mx-10'>
                <a href="https://www.tcs.com" target="_blank">https://www.tcs.com/</a>
            </div>
            <div className='text-white font-bold mx-10'>
                Industry
            </div>
            <div className='text-white mx-10'>
                IT Services and IT Consulting
            </div>
            <div className='text-white mx-10 font-bold'>
                Company Size
            </div>
            <div className='text-white mx-10'>
                10,000+ employees      
                559,454 on Linkedin
            </div>
            <div className='text-white mx-10 font-bold'>
                Specialties
            </div>
            <div className='text-white mx-10'>
                IT Services, Business Solutions, and Consulting
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