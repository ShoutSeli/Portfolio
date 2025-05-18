import React from 'react';
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope, FaAsymmetrik } from 'react-icons/fa';


const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-4 text-black">
            <div className="flex items-center justify-center gap-2 my-6">
                    <FaAsymmetrik className="text-blue-900 text-4xl" />
                    <h1 className="text-3xl font-extrabold text-blue-900 tracking-wide">Seli</h1>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:underline">Personal</a>
                <a href="#" className="hover:underline">Business</a>
                <a href="#" className="hover:underline">Partner</a>
                <a href="#" className="hover:underline">About Us</a>
            </div>
            <button className="border hover:bg-gray-800 hover:text-white text-black font-bold py-2 px-4 rounded-xl">
                Sign In
            </button>
        </nav>
    );
};


const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white my-4">
            <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <div className="text-8xl font-bold mb-7 italic">Let's Connect <br />There</div>
                <a href="https://x.com/selidevJS" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl mr-12 w-32 h-18">
                    Hire me
                </button>
                </a>
            </div>

            <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <div>
                    <div className="flex items-center gap-2 my-6">
                        <FaAsymmetrik className="text-white-900 text-4xl" />
                        <h1 className="text-3xl font-extrabold text-white-900 tracking-wide">Seli</h1>
                    </div>
                    <p className="text-gray-400 mb-4">We produce cutting edge web and mobile applications <br ></br> that use artificial intelligence.</p>
                    <div className="flex space-x-4 mt-2">
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
                <div className="flex space-x-10 mr-12">
                    <div>
                        <div className="text-sm font-bold">Address</div>
                        <p className="text-gray-400">Accra, Ghana</p>
                    </div>
                    <div>
                        <div className="text-sm font-bold">Email</div>
                        <p className="text-gray-400">samuelyawmawuli094@gmail.com</p>
                    </div>
                    <div>
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
