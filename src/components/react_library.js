import React, { useState } from 'react';
import ReactImage from '../images/react-library.png'
import CopyIcon from '../images/copy.svg'

const ReactLibrary = () => {
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);

    const handleCopy = (event) => {
        const button = event.currentTarget;
        const span = button.previousElementSibling;
        if (span) {
            navigator.clipboard.writeText(span.textContent).then(() => {
                setShowCopiedMessage(true);
                setTimeout(() => {
                    setShowCopiedMessage(false);
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    };

    return (
        <div className='py-4 px-4 md:px-12 gap-12 my-12 flex flex-col md:flex-row'>
            <div className='bg-[#469ef1] text-zinc-50 rounded-xl flex flex-row w-full gap-10 overflow-hidden'>
                <div className='w-full md:w-1/2'>
                    <div className='p-8'>
                        <h2 className='font-bold text-2xl md:text-3xl 2xl:text-4xl mb-3'>Simplify Your Development With the React Ecco Library</h2>
                        <p className='mb-7'>If you want to use the non-animated version of the icons in your React project, you don't need to download and import each one separately. Simply use the React Ecco Icon library.</p>
                        <code className='bg-white bg-opacity-15 p-4 overflow-x-scroll flex justify-between items-center rounded-lg text-white'>
                            <span className='w-11/12'>npm install react-ecco-static</span>
                            <button onClick={handleCopy}>
                                <img src={CopyIcon} className='w-6 hover:scale-110 duration-200' />
                            </button>
                        </code>
                        <code className='bg-white bg-opacity-15 p-4 overflow-x-scroll flex justify-between items-center rounded-lg text-white mt-3'>
                            <span className='w-11/12'>yarn add react-ecco-static</span>
                            <button onClick={handleCopy}>
                                <img src={CopyIcon} className='w-6 hover:scale-110 duration-200' />
                            </button>
                        </code>
                    </div>
                </div>
                <div className='relative w-1/2 h-full overflow-hidden hidden md:block'>
                    <div className='bg-gradient-to-r from-[#469ef1] to-[#469ef100] w-2/5 h-full absolute top-0 left-0 z-10' />
                    <img src={ReactImage} className='w-full h-full object-cover' />
                </div>
            </div>
            {showCopiedMessage && (
                <div className="fixed bottom-16 z-40 left-1/2 transform -translate-x-1/2 bg-ao text-white px-4 py-2 rounded text-center">
                    Copied to Clipboard
                </div>
            )}
        </div>
    );
};

export default ReactLibrary