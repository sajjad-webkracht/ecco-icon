import React from 'react';
import Animated from '../images/animated.svg';
import Image from '../images/image.svg';
import Vector from '../images/vector.svg';

const Format = () => {
    return (
        <div className='py-4 px-4 md:px-12 flex flex-col md:flex-row gap-12 my-12'>
            <div className='rounded-xl text-zinc-800 w-full md:w-1/3'>
                <div className='flex items-center gap-2 mb-2'>
                    <img src={Image} alt='PNG' className='w-7' />
                    <h2 className='text-lg font-bold'>PNG</h2>
                </div>
                <p className='text-zinc-600'>The most popular bitmap image format supporting transparency.</p>
            </div>
            <div className='rounded-xl text-zinc-800 w-full md:w-1/3'>
                <div className='flex items-center gap-2 mb-2'>
                    <img src={Vector} alt='SVG' className='w-7' />
                    <h2 className='text-lg font-bold'>SVG</h2>
                </div>
                <p className='text-zinc-600'>SVG vector format allows you to customize the icon as you like.</p>
            </div>
            <div className='rounded-xl text-zinc-800 w-full md:w-1/3'>
                <div className='flex items-center gap-2 mb-2'>
                    <img src={Animated} alt='JSON' className='w-7' />
                    <h2 className='text-lg font-bold'>JSON, Lottie</h2>
                </div>
                <p className='text-zinc-600'>SVG-based formats designed for animated vector icons.</p>
            </div>
        </div>
    );
};

export default Format;