import React, { useEffect, useState, useRef } from 'react';
import LottiePreviewDownload from './lottiepreviewdownload';
import CloseIcon from '../images/close.svg';
import { Link } from 'gatsby';
import QuestionIcon from '../images/question.svg';
import DownloadIcon from '../images/download.svg';
import DownloadDarkIcon from '../images/download-dark.svg';
import ColorIcon from '../images/color.svg';
import ShareIcon from '../images/share.svg';
import lottie from "lottie-web";


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




    //Icon Color Editor

    const [animationData, setAnimationData] = useState(null); // Holds the fetched animation JSON
    const [selectedColor, setSelectedColor] = useState("#000000");
    const lottieContainer = useRef(null); // Ref for the Lottie container
    const lottieInstance = useRef(null); // Ref for the Lottie animation instance
  
    
    // Fetch the Lottie JSON from the provided URL (icon.lottie)
    useEffect(() => {
      const fetchAnimationData = async () => {
        try {
          const response = await fetch(icon.lottie);
          if (!response.ok) {
            throw new Error("Failed to fetch the JSON file. Please check the URL.");
          }
          const json = await response.json();
          setAnimationData(json);
        } catch (err) {
          console.error(err.message);
        }
      };
  
      if (icon?.lottie) {
        fetchAnimationData();
      }
    }, [icon.lottie]);
  
    // Initialize and render the Lottie animation when animationData changes
    useEffect(() => {
      if (animationData && lottieContainer.current) {
        // Destroy any existing animation instance
        if (lottieInstance.current) {
          lottieInstance.current.destroy();
        }
  
        // Render the new animation
        lottieInstance.current = lottie.loadAnimation({
          container: lottieContainer.current,
          animationData,
          renderer: "svg",
          loop: true,
          autoplay: true,
        });
      }
    }, [animationData]);

    const updateColorsRecursively = (items, color) => {
        items.forEach((item) => {
          // If the item has a color property (c), update its color
          if (item.c) {
            item.c.k = hexToRgbArray(color); // Update color in RGBA format
          }
      
          // If the item contains nested items (it), recursively process them
          if (item.it) {
            updateColorsRecursively(item.it, color);
          }
        });
      };


      const updateLayerColors = (layers, assets, color) => {
        layers.forEach((layer) => {
          // If the layer has shapes, update colors recursively
          if (layer.shapes) {
            updateColorsRecursively(layer.shapes, color);
          }
      
          // If the layer is a precomp, process its nested layers
          if (layer.ty === 0 && layer.refId) {
            const precomp = assets.find((asset) => asset.id === layer.refId);
            if (precomp && precomp.layers) {
              updateLayerColors(precomp.layers, assets, color); // Recursively process nested layers
            }
          }
        });
      };
  
    // Update colors in the Lottie JSON data
    const handleColorChange = (color) => {
      if (!animationData) return;

      setSelectedColor(color);
  
      const newAnimationData = JSON.parse(JSON.stringify(animationData)); // Deep copy to avoid mutating the original
  
  // Loop through main layers and update colors, including precomps
  updateLayerColors(newAnimationData.layers, newAnimationData.assets, color);

  
      setAnimationData(newAnimationData); // Update the animation data
      setSelectedColor(color);
    };
  
    // Convert HEX color to RGBA array for Lottie
    const hexToRgbArray = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      return [((bigint >> 16) & 255) / 255, ((bigint >> 8) & 255) / 255, (bigint & 255) / 255, 1];
    };
  
    // Download the updated JSON file
    const downloadUpdatedJson = () => {
      if (!animationData) return;

          // Use `name` to customize the download file name
    const fileName = `${icon.name}.json`; // Default to "updated-animation" if `name` is not provided

  
      const blob = new Blob([JSON.stringify(animationData, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    };

    
    
    
    return (
        <div className="fixed inset-0 bg-zinc-900 bg-opacity-80 md:flex justify-center items-center overflow-y-scroll">
            <div className="bg-white p-4 md:rounded-xl relative w-full md:w-11/12 lg:w-9/12 flex flex-col md:flex-row gap-4 overflow-y-scroll items-end md:items-stretch">
                
                <button onClick={handleClose}  className="bg-zinc-800 hover:bg-zinc-700 duration-200 text-white p-3 rounded md:absolute top-4 right-4 w-fit"><img src={CloseIcon} alt='Close' className='w-3' /></button>

                <div className='w-full md:w-1/2 relative'>
                    <div className='bg-zinc-100 flex items-center justify-center rounded-md h-72 md:h-full w-full'>
                    <div
                        className='w-2/4'
                        ref={lottieContainer}
                    ></div>
                    </div>

                    <span className='flex absolute top-2 right-2 bg-zinc-100 border-2 border-zinc-200  duration-200 items-center h-10 rounded-sm justify-between'>
                        <div className='flex gap-2  px-4'>
                            <img src={ColorIcon} alt='Color Icon' className='w-4' />
                            <span className='text-zinc-500 text-sm'>Change <b className='text-ao'>Color</b></span>
                        </div>
                        <input
                            type="color"
                            id="colorPicker"
                            value={selectedColor}
                            onChange={(e) => handleColorChange(e.target.value)}
                            className='opacity-0 w-[0.1px]'
                        />
                        <div
                            className='rounded-full h-6 w-6 mr-2 border-none outline-none'
                            style={{
                                backgroundColor: selectedColor,
                                cursor: 'pointer'
                            }}
                            onClick={() => document.getElementById('colorPicker').click()}
                        />
                    </span>

                    <button onClick={handleShare} className='flex absolute top-2 left-2 gap-2 bg-zinc-100 border-2 border-zinc-200 hover:bg-zinc-200 duration-200 items-center h-10 px-3 rounded-sm'>
                        <img src={ShareIcon} alt='Share Icon' className='w-4' />
                    </button>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className="text-lg font-bold text-zinc-800 mb-6 mt-1">{icon.name} Free Animated Icon</h2>
                    <div className="mt-4">
                        <button onClick={downloadUpdatedJson} download className='text-zinc-50 group bg-zinc-800 rounded-md text-base duration-500 relative overflow-hidden w-full h-12 block'>
                            <span className='absolute top-0 left-0 z-[2] w-full h-full px-9 py-3 text-center flex items-center justify-center gap-3'>
                                <img src={DownloadIcon} alt='Download Icon' className='w-5' />
                                Download Lottie JSON
                            </span>
                            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] z-[1] opacity-0 group-hover:opacity-100 duration-200' />
                        </button>

                        <div className='flex flex-col lg:flex-row gap-4 mt-4'>
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
        </div>
    );
};

export default Download;