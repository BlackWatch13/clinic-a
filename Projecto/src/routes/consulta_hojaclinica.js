import{Router} from "express";
const router = Router();

import {crearhoja, gethoja, gethojawhere,deletehoja,update} from '../controlles/consulta_hojaclinica.cont';
router.post('/', crearhoja);
router.get('/',gethoja);
router.get('/:idconsulta',gethojawhere);
router.delete('/:idconsulta',deletehoja);
router.put('/:idconsulta',update);

export default router;