import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 'form' | 'processing' | 'success';

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<Step>('form');
    const [formData, setFormData] = useState({
        frequency: 'one-time',
        amount: 1000,
        customAmount: '',
        paymentMethod: 'upi',
        name: '',
        email: '',
    });

    useEffect(() => {
        // Reset form when modal is closed
        if (!isOpen) {
            setTimeout(() => {
                 setStep('form');
                 setFormData({
                    frequency: 'one-time',
                    amount: 1000,
                    customAmount: '',
                    paymentMethod: 'upi',
                    name: '',
                    email: '',
                });
            }, 300); // delay to allow for closing animation
        }
    }, [isOpen]);

    const handleAmountClick = (amount: number) => {
        setFormData({ ...formData, amount, customAmount: '' });
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setFormData({ ...formData, customAmount: value, amount: 0 });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('processing');
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };
    
    const finalAmount = formData.amount || parseInt(formData.customAmount) || 0;

    const renderForm = () => (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Donation Frequency</label>
                <div className="mt-1 grid grid-cols-2 gap-2 rounded-md bg-gray-200 p-1">
                    {['one-time', 'monthly'].map(freq => (
                        <button key={freq} type="button" onClick={() => setFormData({...formData, frequency: freq})} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${formData.frequency === freq ? 'bg-white text-iwc-blue shadow' : 'text-gray-600 hover:bg-gray-50'}`}>
                            {freq.charAt(0).toUpperCase() + freq.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                 <label className="block text-sm font-medium text-gray-700">Select Amount (₹)</label>
                 <div className="mt-2 grid grid-cols-3 gap-2">
                    {[500, 1000, 2500].map(amt => (
                        <button key={amt} type="button" onClick={() => handleAmountClick(amt)} className={`px-3 py-3 text-sm font-semibold rounded-md border transition-colors ${formData.amount === amt ? 'bg-iwc-blue text-white border-iwc-blue' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                            ₹{amt}
                        </button>
                    ))}
                 </div>
                 <input type="text" value={formData.customAmount} onChange={handleCustomAmountChange} placeholder="Or enter a custom amount" className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Personal Information</label>
                 <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold" />
                 <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-iwc-gold focus:border-iwc-gold" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <div className="mt-1 grid grid-cols-2 gap-2 rounded-md bg-gray-200 p-1">
                     {['upi', 'card'].map(method => (
                        <button key={method} type="button" onClick={() => setFormData({...formData, paymentMethod: method})} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${formData.paymentMethod === method ? 'bg-white text-iwc-blue shadow' : 'text-gray-600 hover:bg-gray-50'}`}>
                            {method === 'upi' ? 'UPI / QR Code' : 'Credit/Debit Card'}
                        </button>
                    ))}
                </div>
            </div>

            <button type="submit" disabled={finalAmount <= 0} className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-iwc-blue hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-iwc-blue disabled:bg-gray-400 disabled:cursor-not-allowed">
                Donate ₹{finalAmount} {formData.frequency === 'monthly' ? ' per month' : ''}
            </button>
        </form>
    );

    const renderProcessing = () => (
        <div className="flex flex-col items-center justify-center text-center h-64">
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-16 h-16 border-4 border-t-iwc-gold border-gray-200 rounded-full mb-4"
             />
             <h3 className="text-xl font-semibold text-iwc-blue">Processing your donation...</h3>
             <p className="text-gray-600 mt-2">Please wait a moment.</p>
        </div>
    );
    
    const renderSuccess = () => (
         <div className="flex flex-col items-center justify-center text-center h-64">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
            >
                <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-iwc-blue">Thank You, {formData.name}!</h3>
            <p className="text-gray-600 mt-2">
                Your generous donation of ₹{finalAmount} has been received. A receipt has been sent to {formData.email}.
            </p>
            <button onClick={onClose} className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-iwc-blue hover:bg-blue-900">
                Close
            </button>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                         <div className="p-6 sm:p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold font-serif text-iwc-blue">Support Our Cause</h2>
                                    <p className="text-gray-500 mt-1">Your contribution makes a difference.</p>
                                </div>
                                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
                            </div>

                            <div className="mt-6">
                                {step === 'form' && renderForm()}
                                {step === 'processing' && renderProcessing()}
                                {step === 'success' && renderSuccess()}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DonationModal;
