import AboutUsData from "../data/about-us";
const AboutUs = () => {
    return (
        <div className="mt-14 text-gray-500">
            <h1 className="text-center text-primary font-semibold text-3xl mb-8">{AboutUsData.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-3 gap-4 w-full px-4">
                <div className="p-4 space-y-4 md:col-span-1 mlg:col-span-2">
                   {AboutUsData.content.map((p, key)=>(
                    <p key={key}>{p}</p>
                   )) }
                </div>
                <div className="p-4 md:col-span-1 mlg:col-span-1">
                    <img src={AboutUsData.image} className="w-full h-auto object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
