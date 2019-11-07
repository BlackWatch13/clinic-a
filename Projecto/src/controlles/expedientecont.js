import expediente from'../model/expediente'

export async function getexpe(req, res){
    const expe = await expediente.findAll({attributes:['idexpe','idpaciente','alergias','enferpade']});
    res.json({
        data: expe
    });
};

export async function getexpewhere(req , res) {
    const {idexpe} = req.params;
    const expe1 = await expediente.findAll({where : {idexpe: idexpe}
    });
  res.json({data: expe1})
  };

  export async function deleteexpe(req, res){
    const {idexpe}= req.params;
   const deleteRowCount= await expediente.destroy({
        where:{
            idexpe
        }
    });
    res.json({
        message: 'Exito al eliminar',
        count: deleteRowCount
    })
};


export async function updateexpe(req, res){
    const {idexpe} = req.params;
    const {idpaciente, alergias, enferpade} = req.body;
    const expe3 = await expediente.findAll({attributes:['idexpe','idpaciente','alergias','enferpade'],
        where:{
             idexpe
        }
    });
    if(expe3.length > 0){
        expe3.forEach(async expe3 =>{
            await expe3.update({
                idpaciente,
                alergias,
                enferpade
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: expe3
   })

};

export async function crearexpe(req, res) {
    const {idexpe,idpaciente, alergias, enferpade} = req.body;
    try {
        let newexpe = await expediente.create({
            idexpe,
            idpaciente,
            alergias,
            enferpade
        },{
            fields: ['idexpe','idpaciente','alergias','enferpade']
        });
        if (newexpe) {
           return res.json({
                message: 'Insert Successfull',
                data: newexpe
            });
        }
    } catch (error) {
        console.log(error);
      res.status(500).json({message:'Error' ,data:{} })
    }
};