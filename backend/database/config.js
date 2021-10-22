const mongoose = require('mongoose');


const dbConnection = async () => {

  try {

    mongoose.connect(process.env.DB_CNN_STRING)



  } catch (error) {
    console.log(error);
    throw Error('Error en la base de datos -vea logs');

  }


}