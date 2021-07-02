import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import FundedTrader from '../FundedTrader/FundedTrader';
import Navbar from '../Navbar/Navbar';
import OurClient from '../OurClient/OurClient';
import PayoutGateways from '../PayoutGateways/PayoutGateways';
import Pricing from '../Pricing/Pricing';
import TargetYearly from '../TargetYearly/TargetYearly';
import Testimonial from '../Testimonial/Testimonial';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <>
           <Navbar/> 
           <Banner/>
           <FundedTrader/>
           <OurClient/>
           <Pricing id="pricing"/>
           <WhyUs/>
           <Testimonial/>
           <TargetYearly/>
           <PayoutGateways/>
           <Footer/>
        </>
    );
};

export default Home;