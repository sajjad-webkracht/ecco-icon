import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql } from 'gatsby';
import LottiePreviewDownload from '../../components/lottiepreviewdownload';
import { Link } from 'gatsby';
import QuestionIcon from '../../images/question.svg';
import DownloadIcon from '../../images/download.svg';
import DownloadDarkIcon from '../../images/download-dark.svg';
import ColorIcon from '../../images/color.svg';
import ShareIcon from '../../images/share.svg';
import Seo from '../../components/seo'

import icon1 from '../../images/icons/1.svg';
import icon2 from '../../images/icons/2.svg';
import icon3 from '../../images/icons/3.svg';
import icon4 from '../../images/icons/4.svg';
import icon5 from '../../images/icons/5.svg';
import icon6 from '../../images/icons/6.svg';
import icon7 from '../../images/icons/7.svg';
import icon8 from '../../images/icons/8.svg';
import icon9 from '../../images/icons/9.svg';
import icon10 from '../../images/icons/10.svg';
import icon11 from '../../images/icons/11.svg';
import icon12 from '../../images/icons/12.svg';
import icon13 from '../../images/icons/13.svg';
import icon14 from '../../images/icons/14.svg';
import icon15 from '../../images/icons/15.svg';
import icon16 from '../../images/icons/16.svg';
import icon17 from '../../images/icons/17.svg';
import icon18 from '../../images/icons/18.svg';
import icon19 from '../../images/icons/19.svg';
import icon20 from '../../images/icons/20.svg';
import icon21 from '../../images/icons/21.svg';
import icon22 from '../../images/icons/22.svg';
import icon23 from '../../images/icons/23.svg';
import icon24 from '../../images/icons/24.svg';
import icon25 from '../../images/icons/25.svg';
import icon26 from '../../images/icons/26.svg';
import icon27 from '../../images/icons/27.svg';
import icon28 from '../../images/icons/28.svg';
import icon29 from '../../images/icons/29.svg';
import icon30 from '../../images/icons/30.svg';
import icon31 from '../../images/icons/31.svg';
import icon32 from '../../images/icons/32.svg';
import icon33 from '../../images/icons/33.svg';
import icon34 from '../../images/icons/34.svg';
import icon35 from '../../images/icons/35.svg';
import icon36 from '../../images/icons/36.svg';
import icon37 from '../../images/icons/37.svg';
import icon38 from '../../images/icons/38.svg';
import icon39 from '../../images/icons/39.svg';
import icon40 from '../../images/icons/40.svg';
import icon41 from '../../images/icons/41.svg';
import icon42 from '../../images/icons/42.svg';

const IconPage = ({ data }) => {
    const icon = data.allMetadataJson.nodes[0];
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);

    
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


  return (
    <div className="">
      <Header />
      <div className='py-4 md:py-12 px-4 md:px-12'>
        <div className="relative flex flex-col md:flex-row gap-4 items-end md:items-stretch">
          <div className='w-full md:w-1/2 relative'>
            <div className='overflow-hidden rounded-xl h-full'>
            <div className='bg-zinc-100 flex items-center justify-center rounded-md h-72 md:h-full w-full'>
            <LottiePreviewDownload animationData={icon.dotlottie} />
            </div>
            </div>

            <a href='/how-to-use/#colors' target='_blank' className='flex absolute top-2 right-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-4 rounded-sm'>
              <img src={ColorIcon} alt='Color Icon' className='w-4' />
              <span className='text-zinc-500 text-sm'>How to Change <b className='text-ao'>Colors</b></span>
            </a>


            <button onClick={handleShare} className='flex absolute top-2 left-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-3 rounded-md'>
              <img src={ShareIcon} alt='Share Icon' className='w-4' />
            </button>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className="text-2xl font-bold text-zinc-800 mb-6 mt-1">{icon.name} Free Animated Icon</h1>
            <div className="mt-4">
              <a href={icon.dotlottie} download className='text-zinc-50 group bg-zinc-800 rounded-md text-base duration-500 relative overflow-hidden w-full h-12 block'>
                <span className='absolute top-0 left-0 z-[2] w-full h-full px-9 py-3 text-center flex items-center justify-center gap-3'>
                  <img src={DownloadIcon} alt='Download Icon' className='w-5' />
                  Download dotLottie
                </span>
                <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] z-[1] opacity-0 group-hover:opacity-100 duration-200' />
              </a>

              <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                <a href={icon.lottie} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                  Download JSON
                </a>
                <a href={icon.aep} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                  Download AEP
                </a>
              </div>

              <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                <a href={icon.svg} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                  Download SVG
                </a>
                <a href={icon.png} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <img src={DownloadDarkIcon} alt='Download Icon' className='w-5' />
                  Download PNG
                </a>
              </div>

              <div className='mt-8'>
                <h3 className='text-zinc-800 text-sm font-bold'>CC BY 4.0 License</h3>
                <p className='text-zinc-600 text-sm'>This icon is licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' className='font-bold text-ao' target="_blank"> Creative Commons Attribution 4.0 International (CC BY 4.0)</a> license.</p>
              </div>

              <div className='mt-8 p-4 rounded-md bg-ao bg-opacity-10 flex gap-4 items-start'>
                <img src={QuestionIcon} className='w-7 mt-1 ml-1' />
                <div>
                  <h3 className='text-zinc-800 text-sm font-bold'>Learn How to Use</h3>
                  <p className='text-zinc-600 text-sm'>If you're unsure how to use the animated icon, check out the guide <Link to='/how-to-use' className='font-bold text-ao'>here</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCopiedMessage && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-ao text-white px-4 py-2 rounded">
            URL copied to clipboard
          </div>
        )}


        <div className='relative w-full py-5 rounded-xl overflow-hidden mt-16'>
          <div className='flex flex-col items-center gap-3'>
            <div className='px-4'>
              <h2 className='text-zinc-800 text-xl font-bold text-center'>
                There Are a Lot of Other Icons to Explore
              </h2>
              <p className='text-zinc-800 text-base text-center'>
                Check out other free icons available for download on Ecco Icon.
              </p>
            </div>
            <Link to='/explore' className='text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
              Explore Other Icons
              <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1]' />
            </Link>
          </div>
          
          <div className='w-full inline-flex flex-nowrap mt-7 md:mt-12 mb-4'>
            <div className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none gap-4 mx-2'>
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
            <div className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none gap-4 mx-2'>
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
      <Footer />
    </div>
  );
};

export const query = graphql`
  query($name: String!) {
    allMetadataJson(filter: { name: { eq: $name } }) {
      nodes {
        id
        name
        keywords
        svg
        lottie
        png
        dotlottie
        aep
      }
    }
  }
`;

export default IconPage;

export const Head = ({ data }) => (

  <Seo 
    title={data.allMetadataJson.nodes[0].name + ' Free Animated Icon'}
    description="Ecco Icon is a project inspired by my passion for the creative community and my personal needs while working on various design projects. All animated icons are crafted in Adobe After Effects and exported using Bodymovin." 
  />
)