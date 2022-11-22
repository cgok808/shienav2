import React from "react";
import Button from "./Button";

const Intro = () => {
  return (
    <section id='home' className='bg-qBlack h-screen flex flex-col items-center'>
      <div className='pt-80'>
        <h1 className='font-bold text-6xl text-qWhite text-center'>
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
