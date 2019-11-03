import {Router} from 'express';
const router = Router();

import {crearfactura,getfactura,deletedetalle,getfactuwhere,updatedoctor} from '../controlles/detalle_factura'

router.post('/', crearfactura);
router.get('/', getfactura);
router.get('/:iddetalle',getfactuwhere);
router.delete('/:iddetalle',deletedetalle);
router.put('/:iddetalle',updatedoctor);

export default router;
