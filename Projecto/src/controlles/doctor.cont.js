import doctor from '../model/doctor';

//Select * from
export async function getdoctor(req, res){
    const doctors = await doctor.findAll({attributes:['iddoctor','nombre','apellidos','Especialidad']});
    res.json({
        data: doctors
    });
};
//Insert into 
export async function creardoctor(req, res) {
    const { iddoctor, nombre, apellidos , Especialidad} = req.body;
    try {
        let newdoctor = await doctor.create({
            iddoctor,
            nombre,
            apellidos,
            Especialidad
        },{
            fields: ['iddoctor','nombre','apellidos','Especialidad']
        });
        if (newdoctor) {
           return res.json({
                message: 'Insert Successfull',
                data: newdoctor
            });
        }
    } catch (error) {
        console.log(error);
      res.status(500).json({message:'Error' ,data:{} })
    }
};

//Select where id(table) from 
export async function getdoctorwhere(req , res) {
  const {iddoctor} = req.params;
  const doctor1 = await doctor.findOne({
      where : {iddoctor}, 
      attributes:['iddoctor','nombre','apellidos','Especialidad']
  });
res.json({data: doctor1})
};

//Delete where id(table) from
export async function deletedoctor(req, res){
   const {iddoctor}= req.params;
   const deleteRowCount= await doctor.destroy({
        where:{
            iddoctor
        }
    });
    res.json({
        message: 'Exito al eliminar',
        count: deleteRowCount
    })
};
//update where id
export async function updatedoctor(req, res){
    const {iddoctor} = req.params;
    const {nombre, apellidos, Especialidad} = req.body;
    const doctor3 = await doctor.findAll({attributes:['iddoctor','nombre','apellidos','Especialidad'],
        where:{
             iddoctor
        }
    });
    if(doctor3.length > 0){
        doctor3.forEach(async doctor3 =>{
            await doctor3.update({
                nombre,
                apellidos,
                Especialidad
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: doctor3
   })

};

