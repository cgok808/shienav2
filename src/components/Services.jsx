import React from "react";
import SubHeading from "./SubHeading";

import SingingIcon from "../assets/services/singing.png";
import EditingIcon from "../assets/services/editing.png";
import VoiceOverIcon from "../assets/services/voiceover.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const ServiceCard = ({ title, subtitle, img, alt }) => {
  return (
    <div className='h-72 w-96 bg-qWhite rounded-3xl transition-all ease-in-out duration-300 flex flex-col items-center hover:bg-qBrown hover:transition-all hover:ease-in-out hover:duration-300 m-4'>
      <div className='h-32 w-32 rounded-full bg-[#efb8b3] relative top-14 flex items-center justify-center'>
        <img src={img} alt={alt} className='w-9/12' />
      </div>
      <h1 className='font-extrabold flex justify-center items-center text-3xl relative top-16 text-qBrown transition-all ease-in-out duration-300'>
        {title}
      </h1>
      <span className='flex content-center items-center relative top-16 transition-all duration-300 ease-in-out'>
        {subtitle} <MdKeyboardArrowRight />
      </span>
    </div>
  );
};

const Services = () => {
  return (
    <section id='services' className='lg:h-screen items-center bg-qPink'>
      <SubHeading
        title={"services"}
        color={"text-qBrown"}
        subtitle={"WHAT I CAN DO"}
      />
      <div className='lg:flex-row flex flex-col items-center justify-center mt-16'>
        <ServiceCard title={"test"} subtitle={"test"} img={SingingIcon} />
        <ServiceCard title={"test"} subtitle={"test"} img={EditingIcon} />
        <ServiceCard title={"test"} subtitle={"test"} img={VoiceOverIcon} />
      </div>
      <div className='lg:flex-row flex flex-col items-center justify-center'>
        <ServiceCard title={"test"} subtitle={"test"} img={SingingIcon} />
        <ServiceCard title={"test"} subtitle={"test"} img={VoiceOverIcon} />
      </div>
    </section>
  );
};

export default Services;
