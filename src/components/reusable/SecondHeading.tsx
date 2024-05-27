import React from 'react';

const SecondHeading = ({ message }: { message: string }) => {
  return <h2 className='w-fit max-w-[90%] min-w-[80%] mx-auto border-x-4 border-[var(--main-color)] px-2 text-center mt-4'>{message}</h2>;
};

export default SecondHeading;
