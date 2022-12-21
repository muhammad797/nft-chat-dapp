import React from 'react'
import './styles.css'
import chatPic from '../../images/chatPic.png'
import sendImg from '../../images/send.png'
import arrow from "../../images/arrow.png"

const chatSection = () => {
    return (
        <div className='chatWrapper'>
            <div className='chatHead'>
                <h1>Let’s Chat 💬</h1>
                <div className='chatBtn'>
                    <button className='chatHeadBtn'>Open Chat Portal</button>
                </div>
            </div>
            <div className='container'>
                <div className='chatContainer'>
                    <div>
                        <div className='chatBox'>
                            <div className='chatBoxInfo'>
                                <div className='chatBoxImg'>
                                    <img src={chatPic}></img>

                                </div>
                                <div className='chatTxt'>

                                    <h3>Hello, this is Astronaut. Are you up for an adventure?</h3>
                                </div>
                            </div>
                            <div className='chatInfo'>
                                <p>7th December, 2022 | 15:48 UTC+0</p>
                            </div>

                            <div>

                            </div>

                        </div>
                        <div className='chatBox'>
                            <div className='chatBoxInfo'>
                                <div className='chatBoxImg'>
                                    <img src={chatPic}></img>
                                </div>
                                <div className='chatTxt'>
                                    <h3>Yes, ofcourse. Where do you want to go, btw can you leave mars? 😆</h3>
                                </div>
                            </div>
                            <div className='chatInfo'>
                                <p>7th December, 2022 | 15:48 UTC+0</p>
                            </div>
                        </div>
                    </div >
                    <div className='chatBox2'>
                        <div className='chatInfo2'>
                            <p>7th December, 2022 | 15:48 UTC+0</p>
                        </div>
                        <div className='chatBoxInfo'>
                            <div className='chatTxt2'>
                                <h3>Yeah, why not. All we have to do is to buy an artwork for Jupiter and we’ll be there 😏</h3>
                            </div>
                            <div className='chatImg'>
                                <img src={chatPic}></img>
                            </div>
                        </div>


                    </div>



                    <div className='inputWrapper'>
                        <img className='inputImg' src={chatPic}></img>
                        <div className='chooseNftWrap'>
                            <img className='chooseNft' src={arrow}></img>
                        </div>
                        <input type='text' placeholder='Type your message here...' className='chatField'></input>
                        <img className='inputImg2' src={sendImg}></img>
                    </div>

                </div>
            </div>
            <hr></hr>
        </div >

    )
}

export default chatSection