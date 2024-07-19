import React from 'react';

const recognitions = [
    {
        image: '/img/recognitions/meednew.png',
        awards: [
            'Consultancy of the Year - Finalist - 2018',
            'People and Culture - Finalist - 2019',
            'Micro Business - Finalist - 2019',
            'Customer Focus - Finalist - 2019',
        ],
    },
    {
        image: '/img/recognitions/dednew.png',
        awards: [
            'Professional Services - Winner - 2018',
            'Professional Services - Runner Up - 2019',
            'Int’l Business Excellence Awards',
        ],
    },
    {
        image: '/img/recognitions/dldnews.png',
        awards: [
            'Top Valuation Company Rating',
            'Real Estate Consulting - Finalist - 2019',
            'Real Estate Consulting - Runner Up - 2018',
            'Gulf Real Estate Awards',
        ],
    },
    {
        image: '/img/recognitions/nbc-awards-logo-small-copy.png',
        awards: [
            'Accelerator Award - Finalist - 2019',
            'Sustainable Innovation Award - Finalist - 2019',
            'NBC UAE Awards 2019',
        ],
    },
    {
        image: '/img/recognitions/Dubai-rera.png',
        awards: [
            'Registered Valuers',
            'RERA Valuations Services',
            'Silver Rated Valuation Firm - 2019',
        ],
    },
    {
        image: '/img/recognitions/fuaeci.png',
        awards: [
            'Yes Emirates',
            'Certificate of Appreciation',
            'Federation of UAE Chamber',
        ],
    },
];

const MarketRecognition = () => {
    return (
        <div className="bg-[#F6F6F6] my-12 w-full">
            <div className="px-4 py-14 text-center md:px-6 lg:px-72 xlg:px-[360px]">
                <h1 className="text-3xl font-bold py-14 text-center text-primary">Market Recognition</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {recognitions.map((recognition, index) => (
                        <div key={index} className="p-2">
                            <img src={recognition.image} alt={`Recognition ${index}`} className="h-[100px] w-full object-contain mb-3 " />
                            <div className="p-2">
                                <ul className="">
                                    {recognition.awards.map((award, idx) => (
                                        <li key={idx} className="text-gray-500">{award}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketRecognition;
