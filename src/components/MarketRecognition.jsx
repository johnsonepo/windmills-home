import RecognitionData from "../data/recognitions";

const MarketRecognition = () => {
    return (
        <div className="bg-[#F6F6F6] my-12 w-full">
            <div className="px-4 py-14 text-center md:px-6 lg:px-72 xlg:px-[360px]">
                <h1 className="text-3xl font-bold py-14 text-center text-primary">Market Recognition</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {RecognitionData.map((recognition, index) => (
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
