import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const doctor = sequelize.define('doctor',{
  iddoctor:{
      type: Sequelize.TEXT,
      primaryKey: true
  },
  nombre:{
      type: Sequelize.TEXT
  },
  apellidos:{
      type: Sequelize.TEXT
  },
  Especialidad:{
      type: Sequelize.TEXT
  }

},{
    tableName: 'doctor',
    timestamps: false
})


export default doctor;
