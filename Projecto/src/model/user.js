import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const user =sequelize.define('user',{
    iduser:{
       type: Sequelize.TEXT,
       primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
    apellido:{
        type: Sequelize.TEXT
    },
    estado:{
        type: Sequelize.INTEGER
    },
    especialidad:{
        type: Sequelize.TEXT
    },
    pass:{
        type: Sequelize.TEXT
    }
},{
    tableName: 'user',
    timestamps: false
})

export default user;