import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const proximact = sequelize.define('proximact',{
   idproximact:{
       type: Sequelize.TEXT,
       primaryKey: true
   },
   idconsulta:{
       type: Sequelize.TEXT
   },
   fecha:{
       type: Sequelize.TEXT
   }

},{tableName: 'proximact',
timestamps: false})

export default proximact;
