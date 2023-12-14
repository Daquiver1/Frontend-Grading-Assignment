import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = () => {
    alert('You searched for: ' + searchQuery);
  };

  return (
    <>
        <div className="max-w-md mx-auto mt-8 relative">
        <input
            type="text"
            className="w-full p-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            placeholder="Enter your search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{height:'70px'}}
        />
        <button
            className="absolute top-0 right-0  bg-black text-white p-6 rounded-md hover:bg-gray cursor-pointer"
            onClick={performSearch}
        >
            <RiSearchLine size={20} />
        </button>
        </div>
    </>
  );
};

export default SearchBar;