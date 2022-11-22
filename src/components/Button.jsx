import React from "react";

const Button = ({buttonName}) => {
  return (
    <button className='bg-transparent bg-no-repeat cursor-pointer outline-none font-black border-2 border-white px-6 py-3 text-2xl rounded-xl text-qWhite box__shadow transition__ease hover:shadow-none hover:transition-all hover:translate-y-1 m-5'>
      {buttonName}
    </button>
  );
};

export default Button;
