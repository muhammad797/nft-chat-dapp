import React from 'react'
import './styles.css'
import discord from '../../images/discord.png'
import twitter from '../../images/twitter.png'
const Footer = () => {
    return (
        <div className='footWrapper'>
            <h3>Chatty NFTs📣</h3>
            <p>Copyright @ 2022 - ChattyNFTs - All Right Reserved</p>
            <div className='footerImg'>
                <img src={discord}></img>
                <img src={twitter}></img>
            </div>
        </div>
    )
}

export default Footer