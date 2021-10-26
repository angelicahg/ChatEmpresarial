<<<<<<< HEAD
import React from "react";

export const IncomingMessage = () => {
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span className="time_date"> 11:01 AM | June 9</span>
                </div>
            </div>
        </div>
    );
};
=======
import React from 'react'
import { horaMes } from '../helpers/horaMes'

export const IncomingMessage = ({ msg }) => {

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{ msg.mensaje }</p>
                    <span className="time_date"> { horaMes( msg.createdAt ) }</span>
                </div>
            </div>
        </div>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
