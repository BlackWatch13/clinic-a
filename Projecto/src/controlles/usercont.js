import user from '../model/user';


export async function getuser(req, res){
    const users = await user.findAll({attributes:['iduser','nombre','apellido','estado','especialidad','pass']});
    res.json({
        data: users
    });
};

export async function getuserwhere(req , res) {
    const {iduser} = req.params;
    const user1 = await user.findAll({where : {iduser: iduser}
    });
  res.json({data: user1})
  };




export async function deleteuser(req, res){
    const {iduser}= req.params;
   const deleteRowCount= await user.destroy({
        where:{
            iduser
        }
    });
    res.json({
        message: 'Exito al eliminar',
        count: deleteRowCount
    })
};

export async function updateuser(req, res){
    const {iduser} = req.params;
    const {nombre, apellido, estado,especialidad, pass} = req.body;
    const user3 = await user.findAll({attributes:['iduser','nombre','apellido','estado','especialidad','pass'],
        where:{
             iduser
        }
    });
    if(user3.length > 0){
        user3.forEach(async user3 =>{
            await user3.update({
                nombre,
                apellido,
                estado,
                especialidad,
                pass
            });
        })
    }
   return res.json({
       message: 'exito al actualizar',
       data: user3
   })

};

export async function crearuser(req, res) {
    const { iduser,nombre,apellido,estado,especialidad,pass} = req.body;
    try {
        let newuser = await user.create({
            iduser,
            nombre,
            apellido,
            estado,
            especialidad,
            pass
        },{
            fields: ['iduser','nombre','apellido','estado','especialidad','pass']
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


// Saber cuantos son X rol where Estado = X

export async function getuserestado(req , res) {
    const {estado} = req.params;
    const user1 = await user.findAll({where : {estado: estado}
    });
  res.json({data: user1})
  };

  export async function getuserespe(req , res) {
    const {especialidad} = req.params;
    const user1 = await user.findAll({where : {especialidad: especialidad}
    });
  res.json({data: user1})
  };
  




