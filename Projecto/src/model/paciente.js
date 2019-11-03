import Sequelize from 'sequelize';
import {sequelize} from '../db/db';
import consulta_hojaclinica from './consulta_hojaclinica';

const paciente = sequelize.define('paciente',{
    idpaciente:{
      type: Sequelize.TEXT,
      primaryKey: true
    },
    nombre:{
        type: Sequelize.TEXT
    },
    apellidos:{
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
    enferpade:{
        type: Sequelize.TEXT
    },
    alergias:{
        type: Sequelize.TEXT
    },
    sexo:{
        type: Sequelize.TEXT
    }


},{
    tableName: 'paciente',
    timestamps: false
}
)
//agregar relacion antes de exportar
//paciente.hasMany(consulta_hojaclinica,{foreingKey: 'idpaciente', sourceKey: 'idconsulta' });
//consulta_hojaclinica.belongTo(paciente,{foreingKey: 'idpaciente', sourceKey:'idconsulta'});

export default paciente;