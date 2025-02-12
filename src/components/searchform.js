import React, { useState } from 'react';
import SearchIcon from '../images/search.svg';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className='flex items-stretch' onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder='Search for animated icons'
                name="search"
                value={query}
                autoComplete='off'
                onChange={handleInputChange}
                className='w-full rounded-l-md py-3 px-3 bg-zinc-100 focus:outline-none hover:border-ao hover:border-opacity-50 focus:border-opacity-100 focus:border-ao border border-zinc-100 focus:shadow-inner'
            />
            <button type="submit" className='rounded-r-md py-2 px-2 bg-zinc-100 text-zinc-400 group active:bg-zinc-200 duration-75'>
                <img src={SearchIcon} alt='Search' className='w-6 group-hover:scale-105 duration-200 group-hover:rotate-2' />
            </button>
        </form>
    );
};

export default SearchForm;