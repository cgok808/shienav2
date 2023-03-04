import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    
  };
  return (
    <a className='w-[45%] bg-[#F4E2D7] rounded-lg mt-5 pt-3 px-3 pb-2 flex justify-between items-center border-b-black'>
      <div className='font-extrabold text-2xl'>EQUIPMENT</div>
      <button className='font-extrabold text-3xl' onClick={toggle}>
        +
      </button>
      {open && (
        <div>
          <h3>hello there!</h3>
        </div>
      )}
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
