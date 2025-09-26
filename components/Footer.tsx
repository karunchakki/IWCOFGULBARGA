import React from 'react';
import { NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        (e.target as HTMLFormElement).reset();
    }

    return (
        <footer className="bg-iwc-blue text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="md:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-serif font-bold text-iwc-gold">Inner Wheel Club of Gulbarga</h3>
                        <p className="mt-2 text-gray-300 max-w-md">Step Up - Reach - Inspire for a Better World</p>
                        <div className="mt-4 text-sm text-gray-400">
                            <p>Official Website: www.innerwheelgulbarga.org</p>
                            <p>District 316 | Chartered 1974</p>
                        </div>
                         <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-iwc-gold">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            {NAV_LINKS.filter(l => l.name !== 'Home').map(link => (
                                <li key={link.name}>
                                    <Link to={`/${link.href}`} className="text-gray-300 hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="md:col-span-2 lg:col-span-2">
                        <h4 className="text-lg font-semibold text-iwc-gold">Subscribe to Our Newsletter</h4>
                        <p className="mt-2 text-gray-300">Get the latest updates on our projects and events delivered right to your inbox.</p>
                        <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md bg-iwc-blue border border-gray-600 text-white focus:ring-iwc-gold focus:border-iwc-gold"
                            />
                            <button type="submit" className="px-4 py-2 rounded-md bg-iwc-gold text-iwc-blue font-bold hover:bg-yellow-300 transition-colors flex-shrink-0">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Inner Wheel Club of Gulbarga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;