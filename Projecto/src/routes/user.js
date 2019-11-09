import {Router} from 'express';
const router = Router();

import{getuser,getuserwhere,deleteuser,updateuser,crearuser,getuserespe,getuserestado} from '../controlles/usercont';

router.post('/', crearuser);
router.get('/',getuser);
router.get('/:iduser',getuserwhere);
router.get('/:especialidad',getuserespe);
router.get('/:estado',getuserestado);
router.delete('/:iduser',deleteuser);
router.put('/:iduser',updateuser);

export default router;