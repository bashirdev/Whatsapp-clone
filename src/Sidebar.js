import React from 'react';
import {Avatar, IconButton } from '@material-ui/core';
import { DonutLarge,Chat, MoreVert, SearchOutlined } from '@material-ui/icons';

import './Sidebar.css';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className='sidebar'>
          <div className="sidebar_header">
                  <Avatar />
                <div className="sider_headerRight">
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder='Search or start new chat' />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;