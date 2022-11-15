import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const Testimonials = () => {
  const [color, setColor] = useState(true);

  const handleClick = () => {
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
            onClick={handleClick}
            className={`${
              color ? "text-[#664A58]" : "text-[#E8CCB9]"
            } w-16 h-16 relative right-20 md:right-24 lg:right-28 transition__ease hover:scale-110 active:scale-90`}
          />
          <p
            className={`${
              color ? "text-qWhite" : "text-qBlack"
            } text-center w-[80%] text-lg`}
          >
            Angel is an incredible voice actor! She nailed down every line
            perfectly, adjusted to changes, and communication was excellent. Do
            yourself and your project a favor and hire her! Also, they learned a
            few difficult names and words in another language, which is an
            invaluable skill to have when trying to be authentic to your work.
          </p>
          <BsArrowRightSquareFill
            onClick={handleClick}
            className={`${
              color ? "text-[#664A58]" : "text-[#E8CCB9]"
            } w-16 h-16 relative left-20 md:left-24 lg:left-28 transition__ease hover:scale-110 active:scale-90`}
          />
        </div>
        <div
          className={`relative bottom-12 h-24 w-1/4 ${
            color ? "bg-[#322431]" : "bg-[#DAB19E]"
          } rounded-2xl flex text-center items-center justify-center transition__ease`}
        >
          <h6 className='text-qWhite font-bold md:truncate md:max-w-2xl'>
            LARAFAN / AUTHOR
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
