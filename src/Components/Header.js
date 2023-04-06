import React from 'react'
import AccountCircle from './AccountCircle'
import logo from '../logo.svg'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
        <img className='logo-pic' src={logo} alt='Logo' />
        </div>
        <div className="user-btn">
            <AccountCircle/>
        </div>
    </div>
  )
}

export default Header
