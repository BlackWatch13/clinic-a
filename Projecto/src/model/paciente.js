import Sequelize from 'sequelize';
import {sequelize} from '../db/db';


const paciente = sequelize.define('paciente',{
    idpaciente:{
      type: Sequelize.TEXT,
      primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
    apellido:{
        type: Sequelize.TEXT
    },
    telefono:{
        type: Sequelize.TEXT
    },
    edad:{
        type: Sequelize.INTEGER
    },
    direccion:{
        type: Sequelize.TEXT
    },
    sexo:{
        type: Sequelize.TEXT
    }


},{
    tableName: 'pacientes',
    timestamps: false
}
)


export default paciente;