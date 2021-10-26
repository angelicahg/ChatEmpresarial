<<<<<<< HEAD
import React from "react";

export const Searchbox = () => {
    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>Recientes</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button className="btn text-danger">Salir</button>
                </div>
            </div>
        </div>
    );
};
=======
import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const Searchbox = () => {

    const { auth, logout } = useContext( AuthContext );

    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{ auth.name }</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button 
                        className="btn text-danger"
                        onClick={ logout }
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
