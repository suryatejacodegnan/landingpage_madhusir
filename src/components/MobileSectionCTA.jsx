import React from 'react';
import { IconArrowRight } from '@tabler/icons-react';

const MobileSectionCTA = ({ backgroundColor = "bg-white", reducedGap = false }) => {
    const scrollToForm = () => {
        const mobileForm = document.getElementById('registration-form');
        const desktopForm = document.getElementById('registration-form-desktop');

        if (mobileForm && getComputedStyle(mobileForm).display !== 'none') {
            mobileForm.scrollIntoView({ behavior: 'smooth' });
        } else if (desktopForm && getComputedStyle(desktopForm.parentElement).display !== 'none') {
            desktopForm.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const spacingClasses = reducedGap
        ? "pb-12 pt-0 -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-20"
        : "py-8";

    return (
        <div className={`w-full px-4 flex justify-center ${spacingClasses} ${backgroundColor}`}>
            <button
                onClick={scrollToForm}
                className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors text-white font-inter font-bold text-sm py-3 px-6 rounded-xl w-fit shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
                Register for Bootcamp
                <IconArrowRight size={18} />
            </button>
        </div>
    );
};

export default MobileSectionCTA;
