import React, { useEffect, useState } from 'react';
import LottiePreviewDownload from './lottiepreviewdownload';
import CloseIcon from '../images/close.svg';
import { Link } from 'gatsby';
import ExternalLink from '../components/external_link';
import QuestionIcon from '../images/question.svg';
import DownloadIcon from '../images/download.svg';
import DownloadDarkIcon from '../images/download-dark.svg';
import ColorIcon from '../images/color.svg';
import ShareIcon from '../images/share.svg';
import { Copy, Question } from 'react-ecco-static';


const Download = ({ icon, onClose }) => {
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);


    useEffect(() => {
        // Add class to body to disable scrolling
        document.body.classList.add('overflow-hidden');

        // Update the URL without reloading the page
        if (icon && icon.name) {
            window.history.pushState({}, '', `/icons/${icon.name.toLowerCase().replace(/ /g, '-')}`);
        }

        // Cleanup function to remove class when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [icon]);

    const handleClose = () => {
        // Revert the URL to the default state
        window.history.pushState({}, '', '/explore/');
        // Call the onClose function
        onClose();
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setShowCopiedMessage(true);
            setTimeout(() => {
                setShowCopiedMessage(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
    
    const handleCopy = (event) => {
        const button = event.currentTarget;
        const span = button.previousElementSibling.previousElementSibling;
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
        <div className="fixed z-40 inset-0 bg-zinc-900 bg-opacity-80 md:flex justify-center items-center overflow-y-scroll">
            <div className="bg-white p-4 md:rounded-xl relative w-full md:w-11/12 lg:w-9/12 flex flex-col md:flex-row gap-4 overflow-y-scroll items-end md:items-stretch">
                
                <button onClick={handleClose}  className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white p-3 rounded md:absolute top-4 right-4 w-fit"><img src={CloseIcon} alt='Close' className='w-3' /></button>

                <div className='w-full md:w-1/2 relative'>
                    <LottiePreviewDownload animationData={icon.dotlottie} />
                    <a href='/how-to-use/#colors' target='_blank' className='flex absolute top-2 right-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-4 rounded-sm'>
                        <img src={ColorIcon} alt='Color Icon' className='w-4' />
                        <span className='text-zinc-500 text-sm'>How to Change <b className='text-ao'>Colors</b></span>
                    </a>
                    <button onClick={handleShare} className='flex absolute top-2 left-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-3 rounded-sm'>
                        <img src={ShareIcon} alt='Share Icon' className='w-4' />
                    </button>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className="text-lg font-bold text-zinc-800 mb-6 mt-1">{icon.name} Free Animated Icon</h2>
                    <div className="mt-4">
                        <a href={icon.dotlottie} download className='text-zinc-50 group bg-zinc-800 rounded-md text-base duration-500 relative overflow-hidden w-full h-12 block'>
                            <span className='absolute top-0 left-0 z-[2] w-full h-full px-9 py-3 text-center flex items-center justify-center gap-3'>
                                <img src={DownloadIcon} alt='Download Icon' className='w-5' />
                                Download dotLottie
                            </span>
                            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] z-[1] opacity-0 group-hover:opacity-100 duration-200' />
                        </a>

                        <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                            <a href={icon.lottie} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200 active:border-zinc-300'>
                                <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                                Download JSON
                            </a>
                            <a href={icon.aep} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200 active:border-zinc-300'>
                                <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                                Download AEP
                            </a>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                            <a href={icon.svg} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200 active:border-zinc-300'>
                                <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                                Download SVG
                            </a>
                            <a href={icon.png} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200 active:border-zinc-300'>
                                <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                                Download PNG
                            </a>
                        </div>

                        <code className='mt-2 bg-zinc-100 p-4 rounded-md text-sm text-zinc-700 flex justify-between items-center gap-2'>
                            <span className='w-11/12 overflow-x-scroll'>&lt;{icon.name.replace(/ /g, '')} color="#000000" /&gt;</span>
                            <a href='/how-to-use/#react' target='_blank'>
                                <div className='w-6 hover:scale-110 duration-200'>
                                    <Question color="#a1a1aa" />
                                </div>
                            </a>
                            <button onClick={handleCopy}>
                                <div className='w-6 hover:scale-110 duration-200'>
                                    <Copy color="#a1a1aa" />
                                </div>
                            </button>
                        </code>

                        <div className='mt-8'>
                            <h3 className='text-zinc-800 text-sm font-bold'>CC BY 4.0 License</h3>
                            <p className='text-zinc-600 text-sm'>This icon is licensed under the <ExternalLink href='https://creativecommons.org/licenses/by/4.0/' target="_blank"> Creative Commons Attribution 4.0 International (CC BY 4.0)</ExternalLink> license.</p>
                        </div>

                        <div className='mt-8 p-4 rounded-md bg-ao bg-opacity-10 flex gap-4 items-start'>
                            <img src={QuestionIcon} className='w-7 mt-1 ml-1' />
                            <div>
                                <h3 className='text-zinc-800 text-sm font-bold'>Learn How to Use</h3>
                                <p className='text-zinc-600 text-sm'>If you're unsure how to use the animated icon, check out the guide <ExternalLink href='/how-to-use' target='_blank'>here</ExternalLink>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showCopiedMessage && (
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-ao text-white px-4 py-2 rounded">
                        Copied to Clipboard
                    </div>
                    )}
        </div>
    );
};

export default Download;