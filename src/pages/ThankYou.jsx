import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconCircleCheck, IconArrowLeft } from '@tabler/icons-react';
import confetti from 'canvas-confetti';

const ThankYou = () => {
    const navigate = useNavigate();

    // Trigger confetti on mount
    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg w-full text-center space-y-6 animate-fade-in-up">

                {/* Success Icon */}
                <div className="flex justify-center">
                    <div className="bg-purple-50 p-4 rounded-full">
                        <IconCircleCheck size={80} className="text-purple-600" stroke={1.5} />
                    </div>
                </div>

                {/* Heading */}
                <div className="space-y-2">
                    <h1 className="font-inter font-bold text-3xl md:text-4xl text-gray-900">
                        Thank You!
                    </h1>
                    <p className="font-inter text-gray-600 text-lg">
                        Your spot has been successfully secured.
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100"></div>

                {/* Details */}
                <div className="space-y-4">
                    <p className="font-inter text-gray-500">
                        We are thrilled to have you join our React.js Bootcamp. You will receive a confirmation email shortly with all the details.
                    </p>

                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                        <p className="font-inter text-sm text-purple-800 font-medium pb-1">Next Step:</p>
                        <p className="font-inter text-sm text-purple-600">
                            Check your inbox for the joining link and schedule.
                        </p>
                    </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-inter font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2 group"
                    >
                        <IconArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Go Back Home
                    </button>
                </div>
            </div>

            {/* Footer Text */}
            <p className="mt-8 font-inter text-sm text-gray-400">
                Need help? <a href="mailto:support@codegnan.com" className="text-purple-600 hover:underline">Contact Support</a>
            </p>
        </div>
    );
};

export default ThankYou;
