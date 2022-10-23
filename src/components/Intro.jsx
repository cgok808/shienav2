import React from "react";

const Button = ({ buttonName }) => {
  return (
    <div className='flex content-center text-center'>
      <button className='bg-transparent bg-no-repeat  cursor-pointer outline-none font-black border-2 border-white p-4 text-2xl rounded-xl text-qWhite box__shadow transition-all duration-300 ease-linear hover:shadow-none hover:transition-all hover:translate-y-1 m-5'>
        {buttonName}
      </button>
    </div>
  );
};

const Intro = () => {
  return (
    <section
      id='home'
      className='bg-qPink h-screen relative flex items-center flex-col overflow-hidden'
    >
      <div className='flex content-center text-center pt-80'>
        <h1 className='font-bold text-6xl text-qWhite'>Hello World!</h1>
      </div>
      <div className="flex mt-4">
        <Button buttonName={"PLAY DEMOS"} />
        <Button buttonName={"CONTACT"} />
      </div>
    </section>
  );
};

export default Intro;
