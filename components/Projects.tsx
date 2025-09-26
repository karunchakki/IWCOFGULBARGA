import React from 'react';
import { Project } from '../types';
import Section from './Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <img className="h-56 w-full object-cover" src={project.imageUrl} alt={project.title} />
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-gray-500 mb-2">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h3 className="text-xl font-bold font-serif text-iwc-blue mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
          <div className="text-sm font-semibold text-iwc-blue mt-auto">
            Beneficiaries: <span className="text-iwc-gold font-bold">{project.beneficiaries}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section
      id="projects"
      title="Our Projects"
      subtitle="Making a difference in our community, one project at a time."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
       <div className="mt-12 text-center">
        <a href="#" className="text-base font-medium text-iwc-blue hover:text-blue-900">
          View all projects &rarr;
        </a>
      </div>
    </Section>
  );
};

export default Projects;