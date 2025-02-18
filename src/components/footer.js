import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className='pt-4 md:pt-9 px-4 md:px-12 text-zinc-50'>
            <div className='bg-zinc-800 rounded-t-xl py-7 md:py-16 px-4 md:px-16'> 
                <div className='flex flex-col md:flex-row gap-10 md:gap-12 mb-20'>
                    <div className='w-full md:w-1/3 flex flex-col gap-2'>
                        <h2 className='text-3xl'><b>ECCO</b>ICON</h2>
                        <p className='text-sm md:w-3/4 text-zinc-300'>This is a free personal project created by <a href='https://sajjaddashti.ir/' className='underline' target="_blank">Sajjad Dashti</a> for the creative community, featuring 100+ animated icons made with Lottie and licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' className='underline' target="_blank">Creative Commons Attribution 4.0 International (CC BY 4.0)</a> License.</p>
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col gap-2'>
                        <h2 className='text-lg font-bold mb-1 md:mb-4'>Tutorials and Tools</h2>
                        <Link to='/how-to-use' className='text-zinc-300'>How to Use</Link>
                        <a href='https://airbnb.io/lottie/#/' className='text-zinc-300'>Lottie Docs</a>
                        <a href='https://dotlottie.io/' className='text-zinc-300'>dotLottie</a>
                        <a href='https://developers.lottiefiles.com/docs/' className='text-zinc-300'>LottieFiles Docs</a>
                    </div>

                    <div className='w-full md:w-1/3 flex flex-col gap-2'>
                        <h2 className='text-lg font-bold mb-1 md:mb-4'>About Ecco Icon</h2>
                        <Link to='/about' className='text-zinc-300'>About the Project</Link>
                        <Link to='/how-to-use/#react' className='text-zinc-300'>React Library</Link>
                        <a href='https://www.figma.com/community/plugin/1471483563691391264/ecco-icon' className='text-zinc-300'>Figma Plugin</a>
                        <Link to='/donate' className='text-zinc-300'>Donate</Link>
                        <Link to='/how-to-use/#license' className='text-zinc-300'>License</Link>
                    </div>
                </div>
                <div className='border-t-[1px] border-zinc-50 pt-3 flex justify-between flex-col md:flex-row'>
                    <p className='text-sm'>&copy; 2025 Ecco Icon. All rights reserved.</p>
                    <p className='text-sm'>Made with love for the design community by <a href='https://sajjaddashti.ir/' className='underline'>Sajjad Dashti</a>.</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] w-full h-1' />
        </footer>
    );
};

export default Footer;