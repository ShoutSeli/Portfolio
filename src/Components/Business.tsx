import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Business: React.FC = () => {
    const services = [
        {
            title: "Artificial Intelligence",
            description: "Innovative solutions using AI technologies."
        },
        {
            title: "Web Development",
            description: "Building responsive and dynamic websites."
        },
        {
            title: "Mobile App Development",
            description: "Creating user-friendly mobile applications."
        },
        {
            title: "SEO Engineering",
            description: "Optimizing websites for better search visibility."
        },
        {
            title: "Content Marketing",
            description: "Crafting engaging content to attract audiences."
        },
        {
            title: "Cyber Security",
            description: "Protecting systems from cyber threats."
        },
        {
            title: "Assembly Programming",
            description: "Low-level programming for hardware control."
        },
        {
            title: "Arduino & Robotics",
            description: "Developing projects with Arduino and robotics."
        }
    ];

    return (
        <div className="p-4">
            <div 
                className="flex flex-col md:flex-row items-center justify-between w-full bg-cover bg-center bg-no-repeat h-[500px]"
                style={{ backgroundImage: "url('/Images/laptopBG.jpg')" }}
>
                <h1 className="text-4xl md:text-6xl text-center md:text-left text-white">
                        A comprehensive look <br /> at what we offer and <br /> how we deliver
                </h1>
            </div>

            <p className="mt-2 text-center md:text-left md:text-3xl">A look into our services <br /> and how we offer <br /> solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-gray-200 text-black font-bold p-6 rounded-lg transition duration-200 relative overflow-hidden h-48">
                        <span className="text-lg">{service.title}</span>
                        <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                        <FaArrowRight className="absolute bottom-2 right-2 text-2xl" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-200"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Business;
