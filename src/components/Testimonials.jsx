import React, { useState, useEffect, useMemo } from 'react';
import { IconArrowRight } from '@tabler/icons-react';

// Import custom images
import doubleQuotesImg from '../assets/doublequotes.png';
import googleRatingImg from '../assets/googletestimonialimage.png';
import trustpilotRatingImg from '../assets/trustpilottestimonial.png';

// Testimonial Card Component - extracted outside to prevent re-renders
const TestimonialCard = React.memo(({ testimonial, isCarousel = false }) => (
    <div
        className={`bg-gray-50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg flex-shrink-0 h-72 sm:h-80
            ${isCarousel
                ? 'w-full'
                : 'w-64 sm:w-72 md:w-80 lg:w-96'
            }
        `}
    >
        {/* Inner bordered container */}
        <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-col h-full gap-2 sm:gap-3">
            {/* Top row: Rating image LEFT, Quote image RIGHT */}
            <div className="flex items-start justify-between">
                <img
                    src={testimonial.source === 'trustpilot' ? trustpilotRatingImg : googleRatingImg}
                    alt={testimonial.source === 'trustpilot' ? 'Trustpilot Rating' : 'Google Rating'}
                    className="h-8 sm:h-10 object-contain"
                />
                <img
                    src={doubleQuotesImg}
                    alt=""
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
            </div>

            {/* Testimonial text */}
            <p className="font-inter font-normal text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 flex-grow">
                {testimonial.text}
            </p>

            {/* Bottom section - always at bottom */}
            <div className="mt-auto flex flex-col gap-2 sm:gap-3">
                {/* Divider line */}
                <div className="w-full h-px bg-gray-200"></div>

                {/* Author info */}
                <div className="flex flex-col gap-0.5">
                    <p className="font-inter font-semibold text-sm sm:text-base leading-5 sm:leading-6 text-black">
                        {testimonial.name}
                    </p>
                    <p className="font-inter font-normal text-xs leading-4 sm:leading-5 text-gray-500">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    </div>
));

// Scrolling Row Component - memoized and isolated to prevent animation reset
const ScrollingRow = React.memo(({ testimonials }) => (
    <div
        className="overflow-hidden py-3 sm:py-4"
        style={{ contain: 'layout', isolation: 'isolate' }}
    >
        <div className="flex gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 animate-scroll-left">
            {/* Duplicate cards for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={`scroll-${index}`} testimonial={testimonial} />
            ))}
        </div>
    </div>
));

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = useMemo(() => [
        {
            name: "Deepakk Udarapu",
            role: "Frontend Intern",
            text: "I had learn about Web programming, build frontend websites with HTML, CSS Bootstrap, JS GitHub and Vercel. Special thanks to Ravi Siva Ram Tej sir & Saketh sir from Vijayawada Codegnan team for teachings.",
            source: "google"
        },
        {
            name: "Sai Kiran Reddy",
            role: "Frontend Developer",
            text: "This bootcamp helped me understand React from scratch. The hands-on projects made learning simple and practical. The step-by-step approach and real-world examples helped me build confidence in frontend development.",
            source: "trustpilot"
        },
        {
            name: "Hiranmaye Tanuku",
            role: "Web Developer",
            text: "I had a very great learning experience at Codegnan. Mentors are very approachable & clear our doubts. The projects gave me good hands-on knowledge. I had learnt a lot in these three days workshop. Special thanks to siva ram teja sir.",
            source: "google"
        },
        {
            name: "Sai Kiran Reddy",
            role: "UI Developer",
            text: "I had an excellent learning experience during the three-day web development workshop conducted by Ravi Siva Ram Teja Nagulavaricha sir from Codegnan. I had an excellent learning experience during the three-day web development workshop",
            source: "google"
        },
        {
            name: "Nitha Uppalapati",
            role: "Frontend Developer",
            text: "Had a workshop from codegnan by siva ram sir about frontend and git hub its very useful I got to know many new things, this workshop is a fantastic opportunity to enhance my web development knowledge and practical skills.",
            source: "google"
        },
        {
            name: "Ashraf Baig",
            role: "Junior Frontend Developer",
            text: "Codegnan 3days workshop had done.In this three days we learn about css, javascript, html, bootstrap. The Siva ram sir, were patient and supportive, Making complex concepts accessible and engaging. This session is mentor by",
            source: "google"
        },
        {
            name: "Rushaswi Gundapaneni",
            role: "React Developer",
            text: "In our college they held a workshop about frontend by siva ram teja sir. It is very helpful for me and my friends and I learnt more about Github. I highly recommend it to anyone looking to build a strong foundation in web development.",
            source: "google"
        },
        {
            name: "Dhakshaini Chennu",
            role: "Web Developer",
            text: "Over the three days, we learned HTML, CSS, and JavaScript, web pages, making them responsive, & Random Password Generator and a Weather Application. The sessions were practical thanks to Ravi Siva Ram Teja Sir, Saketh Kallepu sir",
            source: "google"
        },
        {
            name: "Kowshik",
            role: "Frontend Developer",
            text: "The sessions were handled by Siva Ram Teja sir. He explained every topic clearly and made the sessions very interesting. It was a great learning experience for all of us. We learn about CSS, bootstrap, JavaScript, html, GitHub, Vercel.",
            source: "google"
        }
    ], []);

    // Split testimonials into two rows
    const row1 = useMemo(() => testimonials.slice(0, 4), [testimonials]);
    const row2 = useMemo(() => testimonials.slice(4, 9), [testimonials]);

    // Auto-advance carousel for row 1 (4 seconds to sync with mobile scroll animation)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % row1.length);
        }, 4000); // Switch every 4 seconds

        return () => clearInterval(interval);
    }, [row1.length]);

    return (
        <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-20 lg:py-28 overflow-hidden">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-14">
                {/* Header */}
                <div className="flex flex-col gap-2 md:gap-3 text-center max-w-4xl mx-auto px-4">
                    <h2 className="font-inter font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-black">
                        What Our Learners Say
                    </h2>
                    <p className="font-inter font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-5 sm:leading-6 md:leading-7 text-gray-600">
                        Real feedback from beginners who started their React journey with this bootcamp
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">

                    {/* Row 1 - Mobile: Carousel, Tablet: Horizontal Scroll, Desktop: Full Row */}

                    {/* Mobile Carousel (sm and below) */}
                    <div className="sm:hidden px-4">
                        <div className="flex flex-col items-center">
                            {/* Card Container with overflow hidden for slide effect */}
                            <div className="w-full max-w-sm overflow-hidden py-4">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                >
                                    {row1.map((testimonial, index) => (
                                        <div
                                            key={`carousel-${index}`}
                                            className="w-full flex-shrink-0 px-2"
                                        >
                                            <TestimonialCard testimonial={testimonial} isCarousel={true} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex gap-2 mt-2">
                                {row1.map((_, index) => (
                                    <button
                                        key={`dot-${index}`}
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? 'bg-purple-600 w-6'
                                            : 'bg-gray-300 hover:bg-gray-400 w-2'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tablet Horizontal Scroll (sm to lg) */}
                    <div className="hidden sm:flex lg:hidden gap-4 overflow-x-auto py-4 px-6 scrollbar-hide">
                        {row1.map((testimonial, index) => (
                            <TestimonialCard key={`tablet-${index}`} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Desktop lg to xl: Show 2 cards */}
                    <div className="hidden lg:flex xl:hidden gap-6 py-4 px-8 justify-center">
                        {row1.slice(0, 2).map((testimonial, index) => (
                            <TestimonialCard key={`lg-${index}`} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Desktop xl to 2xl: Show 3 cards */}
                    <div className="hidden xl:flex 2xl:hidden gap-6 py-4 px-12 justify-center">
                        {row1.slice(0, 3).map((testimonial, index) => (
                            <TestimonialCard key={`xl-${index}`} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Desktop 2xl+: Show all 4 cards */}
                    <div className="hidden 2xl:flex gap-6 py-4 px-20 justify-center">
                        {row1.map((testimonial, index) => (
                            <TestimonialCard key={`2xl-${index}`} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Row 2 - Auto-scrolling from right to left (desktop only) */}
                    <div className="hidden lg:block">
                        <ScrollingRow testimonials={row2} />
                    </div>
                </div>
            </div>


            {/* Integrated CTA Button */}
            <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8">
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
        </section >
    );
};

export default Testimonials;
