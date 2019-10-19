import {Router} from 'express';
const router = Router();

import {crearpaciente,getpaciente,getpacientewhere,deletepacientewhere,updatepacientewhere} from '../controlles/paciente.cont'
router.post('/', crearpaciente);
router.get('/',getpaciente);
router.get('/:idpaciente',getpacientewhere);
router.delete('/:idpaciente',deletepacientewhere);
router.put('/:idpaciente',updatepacientewhere);

export default router;
