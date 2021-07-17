import React from 'react';
import './Footer.css'
import logo from '/Users/dima/code/savvaq/fake-oscars/src/img/footer-img.png'


const Footer = () => {
  return (
  <div className="footer">
    <a href="#">
      <img className="footer-img" src={logo} alt="logo" />
    </a>
  </div>
  )
}

export default Footer;