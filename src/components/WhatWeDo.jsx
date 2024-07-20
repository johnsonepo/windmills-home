import Services from "../data/whats-we-do";

const WhatWeDo = () => {
    return (
        <div className="px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-4 gap-1">
                {Services.map((service, index) => (
                    <div key={index} className="p-4 flex flex-col items-center">
                        <img src={service.image} alt={`Service ${index}`} className="h-[120px] object-cover mb-4 rounded-full" />
                        <h2 className="text-lg text-center mb-2 text-primary">{service.heading}</h2>
                        <p className="text-center text-gray-500 text-nm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
