<<<<<<< HEAD
import React from "react";
import { ChatSelect } from "../components/ChatSelect";
import { InboxPeople } from "../components/InboxPeople";
import { Messages } from "../components/Messages";
import "../css/chat.css";

export const ChatPage = () => {
    return (
        <div className="messaging">
            <div className="inbox_msg">
                <InboxPeople />
                {true ? <Messages /> : <ChatSelect />}
            </div>
        </div>
    );
};
=======
import React, { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';


import '../css/chat.css';

export const ChatPage = () => {

    const { chatState } = useContext( ChatContext );

    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {
                    ( chatState.chatActivo )
                        ? <Messages />
                        : <ChatSelect />
                }
                

            </div>


        </div>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
