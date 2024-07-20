import MajorClientsData from "../data/major-client";

const MajorClients = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat bg-fixed h-[600px] md:h-[450px] overflow-hidden mt-10"
            style={{ backgroundImage: `url(${MajorClientsData.image})` }}
        >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-10 flex flex-col items-center justify-center text-white p-4">
                <div className="relative w-full max-w-screen-xl mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-4">{MajorClientsData.title}</h1>
                    <h3 className=" text-xl mb-3">({MajorClientsData.subtitle})</h3>
                    <p>{MajorClientsData.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center mt-3">
                        icons here...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MajorClients;
