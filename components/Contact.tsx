
import React, { useState } from 'react';
import Section from './Section';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We will be in touch shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <Section
            id="contact"
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold font-serif text-iwc-blue mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold" />
                            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold" />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold" />
                        <textarea name="message" rows={5} placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold"></textarea>
                        <button type="submit" className="px-6 py-3 bg-iwc-blue text-white font-semibold rounded-md shadow-sm hover:bg-blue-900 transition-colors">Send Message</button>
                    </form>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="font-bold text-iwc-blue text-lg">Our Address</h4>
                        <p className="text-gray-600 mt-2">Inner Wheel Club Community Hall<br/>Main Road, Gulbarga<br/>Karnataka, India</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="font-bold text-iwc-blue text-lg">Email Us</h4>
                        <p className="text-gray-600 mt-2">info@innerwheelgulbarga.org</p>
                    </div>
                     <div className="bg-white h-48 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
                        <p>[Google Map Placeholder]</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;