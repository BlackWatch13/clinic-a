import {Router} from 'express';
const router = Router();

import {getexpe,getexpewhere,crearexpe,updateexpe,deleteexpe} from '../controlles/expedientecont'
router.post('/', crearexpe);
router.get('/',getexpe);
router.get('/:idexpe',getexpewhere);
router.delete('/:idexpe',deleteexpe);
router.put('/:idexpe',updateexpe);

export default router;
