import React from 'react';

const ExternalLink = ({ href, children }) => {
    return (
        <a href={href} className='relative text-ao font-bold group'>
            {children}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] transition-all duration-500 group-hover:w-full"></span>
        </a>
    );
};

export default ExternalLink;