import React from "react";
import SubHeading from "./SubHeading";

import SingingIcon from "../assets/services/singing.png";
import EditingIcon from "../assets/services/editing.png";
import VoiceOverIcon from "../assets/services/voiceover.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const ServiceCard = ({ title, subtitle, img, alt }) => {
  return (
    <div className='h-72 w-80 md:w-96 bg-qWhite rounded-3xl transition__ease flex flex-col items-center hover:bg-qBrown hover:transition__ease m-4 group card__img-white'>
      <div className='h-32 w-32 rounded-full bg-[#efb8b3] relative top-14 flex items-center justify-center'>
        <img src={img} alt={alt} className='w-9/12 img__white' />
      </div>
      <h2 className='font-extrabold flex justify-center items-center text-3xl relative top-16 text-qBrown transition__ease group-hover:text-qWhite'>
        {title}
      </h2>
      <a className='flex items-center relative top-16 cursor-pointer subtitle__hover transition__ease group-hover:text-qWhite text-md'>
        <h6>{subtitle}</h6>
        <span className='text-md relative top-px'>
          <MdKeyboardArrowRight />
        </span>
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id='services' className='bg-qPink'>
      <SubHeading
        title={"services"}
        color={"text-qBrown"}
        subtitle={"WHAT I CAN DO"}
      />
      <div className='lg:flex-row flex flex-col items-center justify-center lg:mb-16 mt-16'>
        <ServiceCard
          title={"singing"}
          subtitle={"hear cool jams"}
          img={SingingIcon}
          alt={"singing"}
        />
        <ServiceCard
          title={"voiceover"}
          subtitle={"oooh shiny demos"}
          img={VoiceOverIcon}
          alt={"voiceover"}
        />
        <ServiceCard
          title={"editing"}
          subtitle={"well... dm me"}
          img={EditingIcon}
          alt={"editing"}
        />
      </div>
    </section>
  );
};

export default Services;
