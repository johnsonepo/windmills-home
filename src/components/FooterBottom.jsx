//import LiveChat from '/img/livechat.png';
import Website from "../data/website";
const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    const codebase = 'https://envoos.com';
    return (
        <div className=" relative">
            {/* <div>
                <img src={LiveChat} className=" fixed bottom-14 right-6 z-50 size-20 hover:cursor-pointer"/>
            </div> */}
            <div className="h-20 bg-primary flex items-center justify-center w-full">
                <p className="text-white text-center">Copyright © {currentYear} {Website.title} (<a href = {codebase} target="_blank">Codebase</a> )</p>
            </div>
        </div>
    );
};

export default FooterBottom;
