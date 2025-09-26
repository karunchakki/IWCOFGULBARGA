import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS_DATA.find(p => p.id === parseInt(id || ''));

    if (!project) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-2xl font-bold text-iwc-blue">Project not found</h1>
                <Link to="/" className="mt-4 inline-block text-iwc-gold hover:text-yellow-300">
                    &larr; Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Link to="/#projects" className="text-sm font-semibold text-iwc-blue hover:text-blue-900">
                      &larr; Back to Projects
                    </Link>
                    <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight text-iwc-blue sm:text-5xl">{project.title}</h1>
                    <div className="mt-6 border-t border-b border-gray-200 py-4 flex items-center space-x-8 text-sm text-gray-500">
                        <span>Date: {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span className="font-bold">Beneficiaries: <span className="text-iwc-gold">{project.beneficiaries}</span></span>
                    </div>

                    <img src={project.imageUrl} alt={project.title} className="mt-8 w-full rounded-lg shadow-lg object-cover" />

                    <div className="mt-8 prose lg:prose-xl max-w-none text-gray-700">
                        <p>{project.fullDescription}</p>
                    </div>

                    {project.gallery && project.gallery.length > 0 && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif font-bold text-iwc-blue">Gallery</h2>
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.gallery.map((image, index) => (
                                    <img key={index} src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;