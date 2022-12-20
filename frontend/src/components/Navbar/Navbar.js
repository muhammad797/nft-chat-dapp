import React from 'react'
import './styles.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className='title'>Chatty NFT📣</a>
      <ul className='navItems'>

        <li><a>Marketplace</a></li>
        <li><a>Chat</a></li>
        <li>
          <a className='navBtn'>Connect Wallet</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar