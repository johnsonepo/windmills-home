import Services from "../data/whats-we-do";
import { motion } from "framer-motion";
import slideIn from "../utilities/animations/slide";

const WhatWeDo = () => {
    return (
        <div className="px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-4 gap-1">
                {Services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="p-4 flex flex-col items-center"
                        variants={slideIn('up', 100, service.time)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0}}
                        >
                        <img src={service.image} alt={`Service ${index}`} className="h-[120px] object-cover mb-4 rounded-full" />
                        <h2 className="text-lg text-center mb-2 text-primary">{service.heading}</h2>
                        <p className="text-center text-gray-500 text-nm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
