import React from 'react';
import Layout from './Components/Layout';
import { FaTwitter, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const App: React.FC = () => {
    return (
        <Layout>
            <div className="flex items-center justify-between p-4">
                <h1 className="text-9xl">Software <br />Engineer</h1>
                <img 
                    src="/Images/WhatsAppIMG01.jpeg" // Replace with your image URL
                    alt="Seli"
                    className="w-auto h-64 object-cover rounded-xl mr-12" // Adjust height as needed
                />
            </div>
            <p className="text-lg text-center mt-4">
                Hi, I'm Seli, a problem solver and a software developer creating intuitive digital experiences.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
                <a 
                    href="https://x.com/selidevJS" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaTwitter className="mr-2" /> Twitter/X
                </a>
                <a 
                    href="https://github.com/ShoutSeli" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaGithub className="mr-2" /> GitHub
                </a>
                <a 
                    href="https://wa.me/+233549567324" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
                <a 
                    href="mailto:samuelyawmawuli094@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaEnvelope className="mr-2" /> Email
                </a>
            </div>
        </Layout>
    );
};

export default App;
