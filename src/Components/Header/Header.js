import React from 'react'
import './Header.css'
import logo from '/Users/dima/code/savvaq/fake-oscars/src/img/logo.png'

const Header = () => {

  return (
    <div className="header">
      <a href="#">
        <img className="logo-img" src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default Header;