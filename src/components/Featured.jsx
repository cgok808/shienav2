import React from "react";
import SubHeading from "./SubHeading";
import FirstPic from "../assets/roles/playQ-3.png";

const Featured = () => {
  return (
    <section className='bg-[#ecc3bb] h-screen' id='featured_roles'>
      <SubHeading
        title={"featured roles"}
        subtitle={"THE SPECS"}
        color={"text-[#513947]"}
      />
      <div className='flex justify-center'>
        <div className='bg-[#242025] h-16 rounded-lg flex justify-center items-center w-44 mr-10'>
          <img src={FirstPic} alt='' className='h-7' />
        </div>
        <div className='bg-[#242025] h-16 rounded-lg flex justify-center items-center w-44 mr-10'>
          <img src={FirstPic} alt='' className='h-7' />
        </div>
        <div className='bg-[#242025] h-16 rounded-lg flex justify-center items-center w-44 mr-10'>
          <img src={FirstPic} alt='' className='h-7' />
        </div>
        <div className='bg-[#242025] h-16 rounded-lg flex justify-center items-center w-44 mr-10'>
          <img src={FirstPic} alt='' className='h-7' />
        </div>
        <div className='bg-[#242025] h-16 rounded-lg flex justify-center items-center w-44'>
          <img src={FirstPic} alt='' className='h-7' />
        </div>
      </div>
    </section>
  );
};

export default Featured;
