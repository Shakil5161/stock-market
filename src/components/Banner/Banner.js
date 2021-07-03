import React from "react";
import BannerImg from "../../img/bnr_img.png";
const Banner = () => {
  return (
    <div class="bg-gray-800 py-20 sm:py-64 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between text-white ">
          <div className=" pb-16 sm:py-0">
            <h4 class="font-sans text-4xl font-semibold">
              Our Fund, Your Profit
            </h4>
            <h2 class="pt-8 pb-4 font-mono text-6xl sm:text-8xl  font-extrabold myColor">
              Trade Up to $100,000
            </h2>
            <p>
              We offer up to $100,000 to financially empower global <br />
              traders and help earn full-time
            </p>
            <div className="pt-8 animate__animated animate__bounceInUp animate__delay-1s">
              <button class="animate__animated animate__pulse animate__infinite	animate__slow animate__delay-3s mr-6 bg-transparent hover:bg-purple-700  text-white font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded">
                Get Funded Now
              </button>
              <button class="animate__animated animate__pulse animate__infinite	animate__slow animate__delay-3s bg-transparent hover:bg-purple-700  text-white font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded">
                Start Demo
              </button>
            </div>
          </div>
          <div className="w-6/12 animate__animated animate__bounceInRight">
            <img className="animate__animated animate__pulse animate__infinite animate__slow animate__delay-3s" src={BannerImg} alt="" srcset="" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
