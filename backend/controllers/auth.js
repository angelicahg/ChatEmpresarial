const { response } = require("express");
const Usuario = require('../models/usuario.js')
const bcrypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');


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
    const token = await generarJWT(usuario.id);



    res.json({
      ok: true,
      usuario,
      token
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



  //verificar si existe el correo 
  const { email, password } = req.body;
  try {
    const usuarioDB = await Usuario.findOne({ email });
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: 'Email no encontrado'
      });
    }
    // Validar el password
    const validPassword = bcrypt.compareSync(password, usuarioDB.password);
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: 'La contraseña no es valida'
      });
    }

    //Generar el JWT 
    const token = await generarJWT(usuarioDB.id);

    res.json({
      ok: true,
      usuario: usuarioDB,
      token

    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });



  }





}



//renewToken
const renewToken = async (req, res) => {
  const uid = req.uid;

  // generar un nuevo JWT, generarJWT... uid...
  const token = await generarJWT(uid);

  // Obtener el usuario por el UID, Usuario.findById... 
  const usuario = await Usuario.findById(uid);





  res.json({

    ok: true,
    usuario,
    token

  });

}




module.exports = {
  crearUsuario,
  login,
  renewToken,

}