import * as React from "react"
import { Link } from "gatsby"
import Header from '../components/header';
import Footer from '../components/footer';
import Seo from '../components/seo'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CookieNotice from "../components/cookie_notice"



const NotFoundPage = () => {
  return (
    <main>
      <Header />
      <div className='mb-12 md:mb-0 py-4 md:pb-16 px-4 md:px-12  md:mt-12 text-zinc-800'>
        <div className="flex justify-center mb-4">
          <DotLottieReact
            src='/icons/UI/danger.lottie'
            autoplay
            loop
            renderer="svg"
            className='w-44 h-44'
          />
        </div>
        <h1 className="text-center font-bold text-2xl md:text-4xl mb-4 text-ao">Error 404 - Page Not Found</h1>
        <p className="text-zinc-600 text-center mb-2">Oops! It seems like you've wandered off the path. The page you're looking for doesn't exist on Ecco Icon.</p>
        <p className="text-zinc-600 text-center mb-2">Don't worry—you can always head back to the home page and start fresh. Just click the link below:</p>
        <div className="flex justify-center mt-8">
          <Link to="/" className='text-center text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
            Back to Home
            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1] rounded-md' />
          </Link>
        </div>
      </div>
      <Footer />
      <CookieNotice />
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo 
    title="Error 404" 
    description="Page Not Found" 
  />
)
