import React, { useState, useEffect } from 'react';

const CookieNotice = () => {
    const [showNotice, setShowNotice] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowNotice(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowNotice(false);
    };

    if (!showNotice) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 w-3/4 md:w-1/4 md:bottom-12 md:left-12 bg-zinc-50 text-zinc-800 p-4 gap-4 flex justify-between items-center rounded-xl shadow-lg">
            <p className="text-sm">
            We use cookies to personalize content, and analyze traffic.
            </p>
            <button
                onClick={handleAccept}
                className="bg-ao hover:bg-zinc-800 duration-200 text-white px-4 py-2 rounded"
            >
                Okay
            </button>
        </div>
    );
};

export default CookieNotice;