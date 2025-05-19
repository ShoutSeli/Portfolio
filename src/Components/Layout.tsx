import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope, FaAsymmetrik, FaBars, FaTimes  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-white shadow-md z-10 flex justify-between items-center p-4 text-black">
            <div className="flex items-center justify-center gap-2">
                <FaAsymmetrik className="text-blue-900 text-4xl" />
                <h1 className="text-3xl font-extrabold text-blue-900 tracking-wide">Seli</h1>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto top-16 left-0 md:top-0`}>
                <Link to="/" className="block p-2 hover:underline">Personal</Link>
                <Link to="/business" className="block p-2 hover:underline">Business</Link>
                <Link to="/partner" className="block p-2 hover:underline">Partner</Link>
                <Link to="/about-us" className="block p-2 hover:underline">About Us</Link>
                <button className="border hover:bg-gray-800 hover:text-white text-black font-bold py-2 px-4 rounded-xl mt-4 mb-4 ml-1 md:mt-0">
                Sign In
                </button>
            </div>
        </nav>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white my-4">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-600">
                <div className="text-4xl md:text-8xl font-bold mb-7 italic text-center md:text-left">Let's Connect <br />There</div>
                <a href="https://x.com/selidevJS" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl mr-12 w-32 h-18">
                        Hire me
                    </button>
                </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-600">
                <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 my-6 justify-center md:justify-start">
                        <FaAsymmetrik className="text-white-900 text-4xl" />
                        <h1 className="text-3xl font-extrabold text-white-900 tracking-wide">Seli</h1>
                    </div>
                    <p className="text-gray-400 mb-4">We produce cutting edge web and mobile applications <br /> that use artificial intelligence.</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <a href="https://x.com/selidevJS" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="https://github.com/ShoutSeli" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://wa.me/+233549567324" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-2xl" />
                        </a>
                        <a href="mailto:samuelyawmawuli094@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 mr-12 mt-4 md:mt-0">
                    <div className="text-center md:text-left">
                        <div className="text-sm font-bold">Address</div>
                        <p className="text-gray-400">Accra, Ghana</p>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm font-bold">Email</div>
                        <p className="text-gray-400">samuelyawmawuli094@gmail.com</p>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm font-bold">Phone</div>
                        <p className="text-gray-400">+233201802290</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-4">
                <p>&copy; 2025 Seli. All rights reserved.</p>
            </div>
        </footer>
    );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
