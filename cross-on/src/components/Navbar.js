import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


const Navbar = ({dispNav}) => {
    
    function Search() {
        console.log('Search');
    }

    return (
        <nav className='top-0 sticky z-10 bg-[#101010] opacity-90'>
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-white">
                    <a href="#hero">Logo</a>
                </h1>
                { dispNav &&
                    <div className='flex'>
                        <input type='text' placeholder='Search' className='p-5 rounded-l-[360px] h-11 w-96 sm:w-60 '/>
                        <button onClick={Search} className='h-11 w-16 bg-[#212121] rounded-r-[360px] flex justify-center items-center'><span className='text-white text-2xl'><AiOutlineSearch/></span></button>
                    </div>
                }
                <div>
                    <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                        <a href="http:#rockets" className="hover:opacity-90 text-white">Profiles</a>
                        <a href="http:#testimonials" className="hover:opacity-90 text-white">Businesses</a>
                        <a href="http:#contact" className="hover:opacity-90 text-white">Sign in</a>
                        <button className='text-sm h-10 text-white border border-white p-2'>Sign Up</button>
                    </nav>
                </div>
            </section>
        </nav>
    )
}

export default Navbar