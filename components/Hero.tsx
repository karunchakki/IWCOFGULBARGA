

import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_BANNER_NEW_BASE64 } from '../constants';

const Hero: React.FC = () => {
    return (
        <section 
            id="home" 
            className="relative bg-white text-white h-screen min-h-[500px] flex flex-col justify-center"
            style={{ 
                backgroundImage: `url(${HERO_BANNER_NEW_BASE64})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* The mission text is now part of the image, so we only show the buttons */}
                <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center mt-48">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <Link to="/#get-involved" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-iwc-blue bg-iwc-gold hover:bg-yellow-300 sm:px-8 transition-colors">
                            Join Us
                        </Link>
                        <Link to="/#projects" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-iwc-blue bg-opacity-80 hover:bg-opacity-100 sm:px-8 transition-colors">
                            Our Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
