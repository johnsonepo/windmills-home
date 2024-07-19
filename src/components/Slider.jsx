import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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

    return (
        <div className="w-full">
            <Slider {...settings}>
                <div>
                    <img src="/img/slider/burj1.jpg" alt="Slide 1" className="w-full h-64 md:h-80 lg:h-[900px] object-cover" />
                </div>
                <div>
                    <img src="/img/slider/Slide-5.jpeg" alt="Slide 2" className="w-full h-64 md:h-80 lg:h-[900px] object-cover" />
                </div>
                <div>
                    <img src="/img/slider/burj1.jpg" alt="Slide 3" className="w-full h-64 md:h-80 lg:h-[900px] object-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default MainSlider;
