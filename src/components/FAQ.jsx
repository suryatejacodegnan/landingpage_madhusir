import React, { useState } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Is this bootcamp suitable for beginners?",
            answer: "Yes. This bootcamp is designed for absolute beginners and starts from the basics of React, making it easy to follow even if you are new."
        },
        {
            question: "Do I need prior React experience to join?",
            answer: "No prior React knowledge is required. Basic understanding of HTML, CSS, and JavaScript is enough to get started."
        },
        {
            question: "Will this bootcamp be live or recorded?",
            answer: "The bootcamp is conducted as live, hands-on sessions to ensure better interaction and practical learning."
        },
        {
            question: "Will I build real projects during the bootcamp?",
            answer: "Yes. You will build multiple hands-on mini applications and two complete beginner-level React projects during the bootcamp."
        },
        {
            question: "Will I learn how to deploy my React projects?",
            answer: "Yes. You will learn how to deploy React applications using Vercel and generate live project links."
        },
        {
            question: "What tools and technologies will be used?",
            answer: "You will work with React.js, VS Code, Node.js, and GitHub Copilot throughout the bootcamp."
        },
        {
            question: "Is this bootcamp helpful for UI/UX designers or career switchers?",
            answer: "Yes. The bootcamp is suitable for UI/UX designers and career switchers who want to move into frontend development with practical skills."
        },
        {
            question: "What can I do after completing this bootcamp?",
            answer: "After completion, you will have a strong React foundation, real project experience, and the confidence to continue learning advanced React or build your own projects."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-purple-50 px-2 sm:px-4 md:px-16 lg:px-28 py-8 sm:py-12 md:py-24">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-14 lg:p-16 flex flex-col gap-6 sm:gap-10 md:gap-14">
                {/* Header */}
                <div className="flex flex-col gap-2 text-center max-w-3xl mx-auto">
                    <h2 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-purple-600">
                        Frequently asked questions
                    </h2>
                    <p className="font-inter font-normal text-base sm:text-lg md:text-xl leading-6 md:leading-7 text-gray-600">
                        Find answers to the most common questions about the React Bootcamp, including eligibility, learning format, projects, and outcomes.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-6 md:gap-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all ${openIndex === index ? 'border-purple-400 shadow-md' : 'border-gray-300 hover:border-purple-300'}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            {/* Question Header */}
                            <div className="flex items-center justify-between gap-4 p-4 sm:p-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {/* Purple bullet */}
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-600 rounded-full flex-shrink-0" />

                                    <h3 className="font-inter font-semibold text-base sm:text-lg md:text-xl text-black">
                                        {index + 1}. {faq.question}
                                    </h3>
                                </div>

                                {/* Toggle icon */}
                                <button
                                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors"
                                    aria-label={openIndex === index ? "Collapse" : "Expand"}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFAQ(index);
                                    }}
                                >
                                    {openIndex === index ? (
                                        <IconMinus size={24} />
                                    ) : (
                                        <IconPlus size={24} />
                                    )}
                                </button>
                            </div>

                            {/* Answer - Collapsible */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-10 sm:pl-14">
                                    <p className="font-inter font-normal text-sm sm:text-base leading-6 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
