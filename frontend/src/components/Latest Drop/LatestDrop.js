import React from 'react'
import './styles.css'
import latestImg from '../../images/latest-drop.jpg'
import heartImg from '../../images/heart.png'

const LatestDrop = () => {
    return (
        <div className='latestWrapper'>
            <div className='latestHead'>
                <h1>Latest Drop📣</h1>
                <div className='latestBtn'>
                    <button className='headBtn'>View All</button>
                </div>
            </div>

            <div className='latestImg'>
                <div>
                    <div className='contentWrapper'>
                        <img src={latestImg}></img>

                        <div className='imgData'>
                            <div className='imgDescription'>
                                <h2>Astronaut on Mars #137
                                </h2>
                                <p>Oil painting styled astronaut wandering on orange soil of mars.</p>
                                <h1>
                                    0.1 ETH
                                </h1>
                            </div>
                            <div className='imgBtn'>
                                <img src={heartImg}></img>
                                <button className='btn2'>View</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={latestImg}></img>
                    <div className='contentWrapper'>
                        <div className='imgData'>
                            <div className='imgDescription'>
                                <h2>Astronaut on Mars #137
                                </h2>
                                <p>Oil painting styled astronaut wandering on orange soil of mars.</p>
                                <h1>
                                    0.1 ETH
                                </h1>
                            </div>
                            <div className='imgBtn'>
                                <img src={heartImg}></img>
                                <button className='btn2'>View</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={latestImg}></img>
                    <div className='contentWrapper'>
                        <div className='imgData'>
                            <div className='imgDescription'>
                                <h2>Astronaut on Mars #137
                                </h2>
                                <p>Oil painting styled astronaut wandering on orange soil of mars.</p>
                                <h1>
                                    0.1 ETH
                                </h1>
                            </div>
                            <div className='imgBtn'>
                                <img src={heartImg}></img>
                                <button className='btn2'>View</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestDrop