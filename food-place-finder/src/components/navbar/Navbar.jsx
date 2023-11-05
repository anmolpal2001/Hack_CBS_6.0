import React from 'react'
import './Navbar.css'
import logo3 from '../../assets/logo3.png'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    name: 'Home',
    url: '/'
  },
  {
    id: 2,
    name: 'About',
    url: '/about'
  },
  // {
  //   id: 3,
  //   name: 'Contact',
  //   url: '/contact'
  // }
]

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <Link  to='/'><img src={logo3} alt="logo" className='logo-img'/></Link>
        </div>
        <div className='links'>
            <ul className='nav-links'>
              {data.map((item,index)=> (
                <Link key={index} to={item.url}>{item.name}</Link>
              ))}
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar