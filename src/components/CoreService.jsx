import coreServicesData from '../data/core-service';

const CoreServices = () => {
    return (
        <div className="py-16 px-4">
            <div className=" w-5xl mx-auto">
                <h1 className="text-xl font-bold mb-8 text-primary text-center">{coreServicesData.title}</h1>
                <p className="text-gray-500 mt-4">
                    {coreServicesData.description}
                </p>
                <div className="space-y-8">
                    {coreServicesData.services.map((service, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-semibold mb-4 text-primary text-center">{service.title}</h2>
                            {service.description.map((p, key) => (
                                <p key={key} className="text-gray-500 mt-4">{p}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreServices;
