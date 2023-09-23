import React from 'react'
import './RightSectionInChatPage.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RightSectionInChatPage() {
    return (
        <>
            <div className={`chatRightSection`}>
                <div className="chatHeadingOfRightSection d-flex align-items-center justify-content-between">
                    <div className='displayFlexContainer'>
                        <div className="imageInMessage me-2">
                            <img src={"/images/BotImage1.png"} alt="Profile" />
                        </div>
                        <span>CoalBot</span>
                    </div>
                    <div className="chatListOfIconsInRightSectionHeading displayFlexContaier">
                        <VideocamIcon className='chatIconsInRightSectionHeading' />
                        <CallIcon className='chatIconsInRightSectionHeading' />
                        <MoreVertIcon className='chatIconsInRightSectionHeading' />
                    </div>
                </div>
            </div>
        </>
    )
}
