import React, { useEffect } from 'react';
import 'animate.css/animate.css';
const Pricing = () => {
    
    return (
        <>
             <div id="pricing" className="container mx-auto pb-36">
            <div className="w-4/5 mx-auto pb-16" data-aos='zoom-in' data-aos-duration="1000">
                <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-extrabold mb-4">Simple &amp; Transparent Pricing</h1>
                <p className="text-xl text-center text-gray-600 leading-normal">We grow when your business does. So we have put together simple pricing that allows you to easily scale your business when its needs evolve. So choose a plan for your next project.</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border border-gray-300 bg-white hover:border-purple-700" data-aos='slide-up' data-aos-duration="1200">
                    <div className="pt-8 px-8 pb-6">
                        <h4 className="text-2xl text-center text-gray-800 pb-3 font-bold">Beginner Trader</h4>
                        <p className="text-sm text-center text-gray-600 pb-5 leading-normal px-10">Basic resources for a starter site. Individuals and small teams.</p>
                        <p className="text-base text-center text-gray-600 font-bold">
                            $ <span className="text-4xl text-purple-700 font-medium px-2">25,000</span>
                        
                        </p>
                    </div>
                    <div className="flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100" role="button">
                        <p className="text-base text-gray-600 font-bold">Annual Billing</p>
                        <div className="cursor-pointer w-12 h-6 rounded-full bg-purple-700 relative shadow-sm">
                            <input type="checkbox" name="toggle" id="toggle" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle" className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
                        </div>
                    </div>
                    <div className="pt-6 pr-8 pl-8">
                        <ul className="flex flex-col items-center">
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Max Daily Loss: 5% = $1250</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Max Account Loss: 10% = $2500</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Minimum Trading: 10 Day/Month</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="text-base text-center text-gray-600">
                            <span className="text-2xl text-purple-700 font-small px-2">$99</span>
                            /Month
                        </p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="flex justify-center pb-8">
                        <button className="focus:outline-none bg-white hover:bg-gray-100 transition duration-150 ease-in-out hover:border-purple-700 hover:text-white hover:bg-purple-700 rounded border border-purple-600 text-purple-600 px-6 py-2 text-sm">Get Funded Now</button>
                    </div>
                </div>
                <div className="w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border-4 hover:border-purple-700 bg-white" data-aos='slide-up' data-aos-duration="1800">
                    <div className="pt-8 px-8 pb-6">
                        <h4 className="text-2xl text-center text-gray-800 pb-3 font-bold">Confident Trader</h4>
                        <p className="text-sm text-center text-gray-600 pb-5 leading-normal px-10">More power for company sites and heavy traffic. Growing business.</p>
                        <p className="text-base text-center text-gray-600 font-bold">
                            $ <span className="text-4xl text-purple-700 font-medium px-2">50,000</span>
                            /mo
                        </p>
                    </div>
                    <div className="flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100">
                        <p className="text-base text-gray-600 font-bold">Annual Billing</p>
                        <div className="cursor-pointer w-12 h-6 rounded-full bg-purple-700 relative shadow-sm">
                            <input defaultChecked type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle1" className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
                        </div>
                    </div>
                    <div className="pt-6 pr-8 pl-8">
                        <ul className="flex flex-col items-center">
                        <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Max Daily Loss: 5% = $1250</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Max Account Loss: 10% = $2500</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Minimum Trading: 10 Day/Month</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="text-base text-center text-gray-600">
                            <span className="text-2xl text-purple-700 font-small px-2">$199</span>
                            /Month
                        </p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center pb-8">
                        <button className="focus:outline-none bg-purple-700 transition duration-150 ease-in-out hover:bg-purple-600 rounded text-white px-6 py-2 text-sm">Get Funded Now</button>
                    </div>
                </div>
                <div className="w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border border-gray-300 hover:border-purple-700 hover:translate-50% bg-white" data-aos='slide-up' data-aos-duration="2400">
                    <div className="pt-8 px-8 pb-6">
                        <h4 className="text-2xl text-center text-gray-800 pb-3 font-bold">Expert Trader</h4>
                        <p className="text-sm text-center text-gray-600 pb-5 leading-normal px-10">Support multi-complex sites and high-resolution photos and videos.</p>
                        <p className="text-base text-center text-gray-600 font-bold">
                            $ <span className="text-4xl text-purple-700 font-medium px-2">100,000</span>
                            /mo
                        </p>
                    </div>
                    <div className="flex justify-between pl-12 pr-12 pt-4 pb-4 bg-gray-100">
                        <p className="text-base text-gray-600 font-bold">Annual Billing</p>
                        <div className="cursor-pointer w-12 h-6 rounded-full bg-purple-700 relative shadow-sm">
                            <input type="checkbox" name="toggle" id="toggle2" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle2" className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
                        </div>
                    </div>
                    <div className="pt-6 pr-8 pl-8">
                        <ul className="flex flex-col items-center">
                        <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Max Daily Loss: 5% = $1250</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Max Account Loss: 10% = $2500</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="pl-2 text-gray-600 text-base">Minimum Trading: 10 Day/Month</p>
                            </li>
                            <li className="flex items-center mb-8">
                                <div className="h-1 w-1 rounded-full bg-purple-700" />
                                <p className="text-base text-center text-gray-600">
                            <span className="text-2xl text-purple-700 font-small px-2">$299</span>
                            /Month
                        </p>
                            </li>
                        
                        </ul>
                    </div>
                    <div className="flex justify-center pb-8">
                        <button className="focus:outline-none bg-white hover:bg-gray-100 transition duration-150 ease-in-out hover:border-purple-700 hover:text-white hover:bg-purple-700 transition duration-150 ease-in-out  hover:text-white rounded border border-purple-600 text-purple-600 px-6 py-2 text-sm">Get Funded Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Pricing;