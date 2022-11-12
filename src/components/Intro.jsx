import React from "react";

const Button = ({ buttonName }) => {
  return (
    <button className='bg-transparent bg-no-repeat cursor-pointer outline-none font-black border-2 border-white px-6 py-3 text-2xl rounded-xl text-qWhite box__shadow transition__ease hover:shadow-none hover:transition-all hover:translate-y-1 m-5'>
      {buttonName}
    </button>
  );
};

const Intro = () => {
  return (
    <section id='home' className='bg-qPink h-screen flex flex-col items-center'>
      <div className='pt-80'>
        <h1 className='font-bold text-6xl text-qWhite text-center'>
          Hello World!
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
