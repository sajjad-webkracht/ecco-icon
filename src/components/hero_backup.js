import React, { useEffect, useRef } from 'react';
import icon1 from '../images/icons/1.svg';
import icon2 from '../images/icons/2.svg';
import icon3 from '../images/icons/3.svg';
import icon4 from '../images/icons/4.svg';
import icon5 from '../images/icons/5.svg';
import icon6 from '../images/icons/6.svg';
import icon7 from '../images/icons/7.svg';
import icon8 from '../images/icons/8.svg';
import icon9 from '../images/icons/9.svg';
import icon10 from '../images/icons/10.svg';
import icon11 from '../images/icons/11.svg';
import icon12 from '../images/icons/12.svg';
import icon13 from '../images/icons/13.svg';
import icon14 from '../images/icons/14.svg';
import icon15 from '../images/icons/15.svg';
import icon16 from '../images/icons/16.svg';
import icon17 from '../images/icons/17.svg';
import icon18 from '../images/icons/18.svg';
import icon19 from '../images/icons/19.svg';
import icon20 from '../images/icons/20.svg';
import icon21 from '../images/icons/21.svg';
import icon22 from '../images/icons/22.svg';
import icon23 from '../images/icons/23.svg';
import icon24 from '../images/icons/24.svg';
import icon25 from '../images/icons/25.svg';
import icon26 from '../images/icons/26.svg';
import icon27 from '../images/icons/27.svg';
import icon28 from '../images/icons/28.svg';
import icon29 from '../images/icons/29.svg';
import icon30 from '../images/icons/30.svg';
import icon31 from '../images/icons/31.svg';
import icon32 from '../images/icons/32.svg';
import icon33 from '../images/icons/33.svg';
import icon34 from '../images/icons/34.svg';
import icon35 from '../images/icons/35.svg';
import icon36 from '../images/icons/36.svg';
import icon37 from '../images/icons/37.svg';
import icon38 from '../images/icons/38.svg';
import icon39 from '../images/icons/39.svg';
import icon40 from '../images/icons/40.svg';
import icon41 from '../images/icons/41.svg';
import icon42 from '../images/icons/42.svg';
import { Link } from 'gatsby';

const Hero = () => {
    const logosRef1 = useRef(null);

    useEffect(() => {
        const div = logosRef1.current;
        div.insertAdjacentHTML('afterend', div.outerHTML);
        div.nextSibling.setAttribute('aria-hidden', 'true');
    }, []);

    const logosRef2 = useRef(null);

    useEffect(() => {
        const div = logosRef2.current;
        div.insertAdjacentHTML('afterend', div.outerHTML);
        div.nextSibling.setAttribute('aria-hidden', 'true');
    }, []);


    return (
        <div className="py-4 md:py-9 px-4 md:px-12">
            <div className='flex flex-col items-center gap-3 relative overflow-hidden rounded-xl py-7 md:py-12'>
                <h2 className='text-zinc-800 text-base md:text-lg font-bold text-center px-4'>Made for the Community</h2>
                <h1 className='text-zinc-800 text-2xl md:text-4xl font-bold text-center px-4'>Access 95 Free Animated Icons</h1>
                <p className='text-zinc-800 text-base md:w-2/3 text-center px-4'>This is a free personal project designed for the creative community, featuring 95 animated icons made with Lottie and licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) License. It will always remain free, but your support through donations would greatly help sustain the service and expand the icon pack.</p>
                <Link to='/explore' className='text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
                    Explore Icons Now
                    <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1]' />
                </Link>
                <div className='w-full inline-flex flex-nowrap mt-7 md:mt-12'>
                    <div ref={logosRef1} className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll gap-4 mx-2'>
                        <img src={icon1} alt='Icon 1' className='w-16' />
                        <img src={icon2} alt='Icon 2' className='w-16' />
                        <img src={icon3} alt='Icon 3' className='w-16' />
                        <img src={icon4} alt='Icon 4' className='w-16' />
                        <img src={icon5} alt='Icon 5' className='w-16' />
                        <img src={icon6} alt='Icon 6' className='w-16' />
                        <img src={icon7} alt='Icon 7' className='w-16' />
                        <img src={icon8} alt='Icon 8' className='w-16' />
                        <img src={icon9} alt='Icon 9' className='w-16' />
                        <img src={icon10} alt='Icon 10' className='w-16' />
                        <img src={icon11} alt='Icon 11' className='w-16' />
                        <img src={icon12} alt='Icon 12' className='w-16' />
                        <img src={icon13} alt='Icon 13' className='w-16' />
                        <img src={icon14} alt='Icon 14' className='w-16' />
                        <img src={icon15} alt='Icon 15' className='w-16' />
                        <img src={icon16} alt='Icon 16' className='w-16' />
                        <img src={icon17} alt='Icon 17' className='w-16' />
                        <img src={icon18} alt='Icon 18' className='w-16' />
                        <img src={icon19} alt='Icon 19' className='w-16' />
                        <img src={icon20} alt='Icon 20' className='w-16' />
                        <img src={icon21} alt='Icon 21' className='w-16' />
                    </div>
                </div>
                <div className='w-full inline-flex flex-nowrap mb-7 md:mb-12 -translate-x-5'>
                    <div ref={logosRef2} className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse gap-4 mx-2'>
                        <img src={icon22} alt='Icon 22' className='w-16' />
                        <img src={icon23} alt='Icon 23' className='w-16' />
                        <img src={icon24} alt='Icon 24' className='w-16' />
                        <img src={icon25} alt='Icon 25' className='w-16' />
                        <img src={icon26} alt='Icon 26' className='w-16' />
                        <img src={icon27} alt='Icon 27' className='w-16' />
                        <img src={icon28} alt='Icon 28' className='w-16' />
                        <img src={icon29} alt='Icon 29' className='w-16' />
                        <img src={icon30} alt='Icon 30' className='w-16' />
                        <img src={icon31} alt='Icon 31' className='w-16' />
                        <img src={icon32} alt='Icon 32' className='w-16' />
                        <img src={icon33} alt='Icon 33' className='w-16' />
                        <img src={icon34} alt='Icon 34' className='w-16' />
                        <img src={icon35} alt='Icon 35' className='w-16' />
                        <img src={icon36} alt='Icon 36' className='w-16' />
                        <img src={icon37} alt='Icon 37' className='w-16' />
                        <img src={icon38} alt='Icon 38' className='w-16' />
                        <img src={icon39} alt='Icon 39' className='w-16' />
                        <img src={icon40} alt='Icon 40' className='w-16' />
                        <img src={icon41} alt='Icon 41' className='w-16' />
                        <img src={icon42} alt='Icon 42' className='w-16' />
                    </div>
                </div>
                <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#ffffff] to-[#ffffff00] -z-10' />
                <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#eeebfb] via-[#ebf2fb] to-[#dff3f9] -z-20' />

            </div>
        </div>
    );
};

export default Hero;