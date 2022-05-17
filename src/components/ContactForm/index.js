import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from "emailjs-com";



function ContactForm() {
  const [formState, setFormState] = useState({ name: ' ', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  

  //sets the form as you type it
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      
      
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
      
    }  
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // shows the form state
  // console.log(formState);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w4mez1o",
        "template_7aaby5b",
        form.current,
        "bzqpeRpIYIG8Jyly3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className='inputs'>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className='inputs'>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div className='inputs'>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
              {errorMessage && (
                <div className='error-msg'>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            <button type="submit">Submit</button>
          </form>
        </section>
      );
    }

export default ContactForm;