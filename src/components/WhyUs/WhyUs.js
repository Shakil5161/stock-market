import React from 'react';
import img1 from '../../img/XMLID 1-1.png'
import img2 from '../../img/XMLID 1-2.png'
import img3 from '../../img/XMLID 1-3.png'
import img4 from '../../img/XMLID 1.png'
import img5 from '../../img/Group.png'
import img6 from '../../img/Group 9648.png'

const WhyUs = () => {
    return (
        <div id="about" className="bg-gray-800 pt-24 pb-20">
            <div className="w-full dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-90%">

            <div className="w-4/5 mx-auto pb-12" data-aos='zoom-in'>
              <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl myColor text-center font-extrabold mb-4">
              Why Choose Us?
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto w-full  bg-transparent">
              <div className="w-full lg:w-2/4 p-6 text-center" data-aos="fade-right"
                >
                  <img className="m-auto animate__animated animate__pulse animate__infinite animate__slow" src={img1} alt="" srcset="" />
                <h1 className="text-2xl myColor">No Challenge, No Profit Target</h1>
                <p className="text-gray-200 pt-5 ">We reward our funded traders for their hard work and good performance. You can get more profit share as you progress through our funded trader program. It's a win/win partnership. You can get profit share from the beginning, or from your first trade.</p>
              </div>
              <div className="w-full lg:w-2/4 p-6 text-center border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l border-gray-300">
                <div data-aos="fade-left">
                <img className="m-auto animate__animated animate__pulse animate__infinite animate__slow" src={img2} alt="" srcset="" />
                <h1 className="text-2xl myColor">Instant Funding</h1>
                <p className="text-gray-200 pt-5">With Funded Next, you can get access to your real funded account from day 1. You don???t need to pass any difficult evaluation process to start trading with a real funded account.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-transparent">
              <div className="w-full lg:w-2/4 p-6 text-center text-center" data-aos="fade-right"
                >
                  <img className="m-auto animate__animated animate__pulse animate__infinite animate__slow" src={img3} alt="" srcset="" />
                <h1 className="text-2xl myColor">Dedicated Support Agent</h1>
                <p className="text-gray-200 pt-5 ">To help you in your trading journey and make the full out of your real funded account, one our support will be assigned for you 24/7 to guide you through.</p>
              </div>
              <div className="w-full lg:w-2/4 p-6 text-center border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l border-gray-300">
              <div data-aos="fade-left" >
              <img className="m-auto animate__animated animate__pulse animate__infinite animate__slow" src={img4} alt="" srcset="" />
                <h1 className="text-2xl myColor">Best Trading Condition</h1>
                <p className="text-gray-200 pt-5">Our funded trader program provides a wide choice of assets with very low commissions and super-raw spreads. Ideal for traders who dema-
nd the best execution quality.</p>
              </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-transparent">
              <div className="w-full lg:w-2/4 p-6 text-center" data-aos="fade-right"
                >
              <img className="m-auto animate__animated animate__pulse animate__infinite animate__slow" src={img5} alt="" srcset="" />
                <h1 className="text-2xl myColor">No limit on Trading Style</h1>
                <p className="text-gray-200 pt-5">Use any trading strategy, style with no limits or restrictions. We allow you to trade the news, hedge positions or you can use your own EAs.</p>
              </div>
              <div className="w-full lg:w-2/4 p-6 text-center border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l border-gray-300">
                <div data-aos="fade-left" >
                <img className="m-auto animate__animated animate__pulse animate__infinite animate__slow" src={img6} alt="" srcset="" />
                <h1 className="text-2xl myColor">Profit Share </h1>
                <p className="text-gray-200 pt-5">We reward our funded traders for their hard work and good performance. You can get more profit share as you progress through our funded trader program. It's a win/win partnership. You can get profit share from the beginning, or from your first trade.</p>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
        </div>
    );
};

export default WhyUs;