import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// import contact data
import { contact } from '../data';


const Contact = () => {
  const [state, handleSubmit] = useForm("myyaknge");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='section-title before:content- relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact
          </h1>
          {/* content-contact */}
          <p className='subtitle'>
           If you want to touch with me please fill free to reach me and fill the details.
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, Mobile, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='text-accent font-normal'>{Mobile}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>


          <form
            onSubmit={handleSubmit}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8' htmlFor="email">
              <input className='input' type='text' placeholder='Your name' id='name' name='name' />
              <input className='input' type='email' placeholder='Your email' id='email' name='email' />
            </div>
            <input className='input' type='text' placeholder='Subject' id='subject' name='subject' />
            <textarea
              className='textarea'
              placeholder='Your message'
              id='Message'
              name='Message'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover' type='submit' disabled={state.submitting}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
