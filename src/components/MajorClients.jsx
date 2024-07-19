
const MajorClients = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat bg-fixed h-[600px] md:h-[450px] overflow-hidden mt-10"
            style={{ backgroundImage: "url('/img/windmills-holland.jpg')" }}
        >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-10 flex flex-col items-center justify-center text-white p-4">
                <div className="relative w-full max-w-screen-xl mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-3">Team Experience</h1>
                    <h3 className=" text-2xl mb-2">(Windmills and Our Previously Owned and Managed Companies)</h3>
                    <p>In a short span of time, we have provided our professional services to different customer sectors, be it Government Authorities, Banks, Developers, Finance Companies, Insurance Companies, Real Estate Companies, Family Groups, Law Firms and Audit Firms both in the UAE and internationally, which is a true reflection of the confidence and trust shown in us by our valued clients.
                    <br/>We achieve this by providing accurate, unbiased, and timely submission of reports to our esteemed clients.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MajorClients;
