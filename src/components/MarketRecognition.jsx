import RecognitionData from "../data/recognitions";
import { motion } from "framer-motion";
import slideIn from "../utilities/animations/slide";

const MarketRecognition = () => {
    return (
        <div className="bg-[#F6F6F6] my-12 w-full">
            <div className="px-4 py-14 text-center md:px-6 lg:px-72 xlg:px-[360px]">
                <h1 className="text-3xl font-bold py-14 text-center text-primary">Market Recognition</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {RecognitionData.map((recognition, index) => (
                        <motion.div 
                            key={index} 
                            className="p-2"
                            variants={slideIn('up', 130, recognition.time)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0}}
                            >
                            <img src={recognition.image} alt={`Recognition ${index}`} className="h-[100px] w-full object-contain mb-3 " />
                            <div className="p-2">
                                <ul className="">
                                    {recognition.awards.map((award, idx) => (
                                        <li key={idx} className="text-gray-500">{award}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketRecognition;
