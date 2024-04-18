import React from 'react'
import './NavBar.css';

export default function NavBar() {

  return (
    <div className='Navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
        <ul className='navbar-btns'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className="nav-left">
        <img className='nav-search' src="nav-search-icon.png" alt="" />
        <p className='nav-children'>Children</p>
        <img className='nav-noti' src="nav-noti-icon.svg" alt="" />
        <img className='nav-avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
      {/* <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" /> */}
    </div>
  )
}
