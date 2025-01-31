import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <header className='py-4 px-4 md:px-12 flex justify-between items-center'>
            <div className='hidden md:flex md:w-1/3 gap-7 items-center'>
                <Link to='/how-to-use' className='text-zinc-800 text-base relative group'>How to Use
                <span className="absolute left-0 bottom-0 w-0 h-0.5 rounded-md bg-gradient-to-r from-[#69bbeb] to-[#d7defa] transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link to='/about' className='text-zinc-800 text-base relative group'>About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 rounded-md bg-gradient-to-r from-[#69bbeb] to-[#d7defa] transition-all duration-500 group-hover:w-full"></span>
                </Link>
            </div>
            <div className='md:w-1/3 flex justify-center items-center'>
                <Link to='/' className='text-zinc-800 text-lg hover:tracking-wider duration-700'><b>ECCO</b>ICON</Link>
            </div>
            <div className='hidden md:flex md:w-1/3 justify-end'> 
                <Link to='/donate' className='text-zinc-50 bg-zinc-800 hover:bg-opacity-0 px-5 py-2 rounded-md text-base hover:px-6 duration-500 relative overflow-hidden'>Donate
                    <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-10' />
                </Link>
            </div>

            <button className='md:hidden flex flex-col items-center gap-1' onClick={toggleMenu}>
                <div className='w-4 h-[2px] bg-zinc-800' />
                <div className='w-4 h-[2px] bg-zinc-800' />
                <div className='w-4 h-[2px] bg-zinc-800' />
            </button>

            <div
                className={`fixed z-30 top-0 right-0 h-full w-full p-4 pr-0 bg-gradient-to-b from-[#efecfb] via-[#e9f2fa] to-[#dff3f9] transform transition-transform duration-500 flex-col flex gap-4 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button className="w-full bg-zinc-50 rounded-l-lg py-2 px-2" onClick={toggleMenu}>
                    <svg className="w-6 h-6 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <div className='bg-slate-50 h-full w-full rounded-l-lg p-4 flex flex-col gap-4 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <Link to='/how-to-use' className='text-zinc-800 text-base'>How to Use</Link>
                        <Link to='/about' className='text-zinc-800 text-base'>About</Link>
                        <Link to='/about' className='text-zinc-800 text-base'>Donate</Link>
                    </div>
                    <div>
                        <span className='text-zinc-500 text-sm'>
                            Created by <a href='https://sajjaddashti.ir' className='underline'>Sajjad Dashti</a>. Licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' className='underline'>under the Creative Commons Attribution 4.0 International (CC BY 4.0)</a>.
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;