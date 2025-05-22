import React from 'react';

export const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search champion...' />
      <button className='clear-btn'>✕</button>
    </div>
  );
};
