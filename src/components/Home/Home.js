import React, {lazy, Suspense, useEffect} from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import FundedTrader from "../FundedTrader/FundedTrader";
import Navbar from "../Navbar/Navbar";
import OurClient from "../OurClient/OurClient";
import PayoutGateways from "../PayoutGateways/PayoutGateways";
import Pricing from "../Pricing/Pricing";
import TargetYearly from "../TargetYearly/TargetYearly";
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs";
import { Parallax } from "react-parallax";
import parallax from "../../img/parallax2.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() =>{
    AOS.init({
        offset: 100,
        duration: 1000,
    })
},[])
  return (
    <>
      <Navbar />
      <Banner />
      <FundedTrader />
      <Parallax
        bgImage={parallax}
        border={0}
        bgImageAlt="Stock Market"
        strength={500}
        className="opacity-100"
      >
        <OurClient />
        <Pricing />
      </Parallax>
      <WhyUs />
      <Parallax
        // blur={2}
        bgImage={parallax}
        border={0}
        bgImageAlt="Stock Market"
        strength={500}
        className="opacity-100"
      >
        <Testimonial />
        <TargetYearly />
        <Blog />
        <PayoutGateways />
        <ContactUs />
        <Footer />
      </Parallax>
    </>
  );
};

export default Home;
