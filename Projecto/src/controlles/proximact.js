import proximact from '../model/proximact';

export async function getproximact(req, res){
    const proxi = await proximact.findAll({attributes:['idproximact','fecha','hora','idpaciente','doctor','especialidad']});
    res.json({
        data: proxi
    });
};

export async function getproxwhere(req, res){
    const {idproximact}= req.params;
    const prox = await proximact.findAll({where:{idproximact:idproximact}})
    res.json(
        {
            message: 'Valores solicitados',
            dat: prox
        }
    )
};

export async function deleteprox(req, res){
    const {idproximact}= req.params;
    const delprox = await proximact.destroy({where:{idproximact}})
    res.json({
        message:'delete successful',
        count: delprox
    })
    
};

export async function crearprox(req, res){
    const {idproximact, fecha, hora, idpaciente,doctor,especialidad} = req.body;
    try{
        let prox = await proximact.create({idproximact, fecha, hora, idpaciente,doctor,especialidad},
        {
          fields:['idproximact','fecha','hora','idpaciente','doctor','especialidad']
        });
        if (prox) {
            return res.json({
                 message: 'Insert Successfull',
                 data: prox
             });
         } 
    }
    catch (error) {
        console.log(error);
      res.status(500).json({message:'Error' ,data:{} })
    }
};

export async function updateprox(req, res){
    const {idproximact} = req.params;
    const {fecha, hora, idpaciente,doctor,especialidad} = req.body;
    const prox3 = await proximact.findAll({attributes:['fecha','hora','idpaciente','doctor','especialidad'],
        where:{
             idproximact
        }
    });
    if(prox3.length > 0){
        prox3.forEach(async prox3 =>{
            await prox3.update({
                fecha,
                hora,
                idpaciente,
                doctor,
                especialidad
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: prox3
   })

};