import { Link } from 'gatsby';
import React from 'react';

const New = ({ Title, Text, Image }) => {
    return (
        <div className='bg-[#23a5d8] text-zinc-50 rounded-xl flex flex-col w-full md:w-1/3 lg:w-1/4 p-8 md:p-8 gap-8'>
            <div className='h-full w-full flex justify-end items-center'>
                <img src={Image} alt={Title} className='w-full' />
            </div>
            <div className='w-full'>
                <h3 className='text-xl'>Newly Added</h3>
                <h2 className='text-3xl font-bold mb-4'>{Title}</h2>
                <p className='mb-7'>{Text}</p>
                <Link to='/explore' className='text-zinc-800 bg-zinc-50 px-5 py-2 rounded-md text-base hover:px-6 duration-500 inline-block'>Explore Icons</Link>
            </div>
        </div>
    );
};

export default New;