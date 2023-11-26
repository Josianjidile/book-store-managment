import React from 'react';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-16 h-16 border-t-4 border-sky-600 border-solid rounded-full animate-spin'></div>
    </div>
  );
};

export default Spinner;
