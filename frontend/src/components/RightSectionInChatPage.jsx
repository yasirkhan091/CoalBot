import React, { useEffect, useRef, useState } from 'react'
import './RightSectionInChatPage.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SendIcon from '@mui/icons-material/Send';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
// import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
// import axios from 'axios';
TimeAgo.addDefaultLocale(en)

const Message = (props) => {
    
    const timeAgo = new TimeAgo('en-US')
    return (<>
      <div className={`messageContainer ${props.msgType}`}>
        <div className={`imageInMessage me-2 ms-2 ${props.msgType === "userMessage"?"align-items-end":"align-items-start"}`}>
          <img src={props.user?"/images/NoProfile.png":"/images/BotImage1.png"} alt="Profile" />
          <div className='timeAgoOfMessage '>{timeAgo.format(new Date(props.createdAt))}</div>
        </div>
        <div className={props.msgType === "userMessage" ? "messageSentByUser" : "messageRecievedByUser"}>
          {props.body}
        </div>
      </div>
    </>)
  }
export const RightSectionInChatPage = (props) => {
    const [messageList, setMessageList] = useState([
      {
        createdAt:Date.now(),
        body:"Hello!"
      },
      {
        createdAt:Date.now(),
        body:"I am Chat Bot."
      },
      {
        createdAt:Date.now(),
        body:"How may I help you?"
      }
    ]);
    const messageText=useRef();

    //For Srolling to newest message
    const ref = useRef(null);

  const scrollToLastFruit = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastFruit();
  }, [messageList]);

  // Getting New Message

    //For Showing Recieved messages in real time

    const generateMessage=(element,index)=>{
        if(element.user){
            return <Message {...element} {...props.sender} key={index}  msgType="userMessage"/>
        }
        return <Message {...element} {...props.reciever} key={index}/>
    }

    const sendAMessage=async ()=>{
       if(messageText.current.value){
         const newMessage={createdAt:Date.now(),body: messageText.current.value,user:true};
         setMessageList((value)=>[...value,newMessage]);
         messageText.current.value="";
       }
    }

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
          <div className="chatBodyContainingMessagesInRightSection" ref={ref}>
            {messageList && messageList.map(generateMessage)}
          </div>
          <div className="chatMessageInputContainer d-flex align-items-center justify-content-between">
            <input type="text" placeholder='Type Something...' ref={messageText} className='chatMessageInput' />
            <div className="chatMessageIconsContainer">
              <AttachFileIcon className='chatMessageIcons' />
              <AddPhotoAlternateIcon className='chatMessageIcons' />
              <button type="button" className="btn chatMessageSendButton" onClick={sendAMessage}><SendIcon className=' text-white fs-6' /></button>
            </div>
          </div>
        </div>
    </>
  )
}
