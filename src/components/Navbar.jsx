import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" className='w-32' /> {/* Adjust the size with w-32 or any size you prefer */}
      </div>

      <div className='flex m-8 items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar
