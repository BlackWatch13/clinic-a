import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const consulta_hojaclinica = sequelize.define('consulta_hojaclinica',{
    idconsulta:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    idpaciente:{
        type: Sequelize.TEXT
    },
    iddoctor:{
        type: Sequelize.TEXT
    },
    fecha:{
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
    prescripcion_fc:{
        type: Sequelize.TEXT
    }


},{
    tableName: 'consulta_hojaclinica',
    timestamps: false
})



export default consulta_hojaclinica;