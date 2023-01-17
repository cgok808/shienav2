import React, { useState, useEffect } from "react";
import SubHeading from "./SubHeading";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import reviews from "./data";

const Testimonials = () => {
  const [color, setColor] = useState(true);
  const [index, setIndex] = useState(0);
  const { name, description } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    setColor(!color);
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    setColor(!color);
  };

  return (
    <section className='bg-[#f6e8de]' id='reviews'>
      <SubHeading
        title={"testimonials"}
        subtitle={"THEY SAY I'M COOL"}
        color={"text-[#3B2A3A]"}
      />
      <div className='mt-12 mb-12 flex flex-col items-center'>
        <div
          className={`h-80 md:w-1/2 w-80 ${
            color ? "bg-[#664A58]" : "bg-[#E8CCB9]"
          } rounded-2xl flex justify-center items-center transition__ease `}
        >
          <div
            className={`${
              color ? "text-qWhite" : "text-qBlack"
            } flex justify-center items-center text-center w-[90%] md:w-[80%] h-full text-base lg:text-lg`}
          >
            {description}
          </div>
        </div>
        <div className='flex justify-around'>
          <BsArrowLeftSquareFill
            onClick={prevPerson}
            className={`${
              color ? "text-[#322431]" : "text-[#DAB19E]"
            } relative top-6 right-6 text-6xl transition__ease hover:scale-110 active:scale-90 md:block`}
          />
          <div
            className={`relative h-22 top-4 ${
              color ? "bg-[#322431]" : "bg-[#DAB19E]"
            } rounded-xl flex text-center items-center justify-center transition__ease`}
          >
            <h6 className='text-qWhite font-bold text-xl md:text-2xl p-5'>
              {name}
            </h6>
          </div>
          <BsArrowRightSquareFill
            onClick={nextPerson}
            className={`${
              color ? "text-[#322431]" : "text-[#DAB19E]"
            } relative top-6 left-6 text-6xl transition__ease hover:scale-110 active:scale-90 md:block`}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
