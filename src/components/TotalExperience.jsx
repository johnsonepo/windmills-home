import { useState, useEffect } from 'react';
import TotalExperienceData from '../data/total-experience';

const useCountUp = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const interval = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (endTime - startTime), 1);
            setCount(Math.floor(progress * end));
            
            if (progress === 1) clearInterval(interval);
        }, 50);

        return () => clearInterval(interval);
    }, [end, duration]);

    return new Intl.NumberFormat().format(count);
};

const TotalExperience = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat bg-fixed h-[600px] md:h-[450px] overflow-hidden mt-10"
            style={{ backgroundImage: `url(${TotalExperienceData.image})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white p-4">
                <div className="relative w-full max-w-screen-xl mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-3xl font-bold mb-10 text-center">{TotalExperienceData.title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        <div>
                            <h2 className="text-4xl font-bold">{useCountUp(300, 8)}+</h2>
                            <p className="text-lg">Happy Customers</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{useCountUp(40000, 3)}+</h2>
                            <p className="text-lg">Advisory and Valuations</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{useCountUp(150, 3)}+</h2>
                            <p className="text-lg">Billion AED Transactions</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{useCountUp(45, 3)}</h2>
                            <p className="text-lg">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalExperience;
