import Banner from "../Components/Banner"
import ContactUs from "../Components/ContactUs"
import Footer from "../Components/Footer"
import FreeCard from "../Components/FreeCard"
import HoverEffectGrid from "../Components/HoverEffectGrid"
import Industries from "../Components/Industries"
import LatestBlogAndInsights from "../Components/LatestBlogAndInsights"
import Navbar from "../Components/Navbar"
import OurServices from "../Components/OurServices"
import SliderComp from "../Components/Slider"
import StatsSection from "../Components/StatsSection"
import WhoweAre from "../Components/WhoweAre"
import WhyChooseUs from "../Components/WhyChooseus"


const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>

    <SliderComp/>
    <WhoweAre/>
    <OurServices/>
    <Industries/>
    <StatsSection/>
    <HoverEffectGrid/>
    <LatestBlogAndInsights/>
    <WhyChooseUs/>
    <ContactUs/>
    <FreeCard/>
    <Footer/>
    </>
  )
}

export default Home