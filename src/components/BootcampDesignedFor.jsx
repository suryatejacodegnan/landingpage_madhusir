import React from 'react';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import heroImage from '../assets/7b9d537b71d578fc9ec33de9f3d128ad6623c815.png';

const BootcampDesignedFor = () => {
    const audiencePoints = [
        {
            text: "Students and freshers looking to begin their React.js learning journey",
        },
        {
            text: "Career switchers from non-technical backgrounds entering frontend development",
        },
        {
            text: "UI/UX designers who want to convert designs into functional interfaces",
        },
        {
            text: "Beginners with basic knowledge of HTML, CSS, and JavaScript",
        },
        {
            text: "Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Duis pulvinar.",
        },
        {
            text: "Learners who prefer hands-on projects over passive tutorial watching",
        },
    ];

    return (
        <section className="bg-white w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-28 py-10 md:py-16">
            <div className="w-full max-w-7xl flex flex-col gap-8 md:gap-12 lg:gap-16">
                {/* Hero Image */}
                <div className="w-full aspect-video relative rounded-xl md:rounded-2xl overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Codegnan React Bootcamp classroom"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Block */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-2/5">
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h2 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-black">
                                Who is this bootcamp designed for?
                            </h2>
                            <p className="font-inter font-normal text-base sm:text-lg md:text-xl leading-6 md:leading-7 text-gray-600">
                                This beginner-friendly React.js bootcamp is designed for learners who want a clear and structured start in frontend development. It focuses on building practical skills and real-world project experience rather than just learning theory.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors text-white font-inter font-extrabold text-sm sm:text-base leading-6 py-3 sm:py-4 px-6 sm:px-8 rounded-xl w-full sm:w-fit shadow-lg hover:shadow-xl">
                            Join the React Bootcamp
                        </button>
                    </div>

                    {/* Right Column - Audience Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-6 w-full lg:w-3/5">
                        {audiencePoints.map((point, index) => (
                            <div key={index} className="flex gap-3 items-start">
                                <IconCircleCheckFilled size={24} className="text-purple-600 flex-shrink-0 mt-0.5" />
                                <p className="font-inter font-semibold text-sm sm:text-base leading-5 sm:leading-6 text-black">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BootcampDesignedFor;
