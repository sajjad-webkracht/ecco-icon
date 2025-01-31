import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Hero = () => {



    return (
        <div className="py-4 md:py-9 px-4 md:px-12">
            <div className='flex flex-col items-center gap-3 relative overflow-hidden rounded-xl pt-7 md:pt-12'>
                <h2 className='text-zinc-800 text-base md:text-lg font-bold text-center px-4'>Made for the Community</h2>
                <h1 className='text-zinc-800 text-2xl md:text-4xl font-bold text-center px-4'>Access 95 Free Animated Icons</h1>
                <p className='text-zinc-800 text-base md:w-2/3 text-center px-4'>This is a free personal project designed for the creative community, featuring 95 animated icons made with Lottie. It will always remain free, but your support through donations would greatly help sustain the service and expand the icon pack.</p>
                <Link to='/explore' className='text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
                    Explore Icons Now
                    <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1]' />
                </Link>
                <div className='items-end flex mt-8'>
                    <DotLottieReact
                        src='/icons/UI/hero_loop.lottie'
                        autoplay
                        loop
                        className='w-[160vw] h-[25vw] md:w-[96vw] md:h-[15vw]'
                    />
                </div>
                <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#ffffff] to-[#ffffff00] -z-10' />
                <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#eeebfb] via-[#ebf2fb] to-[#dff3f9] -z-20' />

            </div>
        </div>
    );
};

export default Hero;