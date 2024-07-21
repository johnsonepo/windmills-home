import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from '../data/slider';

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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

    return (
        <div className="w-full">
            <Slider {...settings}>
                {sliderData.map((slide, key) => (
                    <div key={key} className="relative">
                        {slide.title && (
                            <div className={`absolute text-blue-600 inset-0 flex flex-col justify-center items-center text-center transition-transform duration-1000 ease-out delay-1000 ${show ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}>
                                <h2 className="text-2xl md:text-[40px] lg:text-[65px] font-bold">{slide.title}</h2>
                                {slide.subtitle && (
                                    <p className="mt-2 md:mt-8 text-2xl md:text-4xl lg:text-5xl">{slide.subtitle}</p>
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
