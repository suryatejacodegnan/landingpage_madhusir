import React from 'react';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';

const MobileStickyFooter = () => {
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
        <div
            className="fixed bottom-0 left-0 w-full z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3"
            style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
        >
            <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-gray-900">
                        <IconCalendar size={16} className="text-purple-600" />
                        <span className="font-inter font-semibold text-sm">14-19 Feb</span>
                    </div>
                    <span className="text-xs text-gray-500 font-inter">Live Bootcamp</span>
                </div>

                <button
                    onClick={scrollToForm}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-inter font-semibold text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                    Register Now
                    <IconArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default MobileStickyFooter;
