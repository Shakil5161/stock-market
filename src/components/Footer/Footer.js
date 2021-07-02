import React from 'react';
import logo from "../../img/StockMarket.png"
import appleStore from "../../img/iStore.png"
import playStore from "../../img/Playstore.png"
const Footer = () => {
    return (
        <>
             <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container lg:pt-16 flex flex-col items-center justify-center">
                    <div className="animate__animated animate__bounceInDown animate__delay-5s">
                        <img className="animate__animated animate__pulse animate__infinite animate__slow animate__delay-3s" src={logo} alt="" width="100px" srcset="" />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l ">
                        
                        <div className="md:flex items-center text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
                            <h2 className="cursor-pointer">License</h2>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Pricing</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Careers</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-4 f-f-l">
                            <p> © 2021 Prodify. All rights reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12 h-0.5 bg-gray-100 rounded-full" />
                    <div className="flex justify-between items-center pt-4">
                        <div className="mr-4">
                        <img src={appleStore} alt="" width="100px" srcset="" />
                        </div>
                        <div className="mr-4">
                        <img src={playStore} alt="" width="100px" srcset="" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;