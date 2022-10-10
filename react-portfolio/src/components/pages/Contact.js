import React, { useState } from 'react';

export default function ContactForm(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name
    const inputValue = target.value

    if (inputType === 'name') {
      setName(inputValue);
    }

    if (inputType === 'email') {
      setEmail(inputValue); 
    }

    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      document.querySelector("#name").style.borderColor = "red";
      document.querySelector("#error-name").innerHTML = "Please enter a valid name";
      document.querySelector("#error-name").style.color = "red";
    }  else {
      document.querySelector("#name").style.borderColor = "#ced4da";
      document.querySelector("#error-name").innerHTML = "";
    }

    if (!validateEmail(email)){
      document.querySelector("#email").style.borderColor = "red";
      document.querySelector("#error-email").innerHTML = "Please enter a valid email";
      document.querySelector("#error-email").style.color = "red";
    } else {
      document.querySelector("#email").style.borderColor = "#ced4da";
      document.querySelector("#error-email").innerHTML = "";
    }

    if (!message) {
      document.querySelector("#message").style.borderColor = "red";
      document.querySelector("#error-message").innerHTML = "Please enter a valid message";
      document.querySelector("#error-message").style.color = "red";
    } else {
      document.querySelector("#message").style.borderColor = "#ced4da";
      document.querySelector("#error-message").innerHTML = "";
    }

    if (name && message && validateEmail(email)) {
      window.open(`mailto: freddie.yty@gmail.com?subject=${name}&body=${message}`);

      setName('');
      setEmail('');
      setMessage('');
      alert("email is ready!");
    }

    
  }


  return (
    <div className='container px-4 py-5'>
      <h2 className="pb-2 border-bottom">Contact me</h2>
      <div className="mb-3">
        <label className="form-label">Your name</label>
        <input
          value={name}
          name='name'
          onChange={handleInputChange}
          type="text"
          className="form-control"
          id="name"
          placeholder="your name"
          data-toggle="tooltip"
          data-html="true"
          data-placement="top"
          title="Please enter your name here" />

      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          value={email}
          onChange={handleInputChange}
          name='email'
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          data-toggle="tooltip"
          data-html="true"
          data-placement="top"
          title="Please enter your email here" />
      </div>
      <div className="mb-3">
        <label className="form-label">Your message</label>
        <textarea
          className="form-control"
          id="message"
          name='message'
          value={message}
          onChange={handleInputChange}
          rows="3"
          data-toggle="tooltip"
          data-html="true"
          data-placement="top"
          title="Please enter your message here"></textarea>
      </div>
      <div>
        <p id='error-name'></p>
        <p id='error-email'></p>
        <p id='error-message'></p>
      </div>
      <div className="mb-3">
        <button onClick={handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
