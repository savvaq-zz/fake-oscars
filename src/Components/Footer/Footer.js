import React from 'react';
import './Footer.css'
import logo from '/Users/dima/code/savvaq/fake-oscars/src/img/footer-img.png'


const Footer = () => {
  return (
  <div className="footer">
    <a href="https://github.com/savvaq/fake-oscars" target="_blank">
      <img className="footer-img" src={logo} alt="logo" />
    </a>
  </div>
  )
}

export default Footer;