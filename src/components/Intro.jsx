import React from "react";
import Button from "./Button";

const Intro = () => {
  return (
    <section
      id='home'
      className='bg-qBlack h-screen flex flex-col items-center justify-center'
    >
      <div>
        <h1 className='font-bold md:text-6xl text-4xl text-qWhite text-center'>
          Hello everybody!
        </h1>
      </div>
      <div className='flex mt-4'>
        <Button buttonName={"PLAY DEMOS"} />
        <Button buttonName={"CONTACT"} />
      </div>
    </section>
  );
};

export default Intro;
