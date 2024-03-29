import React, { useRef } from "react";
import SubHeading from "./SubHeading";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <section className='bg-[#AD7F84]' id='contact'>
      <SubHeading
        title={"contact"}
        subtitle={"LET'S TALK"}
        color={"text-qWhite"}
      />
      <form className='mt-20 mb-20' ref={form} onSubmit={sendEmail} id='form'>
        <div className='flex justify-around'>
          <input
            required
            type='text'
            name='from_name'
            placeholder='Name'
            className='w-[40%] p-5 bg-qWhite rounded-xl'
          />
          <input
            required
            type='email'
            placeholder='Email'
            name='from_email'
            className='w-[40%] p-5 bg-qWhite rounded-xl'
          />
        </div>
        <div className='flex flex-col items-center'>
          <input
            required
            type='text'
            name='subject'
            placeholder='Subject'
            className='w-[90%] p-5 bg-qWhite rounded-xl mt-3'
          />
          <textarea
            required
            name='message'
            type='text'
            placeholder='Message &#13; &#10;ex. Hello there, I am someone who would love to inquire about comissioning you to have your super hot cool voice be featured in my project!'
            className='w-[90%] p-5 pb-40 bg-qWhite rounded-xl mt-3 overflow-hidden'
          />
        </div>
        <div className='flex justify-center pt-10'>
          <Button
            type='submit'
            form='form'
            value='Submit'
            buttonName={<AiOutlineMail />}
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
