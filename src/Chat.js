import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, {useState} from 'react';
import './Chat.css';
import axios from './axios';

function Chat({messages}) {

    const [input, setInput] = useState("");

    const sendTm = new Date().toUTCString();
    
    const sendMessage = async (e) => {
        e.preventDefault();

        axios.post('/messages/new',{
            name: 'You',
            message: input,
            timestamp: sendTm,
            received: true
        });

        setInput('');
    };

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar/>
                <div className='chat__headerInfo'>
                    <h4>Dummy Group</h4>
                    <p>Kiprotich, Omosh, Cindy, Val, Mel, Kush ...</p>
                </div>

                <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined fontSize='small'/>
                 </IconButton>
                 <IconButton>
                     <AttachFile fontSize='small'/>
                 </IconButton>
                 <IconButton>
                     <MoreVert fontSize='small'/>
                 </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && 'chat__receiver'}`}>
                    <span className='chat__name'>{message.name}</span>
                    {message.message}
                    <span className='chat__timestamp'>
                        {message.timestamp}
                        {/* {new Date().toUTCString()} */}
                    </span>
                </p>
                ))}
            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    placeholder='Type a message' 
                    type='text' />
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
