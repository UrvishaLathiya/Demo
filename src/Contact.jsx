import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone:'',
    email:'',
    message:''
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name] : value,
      }
    })
  }

  const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}, My mobile number is ${data.email}, My Email is ${data.phone}, My Message ${data.message}`);
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form autoComplete='off' onSubmit={formSubmit}>
              <div className='mb-3'>
                <label>Full Name</label>
                <input type='text' className='form-control' id='name' name='fullname' value={data.fullname} onChange={InputEvent} placeholder='Enter Your Name' />
              </div>
              <div className='mb-3'>
                <label>Phone</label>
                <input type='phone' className='form-control' id='phone' name='phone' value={data.phone} onChange={InputEvent} placeholder='Phone' />
              </div>
              <div className='mb-3'>
                <label>Email Address</label>
                <input type='email' className='form-control' id='email' name='email' value={data.email} onChange={InputEvent} placeholder='Enter Your Email' />
              </div>
              <div className='mb-3'>
                <label>Message</label>
                <textarea className='form-control' id='textarea' name='message' value={data.message} onChange={InputEvent} rows='3' />
              </div>
              <div className='col-12'>
                <button class="btn btn-outline-primary" type='submit'>Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
