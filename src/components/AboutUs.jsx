import React from 'react';

const AboutUs = () => {
    return (
        <div className="mt-14 text-gray-400">
            <h1 className="text-center text-primary font-semibold text-3xl mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-3 gap-4 w-full px-4">
                <div className="p-4 space-y-4 md:col-span-1 mlg:col-span-2">
                    <p>
                        Established in 2016, Windmills Valuation Services is a leading valuation, advisory, and real estate brokerage firm in the United Arab Emirates. It has attained a consistent Gold ranking by the Dubai Land Department and Dubai Real Estate Regulatory Agency (RERA); it achieved the highest number of annual valuations in UAE in 2021; and the company has in its ranks a significant number of 5 Star valuers. The above attributes are a few key milestones achieved by us in this journey.
                    </p>
                    <p>
                        Operating from Dubai, Abu Dhabi, and Ajman, we value assets and real estate properties including Residential, Commercial, Industrial & Trading properties, as well as plant and machinery and equipment. We also provide insightful building surveying consulting and real estate brokerage services to our clients across all 7 Emirates.
                    </p>
                    <p>
                        Windmills is honored to be approved and empaneled with almost all of the banks in the UAE. We have completed over 40,000 valuations in the region over the last 7 years.
                    </p>
                    <p>
                        Our commitment to quality service and excellence has been recognized by apex authorities and organizations, including the Dubai Land Department, RERA, and the Middle East Economic Digest (MEED); as well as European authorities such as the Netherlands Business Council.
                    </p>
                    <p>
                        We have adopted a scientific approach for undertaking valuation. This has involved developing a proprietary tool for automatically computing valuation, transparently disclosing to our clients within the shortest time and at an extremely competitive price. We have successfully established industry benchmarks on superior valuation quality, best turnaround time, and competitive fees.
                    </p>
                    <p>
                        We are uniquely positioned amongst the property valuation companies in UAE by providing a value-added service through our insightful research reports every month, to facilitate clients in making decisions in their highly sensitive lending, investment, and portfolio management business.
                    </p>
                    <p>
                        Our in-house valuation application provides efficient and accurate market information and analysis while keeping your confidential information and documents secure.
                    </p>
                </div>
                <div className="p-4 md:col-span-1 mlg:col-span-1">
                    <img
                        src="/img/windmills-amesterdam-1.jpg"
                        className="w-full h-auto object-cover"
                        alt="Windmills"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
