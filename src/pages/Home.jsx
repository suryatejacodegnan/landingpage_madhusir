import React from 'react';
import BootcampDesignedFor from '../components/BootcampDesignedFor';
import WhatIsBootcamp from '../components/WhatIsBootcamp';
import WhatYouWillGet from '../components/WhatYouWillGet';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Fold 2 - Who is this bootcamp designed for? */}
            <BootcampDesignedFor />

            {/* Fold 3 - What is this Bootcamp? */}
            <WhatIsBootcamp />

            {/* Fold 4 - What You Will Get */}
            <WhatYouWillGet />

            {/* Fold 6 - FAQ */}
            <FAQ />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Home;

