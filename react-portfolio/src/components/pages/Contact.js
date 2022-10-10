import React from 'react';


const handleFormSubmit = (e) => {
  e.preventDefault();

}


export default function ContactForm(props) {
  return (
    <div className='container px-4 py-5'>
      <h2 className="pb-2 border-bottom">Contact me</h2>
      <div className="mb-3">
        <label className="form-label">Your name</label>
        <input
          value={props.value}
          type="text"
          class="form-control"
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
          value={props.value}
          type="email"
          class="form-control"
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
          class="form-control"
          id="content"
          value={props.value}
          rows="3"
          data-toggle="tooltip" 
          data-html="true"
          data-placement="top" 
          title="Please enter your message here"></textarea>
      </div>
      <div lassName="mb-3">
        <button onClick={props.handleFormSubmit} type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
