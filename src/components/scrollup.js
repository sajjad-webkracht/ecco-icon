import React, { useState, useEffect } from 'react';
import Up from '../images/up.svg';

const Scrollup = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 md:right-12 md:bottom-12 z-20">
            <div
                onClick={scrollToTop}
                className={`bg-ao hover:bg-zinc-900 active:scale-95 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-xl duration-300 ease-in-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <img src={Up} alt="Scroll to top" className="w-6" />
            </div>
        </div>
    );
};

export default Scrollup;