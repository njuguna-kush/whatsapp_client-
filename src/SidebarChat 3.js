import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar/>
            <div className='sidebarChat__info'>
                <h3>Last Group</h3>
                <p>This is the last room</p>
            </div>
        </div>
    )
}

export default SidebarChat
