import React from 'react';
import Hero from '../components/Hero';
import HeroVariant1 from '../components/HeroVariant1';
import HeroVariant2 from '../components/HeroVariant2';
import BootcampDesignedFor from '../components/BootcampDesignedFor';
import WhatIsBootcamp from '../components/WhatIsBootcamp';
import WhatYouWillGet from '../components/WhatYouWillGet';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// ============================================
// HERO VARIANT SELECTOR
// Change this value to switch between variants:
// 1 = Original design (background image, form on right)
// 2 = Optimized mobile (gradient bg, form after heading)
// 3 = Current Hero.jsx (same as Variant 2 currently)
// ============================================
const HERO_VARIANT = 2;

const Home = () => {
    // Render the selected Hero variant
    const renderHero = () => {
        switch (HERO_VARIANT) {
            case 1:
                return <HeroVariant1 />;
            case 2:
                return <HeroVariant2 />;
            case 3:
            default:
                return <Hero />;
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Fold 1 - Hero Section */}
            {renderHero()}

            {/* Fold 2 - Who is this bootcamp designed for? */}
            <BootcampDesignedFor />

            {/* Fold 3 - What is this Bootcamp? */}
            <WhatIsBootcamp />

            {/* Fold 4 - What You Will Get */}
            <WhatYouWillGet />

            {/* Fold 5 - Testimonials */}
            <Testimonials />

            {/* Fold 6 - FAQ */}
            <FAQ />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Home;

