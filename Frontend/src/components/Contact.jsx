import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contactstyle.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7m871lg', 'template_3cahuxr', form.current, {
        publicKey: 'TxvHvic9dKzJgIOl5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label >Name</label>
      <input type="text" name="user_name" placeholder='Enter you name' required />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your email' required />
      <label>Message</label>
      <textarea  name="message" rows="6" placeholder='Enter your message' required />
      <input type="submit"  className='bg-red-700 cursor-pointer text-white rounded-md px-3 py-1 hover:bg-red-800 duration:200' value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;