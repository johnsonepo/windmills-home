import LiveChat from '/img/livechat.png';
const FooterBottom = () => {
    return (
        <div className=" relative">
            <div>
                <img src={LiveChat} className=" fixed bottom-14 right-6 z-50 size-20 hover:cursor-pointer"/>
            </div>
            <div className="h-20 bg-primary flex items-center justify-center w-full">
                <p className="text-white text-center">Copyright © 2022 Windmills Group (Test)</p>
            </div>
        </div>
    );
};

export default FooterBottom;
