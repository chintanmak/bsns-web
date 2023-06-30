import React from 'react';
import "../css/_navbar.scss";
import search from '../../assets/icons/search.png'

export default function Navbar() {
  return (
<>
    <div className='Navbar_container'>
        <div className='logo_container'>
          <h2>BSNS</h2>
        </div>
        <div className='menu_container'>
          <a>About</a>
          <a>Services</a>
          <a>Cases</a>
          <a>Blogs</a>
          <a>Contact</a>
        </div>
        <div className='search'>
          <img src={search} />
        </div>
    </div>
</>
  )
}
