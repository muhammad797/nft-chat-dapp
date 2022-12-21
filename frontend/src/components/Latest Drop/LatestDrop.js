import React from 'react'
import './styles.css'
import latestImg from '../../images/latest-drop.jpg'
import heartImg from '../../images/heart.png'

const LatestDrop = () => {
    return (
        <div className='latestWrapper'>
            <div className='latestHead'>
                <h1>Latest Drops 📣</h1>
                <div className='latestBtn'>
                    <button className='headBtn'>View All</button>
                </div>
            </div>

            <div className='latestImg'>
                <div>
                    <div className='contentWrapper'>
                        <img className='contentImg' src={latestImg}></img>

                        <div className='imgData'>
                            <div className='imgDescription'>
                                <h3>Astronaut on Mars #137
                                </h3>
                                <p>Oil painting styled astronaut wandering on orange soil of mars.</p>

                            </div>
                            <div className='imgBtns'>
                                <h2>
                                    0.1 ETH
                                </h2>
                                <div>
                                    <img src={heartImg}></img>
                                    <button className='latestImgBtn'>View</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={latestImg}></img>
                    <div className='contentWrapper'>
                        <div className='imgData'>
                            <div className='imgDescription'>
                                <h3>Astronaut on Mars #137
                                </h3>
                                <p>Oil painting styled astronaut wandering on orange soil of mars.</p>

                            </div>
                            <div className='imgBtns'>
                                <h2>
                                    0.1 ETH
                                </h2>
                                <div>
                                    <img src={heartImg}></img>
                                    <button className='latestImgBtn'>View</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={latestImg}></img>
                    <div className='contentWrapper'>
                        <div className='imgData'>
                            <div className='imgDescription'>
                                <h3>Astronaut on Mars #137
                                </h3>
                                <p>Oil painting styled astronaut wandering on orange soil of mars.</p>

                            </div>

                            <div className='imgBtns'>
                                <h2>
                                    0.1 ETH
                                </h2>
                                <div>
                                    <img src={heartImg}></img>
                                    <button className='latestImgBtn'>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestDrop