import React from "react";
import SubHeading from "./SubHeading";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className='bg-[#f6e8de]' id='reviews'>
      <SubHeading
        title={"testimonials"}
        subtitle={"THEY SAY I'M COOL"}
        color={"text-[#3B2A3A]"}
      />
      <div className='mt-12 mb-12 flex flex-col items-center '>
        <div className='h-80 w-1/2 bg-[#664A58] rounded-2xl flex justify-center items-center '>
          <BsArrowLeftSquareFill
            className='text-[#664A58] w-16 h-16 relative right-28 hover:text-[#3B2A3A]'
          />
          <p className='text-qWhite text-center w-[80%] text-lg'>
            Angel is an incredible voice actor! She nailed down every line
            perfectly, adjusted to changes, and communication was excellent. Do
            yourself and your project a favor and hire her! Also, they learned a
            few difficult names and words in another language, which is an
            invaluable skill to have when trying to be authentic to your work.
          </p>
          <BsArrowRightSquareFill
            className='text-[#664A58] w-16 h-16 relative left-28'
          />
        </div>
        <div className='relative bottom-12 h-24 w-1/4 bg-[#322431] rounded-2xl flex text-center items-center justify-center'>
          <h6 className='text-qWhite font-bold md:truncate md:max-w-2xl'>
            LARAFAN / AUTHOR
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
