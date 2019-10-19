import {Router} from 'express';
const router = Router();

import {creardoctor, getdoctor,getdoctorwhere,deletedoctor,updatedoctor} from '../controlles/doctor.cont'
//insert
router.post('/', creardoctor);
//select * from
router.get('/',getdoctor);
//select from table where id(table) 
router.get('/:iddoctor',getdoctorwhere);
// delete from table where id(table)
router.delete('/:iddoctor',deletedoctor);
//update from table where id(table)
router.put('/:iddoctor',updatedoctor)
export default router;
