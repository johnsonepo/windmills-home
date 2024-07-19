import React from 'react';

const Services = () => {
    const services = [
        {
            image: '/img/winmdills-1.jpeg',
            heading: 'Results',
            description: 'Objective Solutions, Scientific Valuations, Transparency, Disclosure, Client Satisfaction…',
        },
        {
            image: '/img/winmdills-1.jpeg',
            heading: 'Value',
            description: 'Affordable, Value for Money, Negotiable Fee for property portfolio valuations….',
        },
        {
            image: '/img/winmdills-1.jpeg',
            heading: 'Service',
            description: 'Attitude, Efficient Turn Around Time, Most Assets Valuation, Expertise in Non Freehold Properties…',
        },
        {
            image: '/img/winmdills-1.jpeg',
            heading: 'Ethics',
            description: 'RICS UK, RERA Appreciation on Compliance, ISO Certifications, CSR…',
        },
    ];

    return (
        <div className="px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-4 gap-1">
                {services.map((service, index) => (
                    <div key={index} className="p-4 flex flex-col items-center">
                        <img src={service.image} alt={`Service ${index}`} className="h-[150px] object-cover mb-4 rounded-full" />
                        <h2 className="text-xl font-semibold text-center mb-2 text-primary">{service.heading}</h2>
                        <p className="text-center text-gray-500 text-nm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
