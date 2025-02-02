import * as React from "react"
import Header from '../components/header';
import Footer from '../components/footer';
import Seo from '../components/seo'



const Donate = () => {
  return (
    <main>
      <Header />
          <div className='mb-12 md:mb-0 py-4 md:pb-16 px-4 md:px-12 flex flex-col md:flex-row gap-8 md:mt-12 text-zinc-800'>
              <div className="w-full md:w-1/2">
                    <h2 className="text-lg font-semibold mb-2">Keep the Project Alive!</h2>
                    <h1 className="text-3xl font-bold mb-5">Support <span className="text-ao">Ecco Icon</span></h1>
                    <p className="text-base text-zinc-600 mb-2">First of all, thank you for visiting Ecco Icon and using our free animated icons. This project is a labor of love, created to provide high-quality, creative resources to designers, developers, and creators like you—completely free of charge.</p>
                    <p className="text-base text-zinc-600 mb-2">However, maintaining and expanding Ecco Icon takes time, effort, and resources. From designing new icons to hosting the website, every little bit helps keep this project alive and growing.</p>
                    <p className="text-base text-zinc-600 mb-2">Your contribution, no matter how small, makes a huge difference. It allows me to continue dedicating time to this personal project and keep it free for everyone to enjoy.</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-end">
                  <iframe src="https://nowpayments.io/embeds/donation-widget?api_key=CQEWM7D-TVCMGFM-NNY56KG-XVTC4JM" width="346" height="623" frameborder="0" scrolling="no" className="overflow-y-hidden border-[1px] border-solid border-zinc-200 rounded-lg">
                      Can't load widget
                  </iframe>
              </div>
          </div>
      <Footer />
    </main>
  )
}

export default Donate

export const Head = () => (
  <Seo 
    title="Donate" 
    description="Your contribution, no matter how small, makes a huge difference. It allows me to continue dedicating time to this personal project and keep it free for everyone to enjoy." 
  />
)
