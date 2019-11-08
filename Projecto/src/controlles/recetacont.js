import recetas from '../model/receta';

export async function getreceta(req, res){
    const rct = await recetas.findAll({attributes:['idrec','medicamento','nombpac','edad','sexo','dosis','formed','viadmi','cantpre','idconsulta']});
    res.json({
        data: rct
    });
};

export async function getrecetawhere(req , res) {
    const {idrec} = req.params;
    const rct1 = await recetas.findAll({where : {idrec: idrec}
    });
  res.json({data: rct1})
  };

  export async function deletereceta(req, res){
    const {idrec}= req.params;
   const deleteRowCount= await recetas.destroy({
        where:{
            idrec
        }
    });
    res.json({
        message: 'Exito al eliminar',
        count: deleteRowCount
    })
};

export async function updaterecetas(req, res){
    const {idrec} = req.params;
    const {medicamento, nombpac,edad,sexo,dosis,formed,viadmi,cantpre,idconsulta} = req.body;
    const rect3 = await recetas.findAll({attributes:['idrec','medicamento','nombpac','edad','sexo','dosis','formed','viadmi','cantpre','idconsulta'],
        where:{
             idrec
        }
    });
    if(rect3.length > 0){
        rect3.forEach(async rect3 =>{
            await rect3.update({
                medicamento,
                nombpac,
                edad,
                sexo,
                dosis,
                formed,
                viadmi,
                cantpre,
                idconsulta
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: rect3
   })
};



export async function crearrecetas(req, res) {
    const { idrec,medicamento, nombpac,edad,sexo,dosis,formed,viadmi,cantpre,idconsulta} = req.body;
    try {
        let newrect = await recetas.create({
            idrec,
            medicamento,
            nombpac,
            edad,
            sexo,
            dosis,
            formed,
            viadmi,
            cantpre,
            idconsulta


        },{
            fields: ['idrec','medicamento','nombpac','edad','sexo','dosis','formed','viadmi','cantpre','idconsulta']
        });
        if (newuser) {
           return res.json({
                message: 'Insert Successfull',
                data: newuser
            });
        }
    } catch (error) {
        console.log(error);
      res.status(500).json({message:'Error' ,data:{} })
    }
};
