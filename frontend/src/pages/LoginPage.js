<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "test1@test.com",
        password: "123456",
        rememberme: false,
    });

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (email) {
            setForm((form) => ({
=======
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';

export const LoginPage = () => {

    const { login } = useContext( AuthContext );
    
    const [ form, setForm ] = useState({
        email: '',
        password: '',
        rememberme: false
    });

    useEffect(() => {
        const email = localStorage.getItem('email');
        if ( email ) {
            setForm( (form) => ({
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
                ...form,
                email,
                rememberme: true,
            }));
        }
<<<<<<< HEAD
    }, []);

    const onChange = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const toggleCheck = () => {
        console.log("???");

        setForm({
            ...form,
            rememberme: !form.rememberme,
        });
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        form.rememberme
            ? localStorage.setItem("email", form.email)
            : localStorage.removeItem("email");

        const { email, password } = form;

        login(email, password);
    };

    return (
        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={onSubmit}
        >
            <span className="login100-form-title mb-3">Chat - Ingreso</span>

=======

    }, [])


    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const toggleCheck = () => {
        console.log('??');
        setForm({
            ...form,
            rememberme: !form.rememberme
        });
    }

    const onSubmit = async(ev) => {
        ev.preventDefault();

        (form.rememberme) 
            ? localStorage.setItem('email', form.email )
            : localStorage.removeItem('email');
        
        const { email, password } = form;
        const ok = await login( email, password );

        if ( !ok ) {
            Swal.fire('Error', 'Verifique el usuario y contraseña', 'error');
        }
    }

    const todoOk = () => {
        return ( form.email.length > 0 && form.password.length > 0 ) ? true : false;
    }


    return (
        <form 
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={ onSubmit }
        >
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>
            
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
<<<<<<< HEAD
                    value={form.email}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>

=======
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
                    value={form.password}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="row mb-3">
                <div className="col" onClick={() => toggleCheck()}>
=======
                    placeholder="Password" 
                    value={ form.password }
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
                <div 
                    className="col"
                    onClick={ ()=> toggleCheck() }
                >
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
                    <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
<<<<<<< HEAD
                        name="rememberme"
                        checked={form.rememberme}
                        onChange={onChange}
                        readOnly
                    />
                    <label className="label-checkbox100">Recordarme</label>
=======
                        name="rememberme" 
                        checked={ form.rememberme }
                        readOnly
                    />
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
<<<<<<< HEAD
                <button className="login100-form-btn">Ingresar</button>
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
                    Ingresar
                </button>
            </div>

        </form>
    )
}
>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
