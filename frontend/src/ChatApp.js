<<<<<<< HEAD
import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import { AppRouter } from "./router/AppRouter";

export const ChatApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};
=======
import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { ChatProvider } from './context/chat/ChatContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter';

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


export const ChatApp = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
