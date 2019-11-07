import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const expediente = sequelize.define('expediente',{
    idexpe:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    idpaciente:{
        type: Sequelize.TEXT,
    },
    alergias:{
        type: Sequelize.TEXT
    },
    enferpade:{
        type: Sequelize.TEXT
    }
},{
    tableName: 'expediente',
    timestamps: false
})

export default expediente;