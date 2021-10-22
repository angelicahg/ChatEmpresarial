const { response } = require("express");




const crearUsuario = async (req, res = response) => {
  res.json({

    ok: true,
    msg: 'new'

  });

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