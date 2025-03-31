// Props:

//     text: O texto exibido no botão.
//     onClick: Função executada ao clicar.
//     variant: Define o estilo (primary, secondary, danger).
//     disabled: Desativa o botão se true.

import React from 'react';

const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {

  const baseStyles = 'px-2 py-2 rounded-md font-medium w-40 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-gray-100 text-black hover:bg-gray-200 w-40 shadow-md hover:shadow-lg transition-shadow',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;