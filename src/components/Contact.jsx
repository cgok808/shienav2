import React from "react";
import SubHeading from "./SubHeading";
import { AiOutlineMail } from "react-icons/ai";

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
            placeholder='Message &#13; &#10;ex. Hello there, I am someone who would love to inquire about comissioning you to have your super hot cool voice be featured in my project!'
            className='w-[90%] p-5 pb-28 bg-qWhite rounded-xl mt-3 overflow-hidden'
          />
        </div>
      </form>
      <div className='flex justify-center'>
        <button className='bg-[#B58C90] p-5 mb-36 rounded-xl w-[40%] font-extrabold text-2xl text-qWhite hover:bg-[#b99ea1] transition__ease flex items-center justify-center'>
          <AiOutlineMail className="mr-3" />
         <span className="hidden md:block">send ur shit</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
