<<<<<<< HEAD
import React from "react";
import { SidebarChatItem } from "./SidebarChatItem";

export const Sidebar = () => {
    const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="inbox_chat">
            {chats.map((chat) => (
                <SidebarChatItem key={chat} />
            ))}

            {/*    <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>
        </div>
    );
};
=======
import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );

    const { uid } = auth;

    return (
        <div className="inbox_chat">

            {
                chatState.usuarios
                    .filter( user => user.uid !== uid )
                    .map( (usuario) => (
                    <SidebarChatItem 
                        key={ usuario.uid }
                        usuario={ usuario }
                    />
                ))
            }


            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>

    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
