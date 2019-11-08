import {Router} from 'express';
const router = Router();

import{getreceta,getrecetawhere,deletereceta,updaterecetas,crearrecetas, getrecetawheredr,getrecetawheremed} from '../controlles/recetacont';

router.post('/', crearrecetas);
router.get('/',getreceta);
router.get('/:idrec',getrecetawhere);
router.get('/:nombdr',getrecetawheredr);
router.get('/:medicamento',getrecetawheremed);
router.delete('/:idrec',deletereceta);
router.put('/:idrec',updaterecetas);

export default router;