import React from "react";

const Accordion = () => {
  return (
    <a className='w-[45%] bg-[#F4E2D7] rounded-lg mt-5 pt-3 px-3 pb-2 flex justify-between items-center border-b-black'>
      <div className='font-extrabold text-2xl'>EQUIMENT</div>
      <div className="font-extrabold text-3xl">+</div>
    </a>
  );
};

const Studio = () => {
  return (
    <section id='studio' className=' bg-[#654A59] p-10'>
      <div className='flex justify-between items-center flex-wrap'>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </section>
  );
};

export default Studio;
