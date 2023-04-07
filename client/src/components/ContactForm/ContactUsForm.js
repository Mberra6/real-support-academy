import React from 'react';
import "./contact-us.css"

const ContactUsForm = () => {
  return (
    <div className='form-container'>
        <h1>Send us a message</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send message</button>

        </form>
    </div>
  );
}

export default ContactUsForm;
