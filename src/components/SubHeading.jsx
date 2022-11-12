import React from "react";

const SubHeading = ({ title, subtitle, color }) => {
  return (
    <div className={`m-auto text-center pt-20 ${color}`}>
      <h1 className='text-6xl font-extrabold'>{title}</h1>
      <p className='m-auto text-lg '>{subtitle}</p>
    </div>
  );
};

export default SubHeading;
