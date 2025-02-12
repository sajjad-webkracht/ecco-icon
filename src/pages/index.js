import * as React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Formats from "../components/formats"
import How from "../components/how"
import Footer from "../components/footer"
import Faqs from "../components/faqs"
import New from '../components/new'
import Seo from '../components/seo'
import Figma from '../components/figma'
import Scrollup from '../components/scrollup'

const IndexPage = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <Formats />
      <Figma />
      <How />
      <Faqs />
      <Footer />
      <Scrollup />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title="Access Free Animated Icons" 
    description="This is a free personal project designed for the creative community, featuring 100+ animated icons made with Lottie. It will always remain free, but your support through donations would greatly help sustain the service and expand the icon pack." 
  />
)