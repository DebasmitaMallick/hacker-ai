import React from "react";

const Button = ({children, classes, ...props}) => {
  return (
    <button
      type="submit"
      className={`focus:outline-none font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
