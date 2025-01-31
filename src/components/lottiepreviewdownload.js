import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottiePreviewDownload = ({ animationData }) => {


    return (
      <div className='bg-zinc-100 rounded-md w-full h-full flex justify-center items-center py-10'>
        <DotLottieReact
          src={animationData}
          loop
          autoplay
          className='w-44 h-44 object-contain'
        />
      </div>
    );
};

export default LottiePreviewDownload;