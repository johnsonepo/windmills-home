import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";
import SocialMedia from "../components/SocialMedia";
import Navbar from "../components/Navbar";
import MainSlider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import TotalExperience from "../components/TotalExperience";
import CoreServices from "../components/CoreService";
import WhatWeDo from "../components/WhatWeDo";
import MarketRecognition from "../components/MarketRecognition";
import MajorClients from "../components/MajorClients";
import TestimonialSlider from "../../public/img/TestimonialSlider";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";

const Home = () => {
    const getCurrentDate = () => {
        const options = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
        const today = new Date();
        return today.toLocaleDateString('en-US', options);
    };
    const today = getCurrentDate();

    return (
        <div className="overflow-x-hidden">
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="bg-primary w-full h-[35px] flex items-center justify-between text-white px-4">
                    <div className="flex items-center space-x-2">
                        <CalendarDaysIcon className="h-6 w-6" />
                        <p className="text-sm">{today}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:ml-auto space-y-3 sm:space-y-0 sm:space-x-10">
                        <div className="flex items-center space-x-2">
                            <span className="">CEO</span>
                            <PhoneIcon className="h-6 w-6" />
                            <p className="text-sm">+971 52 472 9083</p>
                        </div>
                        <div className="flex items-center">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <div className = "border-t border-gray-200">
                    <Navbar />
                </div>
            </div>
            <div className="pt-[157px]"> 
                <MainSlider />
            </div>
            <div className="">
                <div className="px-3 md:px-6 lg:px-[320px]">
                    <AboutUs />
                </div>
                <div className="mb-12 mt-6 px-3 md:px-6 lg:px-[320px]">
                    <Services />
                </div>
                <div className="w-full">
                    <TotalExperience />
                </div>
                <div className="ppx-3 md:px-6 lg:px-[320px]">
                    <CoreServices />
                </div>
                <div className="mb-12 mt-6 ppx-3 md:px-6 lg:px-[320px]">
                    <WhatWeDo />
                </div>
                <div className="mb-12 mt-6 ">
                    <MarketRecognition />
                </div>
                <div className="w-full mb-10">
                    <MajorClients />
                </div>
                <div className = "mb-12 mt-20 px-3 md:px-6 lg:px-[320px]">
                    <TestimonialSlider />
                </div>
                <div className = "mb-12 px-3 md:px-6 lg:px-[320px]">
                    <Footer />
                </div>
                <div className="w-full">
                    <FooterBottom />
                </div>
            </div>
        </div>
    );
};

export default Home;
