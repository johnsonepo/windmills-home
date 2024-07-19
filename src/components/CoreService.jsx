import React from 'react';

const CoreServices = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 md:px-12 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Core Services</h1>
                <p className="text-lg mb-8 text-gray-600">
                    We provide professional and quality services (with an in-house panel of MRICS-qualified surveyors/RICS Registered valuers, who adhere to RICS & RERA Standards), derived from teamwork, passion, governance and strong leadership. Our core services include asset valuation, building consulting services and brokerage.
                </p>
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Asset Valuation</h2>
                        <p className="text-gray-400">
                            We value all types of tangible (i.e. physical) assets, which includes residential and commercial property, as well as plant and machinery and equipment, industrial infrastructure installations, and trading properties.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Building Consulting Services</h2>
                        <p className="text-gray-400">
                            We provide building consulting services in the areas of reserve fund (or “sinking fund”) studies; service charge cost modelling and apportionment, building condition audits (or “schedules of condition”), technical snagging reviews (of buildings just prior to completion of construction), and reinstatement cost assessments/valuations (usually for buildings insurance purposes).
                        </p>
                        <p className="text-gray-500 mt-4">
                            These services are supplemented with advanced research, and state-of-the-art market trend analysis which help our clients to make timely and informed decisions and corrective measures if deemed necessary.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Brokerage</h2>
                        <p className="text-gray-500">
                            Be it buying, selling or leasing properties, Windmills has in-depth market knowledge, unparalleled contacts with buyers/sellers/tenants, and in-house expertise to assist in all aspects of real estate transactions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreServices;
