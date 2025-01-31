import React from 'react';
import dangerIcon from '../images/danger.svg'


const Caution = ({ text }) => {
    return (
        <div className='bg-red-50 border-[1px] border-red-300 rounded-xl p-6 flex flex-col md:flex-row items-start gap-5'>
            <img src={dangerIcon} className='w-12' />
            <div>
                <h3 className='font-bold text-lg'>Caution</h3>
                <p className='text-sm'>{text}</p>
            </div>
        </div>
    );
};


export default Caution;