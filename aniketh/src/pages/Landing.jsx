import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


const Landing = () => {

  return (
    <>
    <nav className='top-0 sticky z-10 bg-[#101010] opacity-90'>
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-white">
                    <a href="#hero">Logo</a>
                </h1>
                <div className='flex'>
                    <input type='text' className='p-5 rounded-l-[360px] h-11 w-52'/>
                    <button onClick={Search} className='h-11 w-16 bg-[#212121] rounded-r-[360px] flex justify-center items-center'><span className='text-white text-2xl'><AiOutlineSearch/></span></button>
                </div>
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

    <div class="flex h-[100vh] justify-center  flex-col">
        <div class="w-full h-full b0g-[url('https://placekitten.com/1400')] bg-cover bg-center">
            <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                    <span class="text-white text-4xl w-1/2 text-center">Fueling Alumni Entrepreneurship, Igniting Success</span>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-2'>
        <div className='bg-white'>
            skfkfnekngfekmf
        </div>
        <div className='bg-[#101010] text-white text-[2rem] p-[2rem]'>
        Discover a dynamic community where graduates evolve into industry disruptors, pioneering new solutions and shaping the future of entrepreneurship.
        <div className='my-[10rem]'>this is something</div>
        Embark on a transformative journey, where alumni entrepreneurs unleash their creativity, passion, and knowledge to make a lasting impact on the business landscape.
        </div>
    </div>
</>
  )
}

export default Landing
