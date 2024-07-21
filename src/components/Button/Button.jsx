import React from 'react';

function Button({ children, onClick, type = 'button', disabled , className}) {
  return (
    <button
      className={` w-full ${className} ${disabled ? 'bg-gray-500 cursor-not-allowed hover:bg-gray-500' : 'bg-blue-500'} text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base font-medium`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
