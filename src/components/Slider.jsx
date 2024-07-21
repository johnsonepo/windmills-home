import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from '../data/slider';
import { motion } from 'framer-motion';
import { slideInText } from '../utilities/animations/slide';

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        beforeChange: () => setShow(false),
        afterChange: () => setTimeout(() => setShow(true), 500),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const renderAnimatedText = (text, direction, fromPosition, delay, transition) => {
        const animatedChars = slideInText(text, direction, fromPosition, delay, transition);
        return animatedChars.map(({ char, animation }, index) => (
            <motion.span key={index} initial="hidden" animate={show ? "show" : "hidden"} variants={animation}>
                {char}
            </motion.span>
        ));
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {sliderData.map((slide, key) => (
                    <div key={key} className="relative">
                        {slide.title && (
                            <div className={`absolute text-blue-600 inset-0 flex flex-col justify-center items-start p-4 transition-transform duration-1000 ease-out delay-1000 ${show ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}>
                                <h2 className="pl-3 lg:pl-8 text-2xl md:text-[40px] lg:text-[65px] font-bold text-left">
                                    {renderAnimatedText(slide.title, 'left', -30, 0.5, 6.0)}
                                </h2>
                                {slide.subtitle && (
                                    <p className="pl-3 lg:pl-8 mt-2 md:mt-8 text-2xl md:text-4xl lg:text-5xl">
                                        {renderAnimatedText(slide.subtitle, 'right', 30, 0.7, 3.0)}
                                    </p>
                                )}
                            </div>
                        )}
                        <img src={slide.image} className="w-full h-64 md:h-80 lg:h-[730px] object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainSlider;
