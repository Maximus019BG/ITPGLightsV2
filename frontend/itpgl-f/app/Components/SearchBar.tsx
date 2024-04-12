
'use client'
import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  filters: string[];
  setSearchTerm: (searchTerm: string) => void;
  activeFilters: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, setSearchTerm, activeFilters }) => {
  const [searchTermLocal, setSearchTermLocal] = useState('');

  useEffect(() => {
    setSearchTerm(`${activeFilters.join(' ')} ${searchTermLocal}`);
  }, [searchTermLocal, setSearchTerm, activeFilters]);

  return (
    <div className="flex items-center w-screen justify-center  -z-10 py-2">
      <input
        type="text"
        placeholder="Потърси ..."
        value={`${activeFilters.join(' ')} ${searchTermLocal}`}
        onChange={(e) => {
            const newSearchTerm = e.target.value.replace(/^\s+/, '');
            setSearchTermLocal(newSearchTerm);
        }}
        className="w-96 px-8 py-2 text-sm leading-tight border-none rounded-full lg:-mr-44 md:-mr-64  bg-white text-gray-700 dark:bg-[#333] dark:text-white border shadow-sm shadow-slate-300 z-0 appearance-none focus:outline-none focus:shadow-outline"
      />
        <center>
              <div className='-ml-16 lg:ml-32 z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute -ml-80 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </center>
    </div>
  );
};

export default SearchBar;