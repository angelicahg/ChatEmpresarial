<<<<<<< HEAD
import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mesgs">
            {/*    <!-- Historia inicio --> */}
            <div className="msg_history">
                {msgs.map((msg) =>
                    msg % 2 ? (
                        <IncomingMessage key={msg} />
                    ) : (
                        <OutgoingMessage key={msg} />
                    )
                )}
            </div>
            {/*    <!-- Historia Fin --> */}

            <SendMessage />
        </div>
    );
};
=======
import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div 
                id="mensajes"
                className="msg_history"
            >

                {
                    chatState.mensajes.map( msg => (
                        ( msg.para === auth.uid )
                            ? <IncomingMessage key={ msg._id } msg={ msg } />
                            : <OutgoingMessage key={ msg._id } msg={ msg } />
                    ))
                }

                

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
