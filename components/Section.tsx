import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = 'bg-white',
  titleClassName = 'text-iwc-blue',
  subtitleClassName = 'text-gray-600'
}) => {
  return (
    <section id={id} className={`py-16 sm:py-24 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold font-serif tracking-tight sm:text-4xl ${titleClassName}`}>{title}</h2>
            <p className={`mt-4 max-w-2xl mx-auto text-lg ${subtitleClassName}`}>{subtitle}</p>
          </div>
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default Section;
