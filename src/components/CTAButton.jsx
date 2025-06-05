import React from 'react';
import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`w-full font-semibold py-3 mt-3 rounded-lg flex justify-center items-center
          ${active ? 'bg-violet-600 text-white' : 'bg-violet-200 text-black'}
          hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
