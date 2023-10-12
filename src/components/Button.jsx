import React from 'react';

const Button = ({ customStyle }) => {
  return (
    <button
      className={`rounded-full w-40 drop-shadow  h-12 ${customStyle} font-medium`}
      style={{ filter: 'drop-shadow(0px 5px 5px hsl(12, 88%, 59%))' }}
    >
      Get Started
    </button>
  );
};

export default Button;
