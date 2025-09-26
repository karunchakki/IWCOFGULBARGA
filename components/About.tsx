

import React from 'react';
import Section from './Section';
import { COMMUNITY_SERVICE_BANNER_BASE64 } from '../constants';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Our Club"
      subtitle="Empowering women through leadership, service & education."
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={COMMUNITY_SERVICE_BANNER_BASE64} alt="Club community service activities" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold text-iwc-blue mb-4 font-serif">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            The Inner Wheel Club of Gulbarga, part of District 316, is a chapter of International Inner Wheel, one of the largest women's service voluntary organisations in the world. We are committed to promoting true friendship, encouraging the ideals of personal service, and fostering international understanding.
          </p>
          <h3 className="text-2xl font-bold text-iwc-blue mb-4 font-serif">Our History</h3>
          <p className="text-gray-600">
            Chartered in 1974, our club has a rich history of impactful projects and community engagement. From small local initiatives to large-scale campaigns, our members have consistently worked towards creating a positive change in Gulbarga and beyond.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;