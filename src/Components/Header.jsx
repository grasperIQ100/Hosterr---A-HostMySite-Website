import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <img src="./assets/Logo.svg" alt="logo" />
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl font-lato">Hoster is hiring</button>
            </div>
            <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>
            </ul>
            <div className="hidden lg:flex items-center font-lato gap-6">
                <a className="text-gray-400 font-lato" href="#">Sign In</a>
                <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
            </div>
            <div className="lg:hidden">
                <FaBars onClick={toggleSidebar} className="cursor-pointer" />
            </div>

            {/* Sidebar */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 50,
                    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '16rem',
                        height: '100%',
                        backgroundColor: 'transparent',
                        padding: '1rem',
                    }}
                >
                    <AiOutlineClose onClick={toggleSidebar} className="cursor-pointer mb-4 text-white" />
                    <ul className="flex flex-col gap-4 font-lato text-white">
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">Find Domain</a></li>
                        <li><a href="#">Why Hoster</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
