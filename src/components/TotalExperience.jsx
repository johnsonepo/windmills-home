import React from 'react';

const TotalExperience = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat bg-fixed h-[600px] md:h-[450px] overflow-hidden mt-10"
            style={{ backgroundImage: "url('/img/windmills.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white p-4">
                <div className="relative w-full max-w-screen-xl mx-[320px] px-4 py-8 ">
                    <h1 className="text-3xl md:text-3xl font-bold mb-10 text-center">Team Experience</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        <div>
                            <h2 className="text-2xl font-bold">300+</h2>
                            <p className="text-lg">Happy Customers</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">40,000+</h2>
                            <p className="text-lg">Advisory and Valuations</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">150+</h2>
                            <p className="text-lg">Billion AED Transactions</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">45</h2>
                            <p className="text-lg">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalExperience;
