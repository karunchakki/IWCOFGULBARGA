import React from 'react';
import { TeamMember } from '../types';
import Section from './Section';
import { motion } from 'framer-motion';
import { LEADERSHIP_BANNER_BASE64 } from '../constants';

interface TeamProps {
  members: TeamMember[];
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <div className="text-center">
            <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img 
                    className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg border-4 border-white/50" 
                    src={member.photoUrl} 
                    alt={member.name} 
                />
            </motion.div>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{member.name}</h3>
            <p className="text-sm leading-6 text-iwc-gold font-bold">{member.role}</p>
        </div>
    );
};

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <div 
        className="bg-cover bg-center"
        style={{backgroundImage: `url(${LEADERSHIP_BANNER_BASE64})`}}
    >
        <div className="bg-iwc-blue/80 backdrop-blur-sm">
            <Section
              id="team"
              title="Our Team"
              subtitle="Meet the dedicated leadership team driving our club's mission forward."
              className="bg-transparent"
              titleClassName="text-white"
              subtitleClassName="text-gray-200"
            >
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </Section>
        </div>
    </div>
  );
};

export default Team;
