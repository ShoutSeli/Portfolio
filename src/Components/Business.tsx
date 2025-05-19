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

    const workExperiences = [
        {
            company: "Afriam Network",
            duration: "2024 - Now",
            position: "Customer Service Officer",
            duties: [
                "Answering calls through the Livevox software to provide technical support to customers regarding their app or the website.",
                "Providing settlement plans to help customers settle their loan balances.",
                "Studying in detail everything about the companies, especially their products and services to assist and solve customer end issues.",
                "Taking notes during the call in the PIMS software while calculating settlement amounts and dispositioning calls both on PIMS and Livevox."
            ],
            imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            company: "Ministry of Parliamentary Affairs",
            duration: "2023 - 2024",
            position: "National Service",
            duties: [
                "IT Support",
                "Data analytics",
                "Graphic designing",
                "Media Editing",
                "Writing memos and reports",
                "Writing notes and minutes at meetings."
            ],
            imageUrl: "https://images.unsplash.com/photo-1554007460-791a7b8945d8?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            company: "Prudential Life Insurance",
            duration: "2022 - 2023",
            position: "Financial Consultant",
            duties: [
                "Convince potential customers to buy company policies.",
                "Study and understand the company's policies.",
                "Meet weekly sales targets.",
                "Sign up new customers into the system.",
                "Calculating customer’s contributions and sum assured using the Prucalc application."
            ],
            imageUrl: "https://plus.unsplash.com/premium_photo-1661335273735-28702a0e32a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            company: "Ridge Church School",
            duration: "2021 - 2022",
            position: "Teacher's Aide",
            duties: [
                "Record pupils’ assessments.",
                "Mark assignments and exam scripts.",
                "Prepare lessons.",
                "Teach and control pupils when the teacher is not around."
            ],
            imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    return (
        <div className="p-4">
            <div 
                className="flex flex-col rounded-xl md:flex-row items-center justify-between w-full bg-cover bg-center bg-no-repeat h-50 md:h-[400px]"
                style={{ backgroundImage: "url('/Images/KeyboardBG.jpg')" }}
            >
                <h1 className="text-4xl md:text-6xl text-center md:text-left text-white md:text-black font-mono my-4 md:ml-4">
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

            {/* Professional CV Section with Full-Width Vertical Tiles */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Professional Work Experience</h2>
                {workExperiences.map((experience, index) => (
                    <div key={index} className="relative w-full mb-6 rounded-lg overflow-hidden h-auto">
                        <img src={experience.imageUrl} alt={experience.company} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-start text-white p-4">
                            <h3 className="text-2xl font-semibold">{experience.company}</h3>
                            <h4 className="font-bold">{experience.position} ({experience.duration})</h4>
                            <ul className="list-disc list-inside mt-2">
                                {experience.duties.map((duty, dutyIndex) => (
                                    <li key={dutyIndex} className="text-sm">{duty}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Business;
