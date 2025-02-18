import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql } from 'gatsby';
import LottiePreviewDownload from '../../components/lottiepreviewdownload';
import LottieAnimation from '../../components/lottieanimation';
import Seo from '../../components/seo'
import ExternalLink from '../../components/external_link';
import { Copy, Color, Share, Question, Download } from 'react-ecco-static';
import CookieNotice from "../../components/cookie_notice"

const IconPage = ({ data }) => {
  const icon = data.iconData.nodes[0];
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const [randomIcons, setRandomIcons] = useState([]);

    useEffect(() => {
      const allIcons = data.allIcons.nodes;
      const filteredIcons = allIcons.filter(i => i.id !== icon.id);
      const shuffledIcons = filteredIcons.sort(() => 0.5 - Math.random());
      setRandomIcons(shuffledIcons.slice(0, 24));
  }, [data, icon.id]);
    
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

            <a href='/how-to-use/#colors' target='_blank' className='flex absolute top-2 right-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-4 rounded-md'>
              <div className='w-5'>
                <Color color="#6eb7ec" />
              </div>
              <span className='text-zinc-500 text-sm'>How to Change <b className='text-ao'>Colors</b></span>
            </a>


            <button onClick={handleShare} className='flex absolute top-2 left-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-3 rounded-md'>
              <div className='w-5'>
                <Share color="#6eb7ec" />
              </div>
            </button>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className="text-2xl font-bold text-zinc-800 mb-6 mt-1">{icon.name} Free Animated Icon</h1>
            <div className="mt-4">
              <a href={icon.dotlottie} download className='text-zinc-50 group bg-zinc-800 rounded-md text-base duration-500 relative overflow-hidden w-full h-12 block'>
                <span className='absolute top-0 left-0 z-[2] w-full h-full px-9 py-3 text-center flex items-center justify-center gap-3'>
                  <div className='w-7'>
                    <Download color="#fafafa" />
                  </div>
                  Download dotLottie
                </span>
                <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] z-[1] opacity-0 group-hover:opacity-100 duration-200' />
              </a>

              <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                <a href={icon.lottie} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <div className='w-7'>
                    <Download color="#27272a" />
                  </div>
                  Download JSON
                </a>
                <a href={icon.aep} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <div className='w-7'>
                    <Download color="#27272a" />
                  </div>
                  Download AEP
                </a>
              </div>

              <div className='flex flex-col lg:flex-row gap-2 mt-2'>
                <a href={icon.svg} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <div className='w-7'>
                    <Download color="#27272a" />
                  </div>
                  Download SVG
                </a>
                <a href={icon.png} download className='text-zinc-800 group bg-zinc-50 hover:bg-zinc-100 rounded-md text-base duration-500 overflow-hidden flex items-center justify-center gap-3 w-full lg:w-1/2 h-12 border-2 border-zinc-200'>
                  <div className='w-7'>
                    <Download color="#27272a" />
                  </div>
                  Download PNG
                </a>
              </div>

              <code className='mt-2 bg-zinc-100 p-4 rounded-md text-sm text-zinc-700 flex justify-between items-center gap-2'>
                <span className='w-11/12 overflow-x-scroll'>&lt;{icon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')} color="#000000" /&gt;</span>
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

              <div className='mt-8 p-4 rounded-md bg-ao bg-opacity-10 flex gap-4 items-center'>
                <div className='w-8 mt-1 ml-1 hidden md:block'>
                  <Question color="#6eb7ec" />
                </div>
                <div className='md:w-11/12'>
                  <h3 className='text-zinc-800 text-sm font-bold'>Learn How to Use</h3>
                  <p className='text-zinc-600 text-sm'>If you're unsure how to use the animated icon, check out the guide <ExternalLink href='/how-to-use'>here</ExternalLink>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCopiedMessage && (
          <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-ao text-white px-4 py-2 rounded text-center">
            Copied to Clipboard
          </div>
        )}


        <div className='w-full pt-12 mt-16 text-zinc-800'>
          <h2 className='text-2xl font-bold text-center mb-8'>Explore Other Animated Icons</h2>
          <div className='grid md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-4'>
            {randomIcons.map((randomIcon) => (
              <Link to={`/icons/${randomIcon.name.toLowerCase().replace(/ /g, '-')}`} key={randomIcon.id} className=''>
                <LottieAnimation animationData={randomIcon.dotlottie} />
              </Link>
            ))}
          </div>
          <div className='flex justify-center mt-12'>
            <Link to='/explore' className='text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
              Explore Other Icons Now
              <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1]' />
            </Link>
          </div>
        </div>


      </div>
      <Footer />
      <CookieNotice />
    </div>
  );
};

export const query = graphql`
  query($name: String!) {
    iconData: allMetadataJson(filter: { name: { eq: $name } }) {
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
          allIcons: allMetadataJson {
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
    title={data.iconData.nodes[0].name + ' Free Animated Icon'}
    description="Ecco Icon is a project inspired by my passion for the creative community and my personal needs while working on various design projects. All animated icons are crafted in Adobe After Effects and exported using Bodymovin." 
  />
)