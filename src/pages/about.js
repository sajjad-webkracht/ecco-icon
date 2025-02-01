import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Ecco from '../images/ecco.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Seo from '../components/seo'


const About = () => {
 
  
    return (
        <div>
            <Header />
            <div className='mb-12 md:mb-0 py-4 md:pb-16 px-4 md:px-12  md:mt-12 text-zinc-800'>
                <div className='flex flex-col md:flex-row gap-20 items-center mb-28'>
                    <div className=''>
                        <DotLottieReact
                            src='/icons/UI/about_animation.lottie'
                            autoplay
                            loop
                            className='hidden md:block md:w-[20vw] md:h-[20vw]'
                        />
                    </div>
                    <div className='w-full'>
                        <h3 className='text-lg font-semibold mb-2'>What's this all about?</h3>
                        <h1 className='text-3xl font-bold mb-5'>About <span className='text-ao'>Ecco Icon</span></h1>
                        <p className='text-base text-zinc-600'>I created Ecco Icon because I felt a genuine need for a project like this. The design community is like a family, and by supporting one another, we can craft better, more beautiful products—and, hopefully, a better world. That’s how Ecco Icon came to life.</p>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row mb-40 gap-8'>

                    <div className='border-zinc-200 rounded-xl p-6 border-[1px] w-full md:w-1/4'>
                        <span className='block mb-2 font-bold'>
                            Lightweight
                        </span>
                        <span className='text-sm text-zinc-500'>
                            Ecco Icon leverages Lottie technology, an SVG-based animation format, making it incredibly lightweight. With the new dotLottie format, it’s even more optimized, delivering exceptional performance.                        </span>
                    </div>

                    <div className='border-zinc-200 rounded-xl p-6 border-[1px] w-full md:w-1/4'>
                        <span className='block mb-2 font-bold'>
                            Minimal
                        </span>
                        <span className='text-sm text-zinc-500'>
                            The icons are designed to be minimal and monochromatic, ensuring they seamlessly complement any design. They’re crafted to remain clear and effective, even at smaller sizes.
                        </span>
                    </div>

                    <div className='border-zinc-200 rounded-xl p-6 border-[1px] w-full md:w-1/4'>
                        <span className='block mb-2 font-bold'>
                        Free
                        </span>
                        <span className='text-sm text-zinc-500'>
                        Ecco Icon is completely free for both personal and commercial use—a contribution to the design community. However, donations are greatly appreciated as they help keep the project alive and support its expansion.
                        </span>
                    </div>

                    <div className='border-zinc-200 rounded-xl p-6 border-[1px] w-full md:w-1/4'>
                        <span className='block mb-2 font-bold'>
                        Flexible
                        </span>
                        <span className='text-sm text-zinc-500'>
                        Built on Lottie, these icons are highly versatile. You can easily make them interactive and customize them to suit the specific needs of your project.
                        </span>
                    </div>

                </div>

                <div className='mb-28 bg-ao bg-opacity-10 rounded-xl px-12 pb-12 pt-20 relative'>
                    <img src={Ecco} alt='Ecco Icon' className='absolute -top-8 left-12 w-20' />
                    <div className=''>
                        <h2 className='text-xl font-bold mb-2'>Why is it called <span className='text-ao'>Ecco</span>?</h2>
                        <p className='text-zinc-600'>If you’re old enough, you might remember a Sega game about a dolphin named Ecco the Dolphin. That’s exactly where the name comes from. Why use it for an icon pack? Honestly, there’s no logical reason—I just loved the game and thought of it as a tribute.</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
                    <div className='w-full md:w-1/2 flex flex-col items-center'>
                    <DotLottieReact
                            src='/icons/UI/avatar.lottie'
                            autoplay
                            loop
                            renderer="svg"
                            className='w-[40vw] h-[40vw] mb-8 md:w-[80px] md:h-[80px]'
                        />
                        <h2 className='text-xl font-bold mb-2 text-center'>Who am I?</h2>
                        <p className='text-zinc-600 text-center mb-8'>I’m a UI/UX designer, motion designer, graphic designer, and illustrator. To learn more about me or get in touch, feel free to visit my personal website.</p>
                        <a href='https://sajjaddashti.ir/' className='text-center text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
                            Sajjad Dashti - Personal Website
                            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1] rounded-md' />
                        </a>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default About;

export const Head = () => (
    <Seo 
      title="About" 
      description="I created Ecco Icon because I felt a genuine need for a project like this. The design community is like a family, and by supporting one another, we can craft better, more beautiful products—and, hopefully, a better world." 
    />
  )
