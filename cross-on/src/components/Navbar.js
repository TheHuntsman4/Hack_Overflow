import React from 'react'

const Navbar = () => {
    return (
        <nav className='top-0 sticky z-10 bg-[#101010] opacity-90'>
            <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 class="text-3xl font-medium text-white">
                    <a href="#hero">Logo</a>
                </h1>
                <div>
                    <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav class="hidden sm:block space-x-8 text-xl" aria-label="main">
                        <a href="http:#rockets" class="hover:opacity-90 text-white">Profiles</a>
                        <a href="http:#testimonials" class="hover:opacity-90 text-white">Businesses</a>
                        <a href="http:#contact" class="hover:opacity-90 text-white">Sign in</a>
                        <button className='text-sm h-10 text-white border border-white p-2'>Sign Up</button>
                    </nav>
                </div>
            </section>
        </nav>
    )
}

export default Navbar