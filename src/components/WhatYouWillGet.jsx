import React from 'react';

// Import images
import bgImage from '../assets/952eebf56b1548e5fae283867eab6c2d31ae52ad.png';
import handsOnImage from '../assets/2eb8073649b0c45685f3317ec4fd10b8eb76df71.png';
import projectExpImage from '../assets/585c94daa6fa9d625bc18ce93cdfac838712bdb6.png';
import foundationsImage from '../assets/1b89a9c5da9d97da5971e192bf1de289a97a9b2c.png';
import deploymentImage from '../assets/afa67acca86b844c0d8828f2d4ca9c5414a1066a.png';
import componentImage from '../assets/e5763e9b8eb192752ccda9541ff6a29216cca93f.png';
import industryImage from '../assets/4e5dad082c136b5de769a745ea936d527519a574.png';

const WhatYouWillGet = () => {
    const features = [
        {
            id: 1,
            image: foundationsImage,
            title: "Strong React Foundations",
            description: "Understand core React concepts like components, props, state, and JSX through clear explanations and hands-on practice, even if you're starting as a beginner.",
            layout: "large-left" // Large card on left
        },
        {
            id: 2,
            image: handsOnImage,
            title: "Hands-On Mini Applications",
            description: "Work on multiple mini applications that help you apply React concepts practically instead of just learning theory.",
            layout: "small-right"
        },
        {
            id: 3,
            image: projectExpImage,
            title: "Real Project Experience",
            description: "Build two complete beginner-level React projects that reflect real-world use cases and strengthen your confidence.",
            layout: "small-right"
        },
        {
            id: 4,
            image: deploymentImage,
            title: "Live Project Deployment",
            description: "Learn how to deploy React applications using Vercel and generate live project links.",
            layout: "small-left"
        },
        {
            id: 5,
            image: componentImage,
            title: "Component-Based Development",
            description: "Gain confidence in creating, reusing, and managing React components efficiently.",
            layout: "small-right"
        },
        {
            id: 6,
            image: industryImage,
            title: "Industry-Ready Foundation",
            description: "Build a strong foundation that prepares you to move beyond the basics and confidently explore advanced React concepts. Develop an understanding of modern frontend practices and workflows, making it easier to adapt to new frameworks and real-world development requirements as you grow.",
            layout: "large-bottom"
        }
    ];

    return (
        <section className="w-full relative py-10 md:py-16 px-4 sm:px-8 md:px-16 lg:px-28">
            {/* Background with gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col gap-10 md:gap-14">
                {/* Header Section */}
                <div className="flex flex-col gap-3 text-center max-w-4xl mx-auto">
                    <h2 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-black">
                        What You Will Get by the End of This Bootcamp
                    </h2>
                    <p className="font-inter font-normal text-base sm:text-lg md:text-xl leading-6 md:leading-7 text-gray-600">
                        Build strong React fundamentals, create real projects, and gain the confidence to develop and deploy applications independently.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Row 1: Strong React Foundations (large) + Hands-On & Real Project (stacked) */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col gap-4">
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                            <img
                                src={foundationsImage}
                                alt="Strong React Foundations"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-inter font-semibold text-xl md:text-2xl text-black">
                                Strong React Foundations
                            </h3>
                            <p className="font-inter font-normal text-sm md:text-base leading-6 text-gray-600">
                                Understand core React concepts like components, props, state, and JSX through clear explanations and hands-on practice, even if you're starting as a beginner.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Hands-On Mini Applications */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 flex flex-col sm:flex-row gap-4 items-center">
                            <div className="w-full sm:w-2/5 aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                                <img
                                    src={handsOnImage}
                                    alt="Hands-On Mini Applications"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-inter font-semibold text-lg md:text-xl text-black">
                                    Hands-On Mini Applications
                                </h3>
                                <p className="font-inter font-normal text-sm md:text-base leading-6 text-gray-600">
                                    Work on multiple mini applications that help you apply React concepts practically instead of just learning theory.
                                </p>
                            </div>
                        </div>

                        {/* Real Project Experience */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 flex flex-col sm:flex-row gap-4 items-center">
                            <div className="w-full sm:w-2/5 aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                                <img
                                    src={projectExpImage}
                                    alt="Real Project Experience"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-inter font-semibold text-lg md:text-xl text-black">
                                    Real Project Experience
                                </h3>
                                <p className="font-inter font-normal text-sm md:text-base leading-6 text-gray-600">
                                    Build two complete beginner-level React projects that reflect real-world use cases and strengthen your confidence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Live Project Deployment + Component-Based Development */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 flex flex-col sm:flex-row gap-4 items-center">
                        <div className="w-full sm:w-2/5 aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                            <img
                                src={deploymentImage}
                                alt="Live Project Deployment"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-inter font-semibold text-lg md:text-xl text-black">
                                Live Project Deployment
                            </h3>
                            <p className="font-inter font-normal text-sm md:text-base leading-6 text-gray-600">
                                Learn how to deploy React applications using Vercel and generate live project links.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 flex flex-col sm:flex-row gap-4 items-center">
                        <div className="w-full sm:w-2/5 aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                            <img
                                src={componentImage}
                                alt="Component-Based Development"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-inter font-semibold text-lg md:text-xl text-black">
                                Component-Based Development
                            </h3>
                            <p className="font-inter font-normal text-sm md:text-base leading-6 text-gray-600">
                                Gain confidence in creating, reusing, and managing React components efficiently.
                            </p>
                        </div>
                    </div>

                    {/* Row 3: Industry-Ready Foundation (full width) */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden flex-shrink-0">
                            <img
                                src={industryImage}
                                alt="Industry-Ready Foundation"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:w-1/2">
                            <h3 className="font-inter font-semibold text-xl md:text-2xl text-black">
                                Industry-Ready Foundation
                            </h3>
                            <p className="font-inter font-normal text-sm md:text-base leading-6 text-gray-600">
                                Build a strong foundation that prepares you to move beyond the basics and confidently explore advanced React concepts. Develop an understanding of modern frontend practices and workflows, making it easier to adapt to new frameworks and real-world development requirements as you grow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouWillGet;
