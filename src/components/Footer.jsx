import React from "react";

const Footer = () => {
  return (
    <footer className='bg-[#96676C] pt-16 pb-16 flex flex-col lg:flex-row text-center items-center justify-center text-qWhite'>
      <div className='lg:w-[30%]'>
        <div className='mb-3 lg:mb-0'>
          <h1 className='font-extrabold text-3xl'>contact</h1>
          <ul className='text-lg'>
            <li>
              <a>
                <strong>email:</strong> shishishiena@gmail.com
              </a>
            </li>
            <li>
              <strong>twitter:</strong> @shishishiena
            </li>
            <li>
              <strong>discord:</strong> @shiena#077
            </li>
          </ul>
        </div>
      </div>
      <div className='lg:w-[30%]'>
        <div className='mb-3 lg:mb-0'>
          <h1 className='font-extrabold text-3xl'>resumes</h1>
          <ul className='text-lg'>
            <li>voice acting resume</li>
            <li>singing resume</li>
            <li>academic resume</li>
          </ul>
        </div>
      </div>
      <div className='lg:w-[30%] w-[80%]'>
        <div className='mb-3 lg:mb-0 text-lg'>
          <h1 className='font-extrabold text-3xl'>about</h1>
          <h6 className='text-lg'>
            i'm just a lil internet gremlim who would like to help bring a
            budget-friendly and accessible voice to your project! wake up and
            hire me please. thank you! :D
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
