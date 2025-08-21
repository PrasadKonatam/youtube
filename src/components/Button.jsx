import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-1 bg-gray-300 rounded-lg m-2">{name}</button>
    </div>
  );
};

export default Button;
