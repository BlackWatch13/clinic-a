import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const consulta_hojaclinica = sequelize.define('consulta_hojaclinica',{
    idconsulta:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    fecha:{
        type: Sequelize.TEXT
    },
    hora:{
     type: Sequelize.TEXT
    },
    motivo_consulta:{
        type: Sequelize.TEXT
    },
    peso:{
        type: Sequelize.DECIMAL
    },
    evaluacion:{
        type: Sequelize.TEXT
    },
    examenes_slt:{
        type: Sequelize.TEXT
    },
    idexpe:{
        type: Sequelize.TEXT
    },
    iduser:{
        type: Sequelize.TEXT
    }
 

},{
    tableName: 'hoja_clinica',
    timestamps: false
})



export default consulta_hojaclinica;