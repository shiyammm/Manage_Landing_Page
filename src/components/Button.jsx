import React from 'react';

const Button = ({ customStyle, customHover,customTextHover }) => {
  return (
    <button
      className={`rounded-full w-40 drop-shadow  h-12 ${customStyle} font-medium ${customHover}`}
      style={{ filter: 'drop-shadow(0px 5px 5px hsl(12, 88%, 59%))' }}
    >
      <span className={`${customTextHover}`}>Get Started</span>
    </button>
  );
};

export default Button;
