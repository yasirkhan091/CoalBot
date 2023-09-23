import "./ChatPage.css"
import { RightSectionInChatPage } from './RightSectionInChatPage';


export const ChatPage = () => {

  return (
    <div className="container-fluid p-0">
    <div className='chatOuterContainer w-100 displayFlexContainer row m-0'>
      <div className="chatInnerContainer d-flex col-10 col-md-8 col-lg-6 mx-auto p-0">
  
        <RightSectionInChatPage/>
        
      </div>
    </div>
    </div>
  )
}