import paciente from '../model/paciente';

export async function getpaciente(req, res){
    const getpaciente = await paciente.findAll({attributes:['idpaciente','nombre','apellidos','telefono','edad','direccion','enferpade','alergias','sexo']});
    res.json({
        data: getpaciente
    });
};

export async function crearpaciente(req, res){
    const {idpaciente, nombre, apellidos, telefono, edad, direccion, enferpade, alergias,sexo}= req.body;
    try {
        let newpaciente = await paciente.create(
            {idpaciente,
                 nombre,
                  apellidos,
                   telefono,
                    edad,
                     direccion,
                      enferpade,
                       alergias,
                        sexo},
            {
                fields:['idpaciente', 'nombre', 'apellidos', 'telefono', 'edad', 'direccion', 'enferpade', 'alergias','sexo']
            });
            if (newpaciente){
                return res.json({mesage: "Insert successful", data : newpaciente});
        
            }
           

    }
    catch (error){
           console.log(error);
           res.status(500).json({message:'insert failed' ,data:{} })
    }
};

export async function getpacientewhere(req, res){
    const {idpaciente} = req.params;
  const paciente1 = await paciente.findOne({
      where : {idpaciente}, 
      attributes:['idpaciente','nombre','apellidos','telefono','edad','direccion','enferpade','alergias','sexo']
  });
res.json({data: paciente1})
};

export async function deletepacientewhere(req, res){
    const {idpaciente}= req.params;
   const deleteRowCount= await paciente.destroy({
        where:{
            idpaciente
        }
    });
    res.json({
        message: 'Exito al eliminar',
        count: deleteRowCount
    })
};

export async function updatepacientewhere(req, res){
    const {idpaciente} = req.params;
    const {nombre, apellidos, telefono, edad, direccion, enferpade, alergias,sexo} = req.body;
    const paciente3 = await paciente.findAll({attributes:['idpaciente','nombre','apellidos','telefono','edad','direccion','enferpade','alergias','sexo'],
        where:{
             idpaciente
        }
    });
    if(paciente3.length > 0){
        paciente3.forEach(async paciente3 =>{
            await paciente3.update({
                nombre,
                apellidos,
                telefono,
                edad,
                direccion,
                enferpade,
                alergias,
                sexo
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: paciente3
   })
}



