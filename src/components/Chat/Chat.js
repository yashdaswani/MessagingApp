import React, { useContext } from "react";
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import { ChatContext } from '../../context/ChatContext'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
      <span style={{color:"grey"}}>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCameraFrontIcon style={{color:"gray"}}/>
          <PersonAddAlt1Icon style={{color:"gray"}}/>
          <MoreHorizIcon style={{color:"gray"}}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
