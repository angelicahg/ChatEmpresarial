const { response } = require("express");
const Usuario = require('../models/usuario.js')
const bcrypt = require('bcryptjs');


const crearUsuario = async (req, res = response) => {

  try {
    const { email, password } = req.body;

    //verificar que el email no exista
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo ya está registrado'
      });
    }


    const usuario = new Usuario(req.body);
    //eccriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);


    // Guardar usuario en DB

    await usuario.save();

    //Generar el JWT 



    res.json({
      usuario
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }





}

//login
const login = async (req, res) => {




  const { email, password } = req.body;

  res.json({

    ok: true,
    msg: 'login',
    email,
    password

  });

}



//renewToken
const renewToken = async (req, res) => {
  res.json({

    ok: true,
    msg: 'renew'

  });

}




module.exports = {
  crearUsuario,
  login,
  renewToken,

}