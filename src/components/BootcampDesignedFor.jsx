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
            text: "Learners who want a structured and beginner-friendly learning path",
        },
        {
            text: "Learners who prefer hands-on projects over passive tutorial watching",
        },
    ];

    const scrollToForm = () => {
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
    };

    return (
        <section className="bg-white w-full flex flex-col items-center px-4 lg:px-28 py-6 md:py-16">
            {/* ===== MOBILE LAYOUT (matches Figma design) ===== */}
            <div className="lg:hidden w-full flex flex-col gap-4">
                {/* Hero Image - Rounded on Mobile */}
                <div className="w-full h-40 relative rounded-md overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Codegnan React Bootcamp classroom"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Card with Border */}
                <div className="bg-white border border-gray-200 rounded-xl px-3 py-5 flex flex-col gap-3">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-inter font-semibold text-2xl leading-tight text-black">
                            Who is this bootcamp designed for?
                        </h2>
                        <p className="font-inter font-normal text-base leading-6 text-gray-600">
                            This beginner-friendly React.js bootcamp is designed for learners who want a clear and structured start in frontend development. It focuses on building practical skills and real-world project experience rather than just learning theory.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={scrollToForm}
                        className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors text-white font-inter font-bold text-sm leading-6 py-3 px-6 rounded-xl w-fit shadow-lg hover:shadow-xl"
                    >
                        Join the React Bootcamp
                    </button>
                </div>

                {/* Audience Points - Individual Cards */}
                <div className="flex flex-col gap-3">
                    {audiencePoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl px-3 py-4 flex gap-3 items-start"
                        >
                            <IconCircleCheckFilled size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                            <p className="font-inter font-medium text-sm leading-6 text-black">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== DESKTOP LAYOUT (unchanged - already approved) ===== */}
            <div className="hidden lg:flex w-full max-w-7xl flex-col gap-12 lg:gap-16">
                {/* Hero Image */}
                <div className="w-full aspect-video relative rounded-2xl overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Codegnan React Bootcamp classroom"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Block */}
                <div className="flex flex-row gap-16 items-start">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col gap-8 w-2/5">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-inter font-semibold text-5xl leading-tight tracking-tight text-black">
                                Who is this bootcamp designed for?
                            </h2>
                            <p className="font-inter font-normal text-xl leading-7 text-gray-600">
                                This beginner-friendly React.js bootcamp is designed for learners who want a clear and structured start in frontend development. It focuses on building practical skills and real-world project experience rather than just learning theory.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={scrollToForm}
                            className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors text-white font-inter font-extrabold text-base leading-6 py-4 px-8 rounded-xl w-fit shadow-lg hover:shadow-xl"
                        >
                            Join the React Bootcamp
                        </button>
                    </div>

                    {/* Right Column - Audience Points */}
                    <div className="grid grid-cols-2 gap-x-16 gap-y-6 w-3/5">
                        {audiencePoints.map((point, index) => (
                            <div key={index} className="flex gap-3 items-start">
                                <IconCircleCheckFilled size={24} className="text-purple-600 flex-shrink-0 mt-0.5" />
                                <p className="font-inter font-semibold text-base leading-6 text-black">
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
