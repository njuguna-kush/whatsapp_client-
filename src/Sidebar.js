import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import SidebarChat_2 from './SidebarChat 2';
import SidebarChat_3 from './SidebarChat 3';

function Sidebar() {
    return (
        <div className='sidebar'>
         <div className='sidebar__header'>
             <Avatar fontSize='small' src='https://www.macmillandictionaryblog.com/wp-content/uploads/2018/05/Depositphotos_11422422_m-2015-810x540.jpg'/>
             <div className='sidebar__headerRight'>
                 <IconButton>
                    <DonutLargeIcon fontSize='small'/>
                 </IconButton>
                 <IconButton>
                     <ChatIcon fontSize='small'/>
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon fontSize='small'/>
                 </IconButton>
             </div>
         </div>
         <div className='sidebar__search'>
             <div className='sidebar__searchContainer'>
                 <SearchOutlined/>
                 <input placeholder='Search or start new chat' type='text'/>
             </div>
         </div>

         <div className='sidebar__chats'>
             <SidebarChat/>
             <SidebarChat_2/>
             <SidebarChat_3/>
         </div>
        </div>
    )
}

export default Sidebar
