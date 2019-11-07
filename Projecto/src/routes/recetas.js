import {Router} from 'express';
const router = Router();

import{getreceta,getrecetawhere,deletereceta,updaterecetas,crearrecetas} from '../controlles/recetacont';

router.post('/', crearrecetas);
router.get('/',getreceta);
router.get('/:idrec',getrecetawhere);
router.delete('/:idrec',deletereceta);
router.put('/:idrec',updaterecetas);

export default router;