import Sequelize from 'sequelize';
import {sequelize} from '../db/db';


const receta = sequelize.define('receta',{
    idrec:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    medicamento:{
        type: Sequelize.TEXT
    },
    nombpac:{
        type: Sequelize.TEXT
    },
    edad:{
        type: Sequelize.INTEGER
    },
    sexo:{
        type: Sequelize.TEXT
    },
    dosis:{
        type: Sequelize.TEXT
    },
    formed:{
       type: Sequelize.TEXT
    },
    viadmi:{
        type: Sequelize.TEXT
    },
    cantpre:{
        type: Sequelize.TEXT
    },
    idconsulta:{
        type: Sequelize.TEXT
    }

},{
    tableName:'recetas',
    timestamps: false
})

export default receta; 