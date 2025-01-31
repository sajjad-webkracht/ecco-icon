import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({ animationData }) => {
  const [dotLottie, setDotLottie] = React.useState(null);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  function play(){
    if(dotLottie){
      dotLottie.play();
    }
  }

  function stop(){
    if(dotLottie){
      dotLottie.stop();
    }
  }


    return (
      <div className='bg-zinc-100 rounded-xl w-full h-full flex justify-center items-center py-10 cursor-pointer hover:bg-[#dff3f9] duration-200'
      onMouseEnter={play}
      onMouseLeave={stop}
      >
        <DotLottieReact
          src={animationData}
          loop
          dotLottieRefCallback={dotLottieRefCallback}
          className='w-12 h-12 object-contain'
        />
      </div>
    );
};

export default LottieAnimation;