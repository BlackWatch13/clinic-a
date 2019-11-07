import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const proximact = sequelize.define('proximact',{
   idproximact:{
       type: Sequelize.TEXT,
       primaryKey: true
   },
   fecha:{
       type: Sequelize.TEXT
   },
   hora:{
       type: Sequelize.TEXT
   },
   idpaciente:{
       type: Sequelize.TEXT
   },
   doctor:{
       type: Sequelize.TEXT
   },
   especialidad:{
       type: Sequelize.TEXT
   }


},{tableName: 'proxcita',
timestamps: false})

export default proximact;
