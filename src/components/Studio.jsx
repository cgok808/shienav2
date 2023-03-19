import React, { useState } from "react";
import SubHeading from "./SubHeading";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <a className='md:w-[45%] bg-[#F4E2D7] rounded-lg mt-5 pt-3 px-3 pb-2 '>
      <div className='flex justify-between items-center'>
        <span className='bg-[qPink] w-10 h-10 '>
          <div className='font-extrabold text-2xl'>{title}</div>
        </span>

        <button className='font-extrabold text-3xl' onClick={toggle}>
          +
        </button>
      </div>
      <div className='transition-all'>
        {open && (
          <div>
            <h3 className='p-2 transition-all font-extrabold'>{content}</h3>
          </div>
        )}
      </div>
    </a>
  );
};

const Studio = () => {
  const [equipments, setEquipments] = useState([
    {
      id: 1,
      title: "Equipment",
      content: "main equipment",
    },
    {
      id: 2,
      title: "Equiment #2",
      content: "Lorem ipsum",
    },
    {
      id: 3,
      title: "Equiment #3",
      content: "Lorem ipsum",
    },
    {
      id: 4,
      title: "Equiment #4",
      content: "Lorem ipsum",
    },
  ]);

  return (
    <section id='studio' className=' bg-[#D9A09F] p-10'>
      <SubHeading
        title={"studio"}
        color={"text-[#513947]"}
        subtitle={"THE SPECS"}
      />
      <div className='md:flex justify-between items-center flex-wrap'>
        {equipments.map((equipment) => {
          return (
            <Accordion
              key={equipment.id}
              title={equipment.title}
              content={equipment.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Studio;
