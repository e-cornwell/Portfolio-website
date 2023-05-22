import React, { useState } from "react";
import axios from 'axios';
import resume from '../../assets/forms/resume.pdf';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post('/send-email', {
        name: name, 
        email: email,
        subject: subject,
        message: message,
      });
      setStatus(response.data);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('')
      setInterval(()=>{
        setStatus('');
      }, 5000);

    } catch (err) {
      console.error(err);
      setStatus('Error sending email')
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf'
    link.target = '_blank'
    link.click();
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in Touch
        </h2>
        <button className="w-10% m-2 p-3 focus:outline-none rounded-[5px] bg-primaryColor text-white hover:bg-smallTextColor text-center ease-linear duration-150" onClick={handleDownload}>
          Download Resume <i class="ri-file-pdf-line"></i>
        </button>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115442.03755569423!2d-105.01253843139506!3d40.50650689730066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a4590f030ad%3A0xa9b14228b4ab4082!2sFort%20Collins%2C%20CO!5e0!3m2!1sen!2sus!4v1683156296654!5m2!1sen!2sus"
              className="rounded-[8px] border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="rounded-[8px] w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5">

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  value={name}
                  onChange={(ev)=> setName(ev.target.value)}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  value={email}
                  onChange={(ev)=> setEmail(ev.target.value)}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter the subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  value={subject}
                  onChange={(ev)=> setSubject(ev.target.value)}
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="html"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  value={message}
                  onChange={(ev)=> setMessage(ev.target.value)}
                />
              </div>

              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-primaryColor text-white hover:bg-smallTextColor text-center ease-linear duration-150">
                Send Message
              </button>
              <div className="py-1 px-2 text-[14px] leading-0">{status}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
