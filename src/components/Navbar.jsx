import { useState, useRef } from 'react';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Website from '../data/website';
import menuItems from '../data/navbar-menu';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedSubmenuIndex, setExpandedSubmenuIndex] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (index) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveIndex(null);
        }, 300);
    };

    const handleSubmenuMouseEnter = (index) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveIndex(index);
    };

    const handleSubmenuMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveIndex(null);
        }, 300);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSubmenu = (index) => {
        if (expandedSubmenuIndex === index) {
            setExpandedSubmenuIndex(null);
        } else {
            setExpandedSubmenuIndex(index);
        }
    };

    return (
        <>
            <div className="hidden mdl:block bg-white w-full">
                <div className="flex items-center justify-between h-[120px] px-8">
                    <img src={Website.logo} className="w-32 md:w-52" />
                    <div className="flex items-center justify-end w-full gap-5">  
                        <div className="flex justify-end w-full space-x-6">
                            <ul className="flex items-center space-x-3 lg:space-x-4 xl:space-x-10 font-extralight">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave} >
                                        <a href={item.href}
                                            className="hover:text-primary uppercase">
                                            {item.title}
                                        </a>
                                        {item.submenu && (
                                            <div
                                                className={`absolute left-0 right-0 top-full mt-1 bg-white shadow-lg border border-gray-200 w-56 z-10 transition-opacity duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
                                                onMouseEnter={() => handleSubmenuMouseEnter(index)}
                                                onMouseLeave={handleSubmenuMouseLeave}>
                                                <ul>
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <a href={subItem.href} className="block px-4 py-2 hover:bg-gray-100 text-sm">
                                                                {subItem.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
                    </div>
                </div>
            </div>
            <div className='mdl:hidden bg-white w-full fixed top-0 h-24 z-[999999]'>
                <div className="flex items-center justify-between h-full px-8">
                    <button onClick={toggleMobileMenu} className="text-2xl">
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="w-8 h-8 text-gray-700" />
                        ) : (
                            <Bars3Icon className="w-8 h-8 text-gray-700" />
                        )}
                    </button>
                    <img src={Website.logo} className="w-32 mx-auto" />
                    <div>
                    <MagnifyingGlassIcon className="w-8 h-8 text-gray-700" />
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="bg-white w-full">
                        <ul className="flex flex-col items-center space-y-1 font-extralight mt-0">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative w-full pl-4">
                                    <div className="flex justify-between items-center px-4 py-2 pr-8">
                                        <a href={item.href} className=" block">
                                            {item.title}
                                        </a>
                                        {item.submenu && (
                                            <button onClick={() => toggleSubmenu(index)} className="focus:outline-none mr-8">
                                                {expandedSubmenuIndex === index ? (
                                                    <ChevronUpIcon className="w-5 h-5 text-gray-700" />
                                                ) : (
                                                    <ChevronDownIcon className="w-5 h-5 text-gray-700 " />
                                                )}
                                            </button>
                                        )}
                                    </div>
                                    {item.submenu && expandedSubmenuIndex === index && (
                                        <div className="pl-6">
                                            <ul>
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a href={subItem.href} className="block px-4 py-2">
                                                            {subItem.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
