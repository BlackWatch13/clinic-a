import {Router} from 'express';
const router = Router();

import {getproximact, getproxwhere, deleteprox,crearprox,updateprox,getproxwheredr} from '../controlles/proximact';

router.get('/',getproximact);
router.get('/:idproximact',getproxwhere);
router.get('/:doctor',getproxwheredr);
router.delete('/:idproximact',deleteprox);
router.post('/',crearprox);
router.put('/:idproximact',updateprox);

export default router;