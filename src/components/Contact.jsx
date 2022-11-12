import React from "react";
import SubHeading from "./SubHeading";

const Contact = () => {
  return (
    <section className='bg-[#AD7F84]' id='contact'>
      <SubHeading
        title={"contact"}
        subtitle={"LET'S TALK"}
        color={"text-qWhite"}
      />
      <form className='mt-20 mb-20'>
        <div className='flex justify-around'>
          <input
            type='text'
            placeholder='Name'
            className='w-[40%] p-5 bg-qWhite rounded-xl'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-[40%] p-5 bg-qWhite rounded-xl'
          />
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='text'
            placeholder='Subject'
            className='w-[90%] p-5 bg-qWhite rounded-xl mt-3'
          />
          <textarea
            type='text'
            placeholder='Message'
            className='w-[90%] p-5 pb-20 bg-qWhite rounded-xl mt-3'
          />
        </div>
      </form>
      <div className='flex justify-center'>
        <button className='bg-[#B58C90] p-5 mb-36 rounded-xl w-[40%] font-extrabold text-2xl text-qWhite hover:bg-[#b99ea1] transition__ease'>
          send ur shit
        </button>
      </div>
    </section>
  );
};

export default Contact;
