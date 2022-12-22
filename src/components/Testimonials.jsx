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
          className={`h-80 w-1/2 ${
            color ? "bg-[#664A58]" : "bg-[#E8CCB9]"
          } rounded-2xl flex justify-center items-center transition__ease`}
        >
          <BsArrowLeftSquareFill
            onClick={prevPerson}
            className={`${
              color ? "text-[#322431]" : "text-[#DAB19E]"
            } w-16 h-16 relative right-20 md:right-24 lg:right-28 transition__ease hover:scale-110 active:scale-90`}
          />
          <p
            className={`${
              color ? "text-qWhite" : "text-qBlack"
            } text-center w-[80%] text-lg`}
          >
            {description}
          </p>
          <BsArrowRightSquareFill
            onClick={nextPerson}
            className={`${
              color ? "text-[#322431]" : "text-[#DAB19E]"
            } w-16 h-16 relative left-20 md:left-24 lg:left-28 transition__ease hover:scale-110 active:scale-90`}
          />
        </div>
        <div
          className={`relative bottom-12 h-24 w-1/4 ${
            color ? "bg-[#322431]" : "bg-[#DAB19E]"
          } rounded-2xl flex text-center items-center justify-center transition__ease`}
        >
          <h6 className='text-qWhite font-bold md:truncate md:max-w-2xl'>
            {name}
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
