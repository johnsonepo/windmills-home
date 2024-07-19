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

    const imgStyle = {
        height: '900px', 
        objectFit: 'cover',
        width: '100%'
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                <div>
                    <img src="/img/slider/burj1.jpg" alt="Slide 1" style={imgStyle} />
                </div>
                <div>
                    <img src="/img/slider/Slide-5.jpeg" alt="Slide 2" style={imgStyle} />
                </div>
                <div>
                    <img src="/img/slider/burj1.jpg" alt="Slide 3" style={imgStyle} />
                </div>
            </Slider>
        </div>
    );
};

export default MainSlider;
