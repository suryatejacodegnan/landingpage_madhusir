import React from 'react';
import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail,
    IconBrandFacebook
} from '@tabler/icons-react';

// Import logo
import codegnanLogo from '../assets/bcd82e3bb4ee2ce01dbf515f26d139de3e1aa686.png';

const Footer = () => {
    const companyLinks = [
        { name: 'Blogs', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Internships', href: '#' },
        { name: 'Placements', href: '#' },
        { name: 'Job Acceleration Program', href: '#' }
    ];

    const coursesCol1 = [
        { name: 'Python', href: '#' },
        { name: 'Java', href: '#' },
        { name: 'Data Science', href: '#' },
        { name: 'Machine Learning', href: '#' },
        { name: 'React JS', href: '#' }
    ];

    const coursesCol2 = [
        { name: 'Data Structures', href: '#' },
        { name: 'C Programming', href: '#' },
        { name: 'Software Testing', href: '#' }
    ];

    const supportLinks = [
        { name: 'Help Center', href: '#' },
        { name: 'Student Support', href: '#' },
        { name: 'Career Guidance', href: '#' },
        { name: 'Contact Us', href: '#' }
    ];

    const socialIcons = [
        { icon: IconBrandInstagram, href: '#', label: 'Instagram' },
        { icon: IconBrandLinkedin, href: '#', label: 'LinkedIn' },
        { icon: IconBrandTwitter, href: '#', label: 'Twitter' },
        { icon: IconMail, href: '#', label: 'Email' },
        { icon: IconBrandFacebook, href: '#', label: 'Facebook' }
    ];

    return (
        <footer className="w-full bg-[#390a4d] px-4 sm:px-8 md:px-16 lg:px-28 py-10 md:py-16">
            <div className="flex flex-col gap-8">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                    {/* Logo and Description */}
                    <div className="flex flex-col gap-5 lg:w-1/3">
                        <img
                            src={codegnanLogo}
                            alt="Codegnan Logo"
                            className="h-12 md:h-14 w-auto object-contain object-left"
                        />
                        <p className="font-inter font-normal text-sm md:text-base leading-6 text-white/90">
                            With over two decades, we are bringing international teaching standards to the tech aspirants globally. Nurture your inner coder with us and take charge of your coding career with the top trending and high-paying technologies. This is the right time to enlighten your code "GNAN".
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Company Links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-inter font-semibold text-base text-white">
                                Company
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="font-inter font-normal text-sm text-white/80 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Courses - Column 1 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-inter font-semibold text-base text-white">
                                Our Courses
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {coursesCol1.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="font-inter font-normal text-sm text-white/80 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Courses - Column 2 */}
                        <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                            <h4 className="font-inter font-semibold text-base text-white sm:invisible">
                                More Courses
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {coursesCol2.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="font-inter font-normal text-sm text-white/80 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20" />

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="font-inter font-normal text-xs text-white/60 order-2 sm:order-1">
                        © Copyright 2018 Codegnan
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 order-1 sm:order-2">
                        {socialIcons.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Support Links */}
                    <div className="hidden md:flex items-center gap-4 order-3">
                        {supportLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="font-inter font-normal text-xs text-white/60 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Support Links */}
                <div className="flex md:hidden flex-wrap items-center justify-center gap-3">
                    {supportLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="font-inter font-normal text-xs text-white/60 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
