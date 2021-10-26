<<<<<<< HEAD
import React from "react";

export const OutgoingMessage = () => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>Test which is a new approach to have all solutions</p>
                <span className="time_date"> 11:01 AM | June 9</span>
            </div>
        </div>
    );
};
=======
import React from 'react'
import { horaMes } from '../helpers/horaMes'

export const OutgoingMessage = ({ msg }) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{ msg.mensaje }</p>
                <span className="time_date"> { horaMes( msg.createdAt ) } </span>
            </div>
        </div>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
