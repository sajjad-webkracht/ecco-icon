import React, { useState } from 'react';
import { Copy } from 'react-ecco-static';

const Code = ({ text }) => {
        const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    
        const handleCopy = (event) => {
            const button = event.currentTarget;
            const span = button.previousElementSibling;
            if (span) {
                navigator.clipboard.writeText(span.textContent).then(() => {
                    setShowCopiedMessage(true);
                    setTimeout(() => {
                        setShowCopiedMessage(false);
                    }, 3000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        };

    return (
        <pre>
            <code className='bg-zinc-100 p-4 rounded-xl text-zinc-800 flex justify-between items-center gap-2'>
                <span className='w-11/12 overflow-x-scroll'>
                    {text}
                </span>
                <button onClick={handleCopy}>
                    <div className='w-6 hover:scale-110 duration-200' >
                        <Copy color="#a1a1aa" />
                    </div>
                </button>
            </code>
            {showCopiedMessage && (
                <div className="fixed bottom-16 z-40 left-1/2 transform -translate-x-1/2 bg-ao text-white px-4 py-2 rounded text-center">
                    Copied to Clipboard
                </div>
            )}
        </pre>
    );
};

export default Code;