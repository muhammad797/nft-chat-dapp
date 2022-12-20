import React from 'react'
import headerImg from '../../images/astronaut.jpg'
import './styles.css'

const Header = () => {
    return (
        <div className='headWrapper'>
            <div className='header'>
                <div className='header-content'>
                    <h1><span>Hello 👋,</span><br></br>
                        From a platform where you can chat with other members over Blockchain technology! ✨</h1>
                    <div>
                        <button className='btn1'>Start Chatting</button>
                        <button className='btn2'>Explore MarketPlace</button>
                    </div>

                </div>
                <div className='header-img'>
                    <img src={headerImg} alt=''></img>
                    <div className='imgContent'>
                        <div className='imgTxt'>
                            <h2>Astronaut on Mars #49</h2>
                            <p>This astronaut found a blue orb which powered
                                the suit for lifetime of oxygen</p>
                            <h1>0.2 ETH</h1>
                        </div>
                        <div className='imgBtn'>
                            <button className='btn1'>Mint Artwork</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header