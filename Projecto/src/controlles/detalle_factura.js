import detalle_factura from '../model/detalle_factura';

export async function getfactura(req, res){
     const factu = await detalle_factura.findAll({
       atributes:['iddetalle','fecha','cobro','detalle']
     })
     res.json({
       message: 'Datos',
       data: factu
     })
};

export async function getfactuwhere(req, res){
   const{iddetalle} = req.params;
   const factu = await detalle_factura.findOne({ where:{iddetalle},atributes:['iddetalle','fecha','cobro','detalle']  })
   res.json({
     message: 'Dato seleccionado',
     data:factu
   })
};

export async function deletedetalle(req, res){
 const{iddetalle}= req.params;
 const delet = await deletedetalle.destroy({where:{iddetalle}})
 res.json({
   message:'datos eliminados',
   count:delet
 })
};

export async function crearfactura(req, res){
  const{ iddetalle, fecha, cobro, detalle }=req.body;
  try{
      let newdefac = await detalle_factura.create({
          iddetalle,
          fecha,
          cobro,
          detalle
      },{
          fields:['iddetalle','fecha','cobro','detalle']
      });
      if(newdefac){
          return res.json({ message: 'Insert Successfull',
          data: newdefac});
      }
  } catch(error){
    console.log(error);
    res.status(500).json({message:'Error' ,data:{} })
  }
};

export async function updatedoctor(req, res){
  const {iddetalle} = req.params;
  const {fecha,cobro,detalle} = req.body;
  const upda = await detalle_factura.findAll({atributes:['iddetalle','fecha','cobro','detalle'],
      where:{
           iddetalle
      }
  });
  if(upda.length > 0){
      upda.forEach(async upda =>{
          await upda.update({
              fecha,
              cobro,
              detalle
          });
      })
  }
 return res.json({
     message: 'exito al actualizar',
     data: upda
 })

};



