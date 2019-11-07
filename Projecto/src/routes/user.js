import {Router} from 'express';
const router = Router();

import{getuser,getuserwhere,deleteuser,updateuser,crearuser} from '../controlles/usercont';

router.post('/', crearuser);
router.get('/',getuser);
router.get('/:iduser',getuserwhere);
router.delete('/:iduser',deleteuser);
router.put('/:iduser',updateuser);

export default router;