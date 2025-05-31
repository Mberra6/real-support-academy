import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'> 
        <div>
          <h1>Real Support Academy</h1>
          <p>Learn with no limits.</p>
        </div>
        <div>
          <a href='/'>
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-youtube-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <div className='bottom'> 
      <div>
        <h4>Explore</h4>
        <a href='/'>Home</a>
        <a href='/about'>About Us</a>
        <a href='/courses'>Courses</a>
      </div>
      <div>
        <h4>Information</h4>
        <button className="footer-link" type="button">Membership</button>
        <button className="footer-link" type="button">Purchases Guide</button>
        <button className="footer-link" type="button">Contact Us</button>
        <button className="footer-link" type="button">FAQs</button>
      </div>
      <div>
      <h4>Other</h4>
      <button className="footer-link" type="button">Terms of Service</button>
      <button className="footer-link" type="button">Privacy Policy</button>
      <button className="footer-link" type="button">License</button>               
      </div>
      <div>
        <h4>Get in Touch</h4>
        <button className="footer-link" type="button">
          <i className="fa-solid fa-envelope"></i> rsasupport@gmail.com
        </button>
        <button className="footer-link" type="button">
          <i className="fa-solid fa-phone"></i> +44 75784 90098
        </button>
      </div>
      
      </div>
    </div>
  );
}

export default Footer;
