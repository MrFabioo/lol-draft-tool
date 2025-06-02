import React from 'react';

export const SearchBar = () => {
  return (
    <div className='w-1/3'>
      <input className='h-full' type='text' placeholder='Search champion...' />
      <button className='clear-btn size-9'>✕</button>
    </div>
  );
};
