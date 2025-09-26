import React, { useState } from 'react';
import Section from './Section';
import DonationModal from './DonationModal';

const InvolvementCard: React.FC<{icon: React.ReactNode, title: string, description: string, buttonText: string, onButtonClick: () => void}> = ({icon, title, description, buttonText, onButtonClick}) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
        <div className="bg-iwc-gold text-iwc-blue rounded-full p-4 mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold font-serif text-iwc-blue mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <button onClick={onButtonClick} className="w-full mt-auto flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-iwc-blue hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-iwc-blue transition-colors">
            {buttonText}
        </button>
    </div>
);

const GetInvolved: React.FC = () => {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

    return (
        <>
            <Section
                id="get-involved"
                title="Get Involved"
                subtitle="Your time, skills, and support can create lasting change in our community."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <InvolvementCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" /></svg>}
                        title="Become a Member"
                        description="Join a vibrant network of inspiring women dedicated to friendship and service. Make a direct impact and form lifelong connections."
                        buttonText="Membership Inquiry"
                        onButtonClick={() => window.location.href = '#contact'}
                    />
                     <InvolvementCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                        title="Volunteer Your Time"
                        description="Have a skill to share or time to give? Our projects thrive on the dedication of volunteers. There's a role for everyone."
                        buttonText="See Opportunities"
                        onButtonClick={() => window.location.href = '#projects'}
                    />
                     <InvolvementCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                        title="Donate Today"
                        description="Your generous donations help us fund vital community projects, from health camps to educational workshops. Every contribution counts."
                        buttonText="Support Our Cause"
                        onButtonClick={() => setIsDonationModalOpen(true)}
                    />
                </div>
            </Section>
            <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
        </>
    );
};

export default GetInvolved;