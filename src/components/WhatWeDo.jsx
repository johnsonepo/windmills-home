import React from 'react';

const WhatWeDo = () => {
    const services = [
        {
            image: '/img/icon3.png',
            heading: 'Asset Valuation Services',
            description: 'Residential, Commercial, Industrial, Trading Properties, Market Research…',
        },
        {
            image: '/img/industrial-icon2.png',
            heading: 'Commercial Property Valuation',
            description: 'Machinery, Equipment, Marine Equipment, Infrastructural installations, Companies…',
        },
        {
            image: '/img/icon1.png',
            heading: 'Building Consulting',
            description: 'Capital Reserve Study, Service Cost Allocation, Technical Snagging, Structural Survey',
        },
        {
            image: '/img/brokerage-icon.png',
            heading: 'Real Estate Brokerage',
            description: 'Property Purchase, Property Sale, Property Leasing, Property Supervision…',
        },
    ];

    return (
        <div className="px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-4 gap-1">
                {services.map((service, index) => (
                    <div key={index} className="p-4 flex flex-col items-center">
                        <img src={service.image} alt={`Service ${index}`} className="h-[120px] object-cover mb-4 rounded-full" />
                        <h2 className="text-xl font-semibold text-center mb-2 text-primary">{service.heading}</h2>
                        <p className="text-center text-gray-500 text-nm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
