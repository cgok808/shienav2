import React from "react";

const SubHeading = ({ title, subtitle, color }) => {
  return (
    <div className={`m-auto text-center pt-20 ${color}`}>
      <h2 className='text-5xl md:text-6xl font-extrabold underline underline-offset-8'>
        {title}
      </h2>
      <p className='pt-2 m-auto text-lg font-bold'>{subtitle}</p>
    </div>
  );
};

export default SubHeading;
