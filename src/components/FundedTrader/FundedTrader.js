import React from "react";
import { Parallax } from 'react-parallax';
import parallaxImg from '../../img/nick-chong-N__BnvQ_w18-unsplash.jpg'
const FundedTrader = () => {
  return (
    <>
    <Parallax blur={2} bgImage={parallaxImg} opacity={.1} border={0} bgImageAlt="Stock Market" strength={500} className="opacity-80">
      <div className="w-full dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-90%">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            
            <div className="w-4/5 mx-auto pb-12">
              <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-white text-center font-extrabold mb-4">
              What is <br /> <span className="myColor">Funded Trader Program?</span>
              </h1>
              <p className="text-xl text-center text-gray-300 leading-normal">
              A funded trader program is designed for traders who have skills and experience but are lacking enough capital to make trading full time profitable.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-transparent">
              <div className="w-full lg:w-2/4 p-6">
                <h1 className="text-2xl myColor">Why is it Needed?</h1>
                <p className="text-gray-200 pt-5 ">Funded trader programs allow you to leverage your trading skills and increase your earning potential without spending your own hard ear-
ned money.</p>
              </div>
              <div className="w-full lg:w-2/4 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l border-gray-300">
                <h1 className="text-2xl myColor">How does it work?</h1>
                <p className="text-gray-200 pt-5">Get instant funding with a funded trader prog- ram and accelerate your trading career.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-transparent">
              <div className="w-full lg:w-2/4 p-6">
                <h1 className="text-2xl myColor">What is the benefits of it?</h1>
                <p className="text-gray-200 pt-5">Funded trader program is designed to help po-
tential traders like you to grow their skills, and help you rise to the top in the FX market.</p>
              </div>
              <div className="w-full lg:w-2/4 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l border-gray-300">
                <h1 className="text-2xl myColor">What is the ultimate goal?</h1>
                <p className="text-gray-200 pt-5">The ultimate goal of a funded trader program is to empower traders and enable driven indiv-
iduals to become successful in trading.</p>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
 </Parallax>
    </>
  );
};

export default FundedTrader;
