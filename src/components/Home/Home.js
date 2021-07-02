import React from "react";
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

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FundedTrader />
      <Parallax
        blur={2}
        bgImage={parallax}
        opacity={0.1}
        border={0}
        bgImageAlt="Stock Market"
        strength={500}
        className="opacity-80"
      >
        <OurClient />
        <Pricing />
      </Parallax>
      <WhyUs />
      <Parallax
        blur={2}
        bgImage={parallax}
        opacity={0.1}
        border={0}
        bgImageAlt="Stock Market"
        strength={500}
        className="opacity-80"
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
