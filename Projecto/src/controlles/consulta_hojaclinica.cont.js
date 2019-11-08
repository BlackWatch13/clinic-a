import consulta_hojaclinica from "../model/consulta_hojaclinica";

/*Suerte cuando estes intentando comprender lo que hice,
cuando lo escribi estaba medio dormido y bueno todo tenia sentido para mi.
*/
export async function crearhoja(req, res){
    const {idconsulta,fecha,hora,motivo_consulta, peso, evaluacion,examenes_slt,idexpe, iduser}= req.body;
    try{
        let newhoja = await consulta_hojaclinica.create(
            {
                idconsulta,
                   fecha,
                   hora,
                    motivo_consulta,
                     peso,
                     evaluacion,
                      examenes_slt,
                      idexpe,
                      iduser
                      
            },
            {
                fields: ['idconsulta', 'fecha', 'hora','motivo_consulta', 'peso','evaluacion', 'examenes_slt','idexpe','iduser']
            });
            if(newhoja)
            {
                return res.json({mesage: "Insert successful into hoja_clinica", data : newhoja});
            }
      
    }
    catch (error){
        console.log(error);
        res.status(500).json({message:'insert failed' ,data:{} })
    }
};

export async function gethoja(req, res){

    const hoja = await consulta_hojaclinica.findAll({atributes:['idconsulta', 'fecha', 'hora','motivo_consulta', 'peso','evaluacion', 'examenes_slt','idexpe','iduser']})
    res.json({
        data: hoja
    });
};

export async function gethojawhere(req, res){
    const {idconsulta} = req.params;
    const hoja = await consulta_hojaclinica.findOne({were:{idconsulta},atributes:['idconsulta', 'idpaciente', 'iddoctor','fecha', 'motivo_consulta', 'peso','evaluacion', 'examenes_slt','prescripcion_fc']})
    res.json({
        data:hoja
    })
};


export async function deletehoja(req, res){
    const {idconsulta} = req.params;
    const deletehoja = await consulta_hojaclinica.destroy({where:{idconsulta}})
    res.json({
        message: 'Exito al eliminar',
        count: deletehoja
    }) 
};

export async function update(req, res){
    const {idconsulta} = req.params;
    const {fecha,hora,motivo_consulta, peso, evaluacion,examenes_slt,idexpe, iduser} = req.body;
    const hoja = await consulta_hojaclinica.findAll({attributes:['fecha', 'hora','motivo_consulta', 'peso','evaluacion', 'examenes_slt','idexpe','iduser'],
        where:{
             idconsulta
        }
    });
    if(hoja.length > 0){
        hoja.forEach(async hoja =>{
            await hoja.update({
                  fecha,
                  hora,
                   motivo_consulta, 
                    peso,evaluacion, 
                     examenes_slt, 
                      idexpe,
                      iduser
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: hoja
   })
}