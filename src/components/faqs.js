import React, { useState } from 'react';
import Down from '../images/down.svg';

const Faqs = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswerVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is It Really Free?",
            answer: "Yes! This icon pack is completely free and will always remain free under the Creative Commons Attribution 4.0 International (CC BY 4.0) License. I created this project for the community. However, your donations can help me grow and maintain the pack. If you'd like to support, feel free to contribute."
        },
        {
            question: "Is It Difficult to Use?",
            answer: "Not at all! Lottie handles everything for you. Just follow the straightforward documentation provided by Lottie to integrate it into your projects effortlessly."
        },
        {
            question: "Can It Be Made Interactive?",
            answer: "Yes! With Lottie, you can divide the animation into segments and add interactivity such as hover effects, clicks, and more."
        },
        {
            question: "Can I Change the Color of an Icon?",
            answer: "Yes, you can! Every icon comes with an .aep file, allowing you to edit every detail, including its color. You can find a detailed guide on changing icon colors on the 'How to Use' page."
        },
        {
            question: "What If I Need an Icon That's Missing?",
            answer: "Just let me know! I'm always working on expanding Ecco Icon, and your icon suggestions are always welcome. Feel free to contact me at hi@sajjaddashti.ir."
        }
    ];

    return (
        <div className="py-4 md:py-16 px-4 md:px-12 flex flex-col md:flex-row gap-10">
            <div className='w-full md:w-1/3'>
                <h3 className="text-lg font-bold text-ao mb-0">Do You Have a Question?</h3>
                <h2 className="text-2xl font-bold text-zinc-800 mb-2">Frequently Asked Questions</h2>
                <p className='text-base text-zinc-600'>Explore answers to frequently asked questions about the Ecco Icon Pack, including usage guidelines and licensing details.</p>
            </div>
            <div className="w-full md:w-2/3">
            {faqs.map((faq, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm mb-4">
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleAnswerVisibility(index)}>
                        <h3 className="text-base md:text-lg font-semibold cursor-pointer pr-5" >
                            {faq.question}
                        </h3>
                        <img src={Down} className={`w-7 transform transition-transform duration-300 ${visibleIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`transition-opacity duration-500 ${visibleIndex === index ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <p className="mt-4 text-gray-700">{faq.answer}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Faqs;