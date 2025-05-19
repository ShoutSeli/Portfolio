import React from 'react';
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Personal: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <h1 className="text-5xl md:text-9xl text-center md:text-left">Software <br /> Engineer</h1>
                <img 
                    src="/Images/WhatsAppIMG01.jpeg" 
                    alt="Seli"
                    className="w-full md:w-auto h-64 object-cover rounded-xl mt-4 md:mt-0 md:mr-32" 
                />
            </div>
            <p className="text-lg text-center mt-4 mb-8 px-4 md:px-0 md:ml-190">
                Hi, I'm Samuel Yaw Mawuli Agbemeseli, <br /> a problem solver <br /> and a software developer <br /> creating intuitive <br /> digital experiences.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mt-4">
                <a 
                    href="https://x.com/selidevJS" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                >
                    <FaTwitter className="mr-2" /> Twitter/X
                </a>
                <a 
                    href="https://github.com/ShoutSeli" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                >
                    <FaGithub className="mr-2" /> GitHub
                </a>
                <a 
                    href="https://wa.me/+233549567324" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                >
                    <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
                <a 
                    href="mailto:samuelyawmawuli094@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                >
                    <FaEnvelope className="mr-2" /> Email
                </a>
            </div>
        </div>
    );
};

export default Personal;
