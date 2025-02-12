import React from 'react';
import FigmaImage from '../images/figma-plugin.png'
import FigmaLogo from '../images/figma-logo.svg'

const Figma = () => {
    return (
        <div className='py-4 px-4 md:px-12 gap-12 my-12 flex flex-col md:flex-row'>
            <div className='bg-[#469ef1] text-zinc-50 rounded-xl flex flex-row w-full gap-10 overflow-hidden'>
                <div className='w-full md:w-1/2'>
                    <div className='bg-zinc-50 rounded-b-lg p-8 ml-8 inline-flex w-fit justify-center items-center'>
                        <img src={FigmaLogo} alt='Figma Plugin' className='w-10' />
                    </div>
                    <div className='p-8'>
                        <h2 className='font-bold text-2xl md:text-3xl 2xl:text-4xl mb-3'>Add Icons to Figma Faster</h2>
                        <p className='mb-7'>The Ecco Icon plugin for Figma is now available. You can quickly add static versions of icons to your designs in Figma for free.</p>
                        <a href='https://www.figma.com/community/plugin/1471483563691391264/ecco-icon' target='_blank' className='text-zinc-800 bg-zinc-50 px-5 py-2 rounded-md text-base hover:px-6 duration-500 inline-block'>Get the Plugin</a>
                    </div>
                </div>
                <div className='relative w-1/2 h-full overflow-hidden hidden md:block'>
                    <div className='bg-gradient-to-r from-[#469ef1] to-[#469ef100] w-2/5 h-full absolute top-0 left-0 z-10' />
                    <img src={FigmaImage} className='w-full h-full object-cover' />
                </div>
            </div>
        </div>

    );
};

export default Figma;