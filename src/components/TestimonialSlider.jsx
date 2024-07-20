import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        image: '/img/testimonials/1.png',
    },
    {
        image: '/img/testimonials/2.png',
    },
    {
        image: '/img/testimonials/3.png',
    },
    {
        image: '/img/testimonials/4.png',
    },
    {
        image: '/img/testimonials/5.png',
    },
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px',
    };

    return (
        <div className="w-full">
            <div className="max-w-screen-lg mx-auto px-4 h-[330px]">
                <h2 className="text-3xl font-bold text-center mb-2 text-primary pt-20">Client Testimonials</h2>
                <h3 className="text-lg text-center mb-8 text-gray-500">(Windmills and Our Previously Owned and Managed Companies)</h3>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex justify-center items-center px-4">
                            <div className="flex justify-center items-center">
                                <img
                                    src={testimonial.image}
                                    alt={`Testimonial ${index + 1}`}
                                    className="w-[330px] h-[180px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
