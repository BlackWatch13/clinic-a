import Sequelize from 'sequelize';
import {sequelize} from '../db/db';

const detalle_factura = sequelize.define('detalle_factura',{
    iddetalle:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    fecha:{
        type: Sequelize.TEXT
    },
    cobro:{
        type: Sequelize.DECIMAL
    },
    detalle:{
        type: Sequelize.TEXT
    }
},{
    tableName: 'detalle_factura',
    timestamps: false
})


export default detalle_factura;