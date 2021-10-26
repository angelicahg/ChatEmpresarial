<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    return (
        <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title mb-3">Chat - Registro</span>
=======
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';




export const RegisterPage = () => {

    const { register } = useContext( AuthContext );
    
    const [ form, setForm ] = useState({
        email: 'test6@test.com',
        password: '123456',
        name: 'Susana Paz'
    });

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async(ev) => {
        ev.preventDefault();
        
        const { email, password, name } = form;
        const msg = await register( name, email, password );

        if ( msg !== true ) {
            Swal.fire('Error', msg, 'error');
        }
    }

    const todoOk = () => {
        return ( 
            form.email.length > 0 && 
            form.password.length > 0 &&
            form.name.length > 0
        ) ? true : false;
    }


    return (
        <form 
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={ onSubmit }
        >
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="name"
<<<<<<< HEAD
                    placeholder="Nombre"
=======
                    placeholder="Nombre" 
                    value={ form.name }
                    onChange={ onChange }
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
                />
                <span className="focus-input100"></span>
            </div>

<<<<<<< HEAD
=======
            
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
<<<<<<< HEAD
                    placeholder="Email"
                />
                <span className="focus-input100"></span>
            </div>

=======
                    placeholder="Email" 
                    value={ form.email }
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
            
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
<<<<<<< HEAD
                    placeholder="Password"
                />
                <span className="focus-input100"></span>
            </div>

=======
                    placeholder="Password" 
                    value={ form.password }
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
<<<<<<< HEAD
                <button className="login100-form-btn">Crear cuenta</button>
            </div>
        </form>
    );
};
=======
                <button
                    type="submit"
                    className="login100-form-btn"
                    disabled={ !todoOk() }
                >
                    Crear cuenta
                </button>
            </div>

        </form>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
