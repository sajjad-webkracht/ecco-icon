import React from 'react';
import { Link } from 'gatsby';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const How = () => {
    return (
        <div className='pb-4 md:py-16 px-4 md:px-12 text-zinc-800 mb-12'>
            <div className='rounded-xl flex gap-4 md:gap-12 flex-col md:flex-row-reverse items-center'>
                <div className='w-full md:w-2/5 my-8'>
                    <h1 className='text-2xl font-bold mb-2'><span className='text-ao'>Animated Icons</span> In Your Projects</h1>
                    <p className='mb-7 text-zinc-600'>Discover how to seamlessly incorporate these animated icons into any of your projects—whether it’s a website, an Android app, or an iPhone app. Effortlessly integrate SVG-based animations with ease.</p>
                    <Link to='/how-to-use' className='text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
                        How It Works
                        <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1] rounded-md' />
                    </Link>
                </div>
                <div className='w-full md:w-3/5 flex gap-4 flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 overflow-hidden rounded-xl h-72 md:h-full from-[#eeebfb] via-[#ebf2fb] to-[#dff3f9] bg-gradient-to-t flex justify-center items-end drop-shadow-sm'>
                        <DotLottieReact
                            src='/icons/UI/website.lottie'
                            autoplay
                            loop
                            className='w-[96vw] h-[80vw] md:w-[27vw] md:h-[22.5vw]'
                        />
                    </div>
                    <div className='w-full md:w-1/2 overflow-hidden rounded-xl h-72 md:h-full from-[#eeebfb] via-[#ebf2fb] to-[#dff3f9] bg-gradient-to-b md:mt-4 flex justify-center items-end drop-shadow-sm'>
                        <DotLottieReact
                            src='/icons/UI/phone-app.lottie'
                            autoplay
                            loop
                            className='w-[96vw] h-[80vw] md:w-[27vw] md:h-[22.5vw]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default How;