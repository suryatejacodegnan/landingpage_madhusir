import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    IconCalendar,
    IconClock,
    IconClockHour4,
    IconDeviceLaptop,
    IconUserCheck,
    IconRocket,
    IconBrandGithub,
    IconArrowRight,
    IconStar,
    IconPlayerPlay,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript
} from '@tabler/icons-react';

// Import images
import bgImage from '../assets/9aec5cd5d35d332ab11c4e92a1ec6d3e14805252.png';
import avatar1 from '../assets/47d7ea3fb2f0b1f0f6a6fb84f7d7dbd21f6b2dce.png';
import avatar2 from '../assets/e812d0d20f8ce61680973345eaaa4140c7181076.png';
import avatar3 from '../assets/536f58fcdeadb288782ac9d9ea5a6392286bb79e.png';
import reactIcon from '../assets/3bb047779562a3e9e50b0c2741e61564112b2da5.png';
import googleLogo from '../assets/87a82b983e6208b5ef9e1e89d47c6b625d65c1e2.png';
import googleTrustImage from '../assets/googlenadtrust.png';

const HeroVariant2 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        collegeName: '',
        passoutYear: ''
    });

    // Mouse position for floating effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Navigate to Razorpay link
        // REPLACE THIS WITH ACTUAL RAZORPAY LINK
        window.location.href = 'https://razorpay.com';
    };

    const courseFeatures = [
        { icon: IconClockHour4, text: 'Duration: 5 Days' },
        { icon: IconDeviceLaptop, text: 'Mode: Live + Hands-On' },
        { icon: IconUserCheck, text: 'Level: Absolute Beginner' },
        { icon: IconRocket, text: 'Deployment: Vercel' },
        { icon: IconBrandGithub, text: 'AI Tool Used: GitHub Copilot (VS Code)' }
    ];

    return (
        <section className="w-full min-h-screen relative overflow-hidden">
            {/* Background - Gradient on mobile, Image on desktop */}
            <div className="absolute inset-0 z-0">
                {/* Gradient for mobile */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-gray-100" />
                {/* Image for desktop */}
                <img
                    src={bgImage}
                    alt=""
                    className="hidden lg:block w-full h-full object-cover"
                />
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden lg:block">


                {/* Rating Card */}
                <div
                    className="absolute bottom-20 left-[36%] z-20"
                    style={{
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
                    }}
                >
                    <img src={googleTrustImage} alt="Rating" className="w-64 drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
                </div>
            </div>

            {/* Floating Tech Stack Logos - Minimalist */}

            {/* HTML - Top Center Left */}
            <div
                className="hidden lg:block absolute top-[15%] left-[38%] z-[5] bg-white rounded-full p-4 shadow-xl opacity-70 hover:opacity-100 transition-opacity"
                style={{ transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)` }}
            >
                <IconBrandHtml5 size={32} className="text-orange-500" />
            </div>

            {/* CSS - Bottom Left */}
            <div
                className="hidden lg:block absolute bottom-[10%] left-[10%] z-[5] bg-white rounded-full p-4 shadow-xl opacity-70 hover:opacity-100 transition-opacity"
                style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}
            >
                <IconBrandCss3 size={32} className="text-blue-500" />
            </div>

            {/* JS - Left of Form */}
            <div
                className="hidden lg:block absolute top-[45%] right-[30%] z-[5] bg-white rounded-full p-4 shadow-xl opacity-70 hover:opacity-100 transition-opacity"
                style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -20}px)` }}
            >
                <div className="w-8 h-8 bg-[#F7DF1E] flex items-end justify-center rounded-md overflow-hidden">
                    <span className="text-black font-bold text-sm leading-none mb-1 font-sans">JS</span>
                </div>
            </div>


            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start md:items-center lg:items-start">

                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:w-full md:items-center md:text-center lg:w-auto lg:items-start lg:text-left">
                        {/* Date and Time Badge - Single dark pill */}
                        <div className="inline-flex self-start md:self-center lg:self-start">
                            <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-[#151515] rounded-full px-4 sm:px-6 py-2.5 sm:py-3">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <IconCalendar size={18} className="text-white sm:w-5 sm:h-5" />
                                    <span className="font-inter font-normal text-sm sm:text-base text-white">14 to 19 Feb 2026</span>
                                </div>
                                <span className="hidden sm:block text-white/50">|</span>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <IconClock size={18} className="text-white sm:w-5 sm:h-5" />
                                    <span className="font-inter font-normal text-sm sm:text-base text-white">10:00 AM</span>
                                </div>
                            </div>
                        </div>

                        {/* Happy Students */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex -space-x-2">
                                <img src={avatar1} alt="Student" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                                <img src={avatar2} alt="Student" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                                <img src={avatar3} alt="Student" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                                <img src={avatar1} alt="Student" className="hidden sm:block w-9 h-9 rounded-full border-2 border-white object-cover" />
                            </div>
                            <span className="font-inter font-bold text-sm sm:text-base text-gray-900">
                                4.5K+ happy Students
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="flex flex-col gap-2 sm:gap-3 md:items-center lg:items-start">
                            <h1 className="font-inter font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                                <span className="text-purple-600">5-Day</span> Beginner
                                <br />
                                <span className="text-purple-600">React.js</span> Bootcamp
                            </h1>
                            <p className="font-inter font-normal text-base sm:text-lg text-gray-600 max-w-lg md:mx-auto lg:mx-0">
                                A hands-on React bootcamp designed for absolute beginners to confidently build, deploy, and understand modern React applications in just 5 days.
                            </p>
                        </div>

                        {/* Mobile Form - Shows only on mobile, after heading */}
                        <div id="registration-form" className="lg:hidden w-full md:max-w-2xl">
                            <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 relative">
                                {/* Floating React Icon */}
                                <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                                    <img src={reactIcon} alt="React" className="w-6 h-6" />
                                </div>

                                {/* Form Header */}
                                <div className="flex flex-col gap-1.5 mb-4 pr-6">
                                    <h3 className="font-inter font-bold text-lg text-black leading-tight">
                                        Register & Start Your Learning Journey
                                    </h3>
                                    <p className="font-inter font-normal text-xs text-gray-500 leading-relaxed">
                                        Complete the form to secure your spot.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            name="collegeName"
                                            value={formData.collegeName}
                                            onChange={handleInputChange}
                                            placeholder="College Name"
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                        <input
                                            type="text"
                                            name="passoutYear"
                                            value={formData.passoutYear}
                                            onChange={handleInputChange}
                                            placeholder="Passout Year"
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-inter font-semibold text-sm py-3 rounded-xl shadow-lg"
                                    >
                                        Secure My Spot by ₹199
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Features Link - In a pill badge */}
                        <div className="inline-flex self-start md:self-center lg:self-start">
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-gray-200">
                                <span className="font-inter font-medium text-xs sm:text-sm text-purple-600">
                                    Build Real Projects
                                </span>
                                <span className="text-purple-400 hidden sm:inline">•</span>
                                <span className="font-inter font-medium text-xs sm:text-sm text-purple-600 hidden sm:inline">
                                    Learn React from Scratch
                                </span>
                                <span className="text-purple-400 hidden sm:inline">•</span>
                                <span className="font-inter font-medium text-xs sm:text-sm text-purple-600 hidden sm:inline">
                                    Deploy Live Apps
                                </span>
                                <IconArrowRight size={14} className="text-purple-600 sm:w-4 sm:h-4" />
                            </div>
                        </div>

                        {/* Course Features List with floating icon */}
                        <div className="relative flex flex-col gap-2 sm:gap-3 mt-2 md:items-center lg:items-start">
                            {courseFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-3">
                                    <feature.icon size={18} className="text-purple-600 flex-shrink-0 sm:w-5 sm:h-5" />
                                    <span className="font-inter font-medium text-xs sm:text-sm text-gray-800">
                                        {feature.text}
                                    </span>
                                </div>
                            ))}


                        </div>
                    </div>


                    {/* Right Section - Registration Form (Desktop only) */}
                    <div className="hidden lg:block w-full lg:w-[26rem] lg:flex-shrink-0">
                        <div id="registration-form-desktop" className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100 relative">
                            {/* Floating React Icon */}
                            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                                <img src={reactIcon} alt="React" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>

                            {/* Form Header */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 mb-4 sm:mb-5 pr-6 sm:pr-8">
                                <h3 className="font-inter font-bold text-lg sm:text-xl md:text-2xl text-black leading-tight">
                                    Register & Start Your
                                    <br />
                                    Learning Journey
                                </h3>
                                <p className="font-inter font-normal text-xs sm:text-sm text-gray-500 leading-relaxed">
                                    Complete the form to secure your spot. Our team will contact you with course details, orientation steps, and next actions.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-inter font-medium text-sm text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Name"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-inter font-medium text-sm text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Email"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-inter font-medium text-sm text-gray-700">Phone. No.</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Ph. No."
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-inter font-medium text-sm text-gray-700">College Name</label>
                                    <input
                                        type="text"
                                        name="collegeName"
                                        value={formData.collegeName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your College Name"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-inter font-medium text-sm text-gray-700">Passout Year</label>
                                    <input
                                        type="text"
                                        name="passoutYear"
                                        value={formData.passoutYear}
                                        onChange={handleInputChange}
                                        placeholder="Enter"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg font-inter text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors text-white font-inter font-semibold text-base py-4 rounded-xl mt-2 shadow-lg"
                                >
                                    Secure My Spot by ₹199
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroVariant2;
