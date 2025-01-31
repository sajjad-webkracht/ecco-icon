import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for Animated Icons"
                className='border border-gray-300 rounded-md p-2'
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;