import React from 'react';
import {
    IconCircleX,
    IconAlertTriangle,
    IconCodeOff,
    IconBrain,
    IconCode,
    IconSquareRoundedCheck,
    IconArrowRight
} from '@tabler/icons-react';

// Import images
import instructorImage1 from '../assets/4def56cd38b39f0f64ea969b72ce5d743649e2a1.png';
import instructorImage2 from '../assets/e1ddc95363ed92ec9f5c13087eede4f274f836a2.png';

const WhatIsBootcamp = () => {
    // Problem points (left column with red icons)
    const problemPoints = [
        {
            icon: IconCircleX,
            title: "Jump directly into complex topics",
            description: "Many learners start React without a clear path, which leads to confusion and poor understanding of core concepts.",
            iconBgColor: "bg-red-50",
            iconColor: "text-red-500"
        },
        {
            icon: IconAlertTriangle,
            title: "Learn without understanding fundamentals",
            description: "Skipping the basics like components, state, and props makes it difficult to build confidence in React.",
            iconBgColor: "bg-red-50",
            iconColor: "text-red-500"
        },
        {
            icon: IconCodeOff,
            title: "Don't build real projects",
            description: "Watching tutorials without practical implementation results in limited real-world skills.",
            iconBgColor: "bg-red-50",
            iconColor: "text-red-500"
        }
    ];

    // Solution points (right column with green/purple icons)
    const solutionPoints = [
        {
            icon: IconBrain,
            title: "Teaching React from zero to project",
            description: "The bootcamp starts from React basics and gradually moves towards building complete applications.",
            iconBgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            icon: IconCode,
            title: "Explaining concepts in a simple way",
            description: "Each concept is explained in a beginner-friendly manner with live coding and practical examples.",
            iconBgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            icon: IconSquareRoundedCheck,
            title: "Making you build and deploy real apps",
            description: "You will build multiple mini apps and complete projects, and deploy them live using Vercel.",
            iconBgColor: "bg-green-50",
            iconColor: "text-green-600"
        }
    ];

    const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => (
        <div className="flex flex-col gap-3">
            <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
                <Icon size={24} className={iconColor} />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-inter font-semibold text-lg sm:text-xl leading-tight text-black">
                    {title}
                </h3>
                <p className="font-inter font-normal text-sm sm:text-base leading-6 text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="bg-[#F6F5FF] w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-28 py-10 md:py-16">
            <div className="w-full flex flex-col gap-10 md:gap-12 lg:gap-14">
                {/* Header Section */}
                <div className="flex flex-col gap-3 text-center max-w-4xl mx-auto">
                    <h2 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-black">
                        What is this Bootcamp?
                    </h2>
                    <p className="font-inter font-normal text-base sm:text-lg md:text-xl leading-6 md:leading-7 text-gray-600">
                        This is a 5-day beginner-friendly React.js bootcamp focused on learning by doing. Each day combines clear concepts, hands-on coding, and real project building to help you learn React the right way.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Side - Feature Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {/* Problem Column */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {problemPoints.map((point, index) => (
                                <FeatureCard key={index} {...point} />
                            ))}
                        </div>

                        {/* Solution Column */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {solutionPoints.map((point, index) => (
                                <FeatureCard key={index} {...point} />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Images (overlapping layered layout as per Figma) */}
                    <div className="w-full lg:w-2/5 relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]">
                        {/* Instructor portrait - on top */}
                        <div className="absolute right-0 top-0 w-3/5 h-full rounded-xl md:rounded-2xl overflow-hidden z-20 shadow-2xl">
                            <img
                                src={instructorImage2}
                                alt="Instructor portrait"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        {/* Instructor teaching React - behind */}
                        <div className="absolute left-0 top-8 sm:top-12 md:top-16 w-3/5 h-4/5 rounded-xl md:rounded-2xl overflow-hidden z-10">
                            <img
                                src={instructorImage1}
                                alt="Instructor teaching React"
                                className="w-full h-full object-cover object-right"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Integrated CTA Button */}
            <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-12">
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });

                        // Focus input after scroll
                        setTimeout(() => {
                            const mobileInput = document.querySelector('#registration-form input[name="fullName"]');
                            const desktopInput = document.querySelector('#registration-form-desktop input[name="fullName"]');

                            if (mobileInput && getComputedStyle(document.getElementById('registration-form')).display !== 'none') {
                                mobileInput.focus();
                            } else if (desktopInput) {
                                desktopInput.focus();
                            }
                        }, 1000);
                    }}
                    className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors text-white font-inter font-bold text-sm py-3 px-6 rounded-xl w-fit shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                    Register for Bootcamp
                    <IconArrowRight size={18} />
                </button>
            </div>
        </section>
    );
};

export default WhatIsBootcamp;
