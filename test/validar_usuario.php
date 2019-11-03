<?php

    session_start();
    $_SESSION = array();
    session_destroy();

    session_start();

//AQUI CONECTAMOS A LA BASE DE DATOS DE POSTGRES
$conex = "host=localhost port=5432 dbname=clinica user=postgres password=1234";
$cnx = pg_connect($conex) or die ("<h1>Error de conexion.</h1> ". pg_last_error());


function quitar($mensaje)
{
 $nopermitidos = array("'",'\\','<','>',"\"");
 $mensaje = str_replace($nopermitidos, "", $mensaje);
 return $mensaje;
}
if(trim($_POST["usuario"]) != "" && trim($_POST["password"]) != "")
{

 $usuario = strtolower(htmlentities($_POST["usuario"], ENT_QUOTES));
 $password = $_POST["password"];
 $result = pg_query('SELECT iduser,pass, estado FROM public.usuarios where iduser = \''.$usuario.'\'');
 if($row = pg_fetch_array($result)){
  if($row["pass"] == $password){
   $_SESSION["k_username"] = $row['iduser'];
   if($row["estado"]== 1){
       //mandalo a la pantallas de admon
            header('location:../front/Cdoctores.php');

            $_SESSION['log_in'] = true;
            $_SESSION['rol'] = "admin";

   }
    else{
        //mandalo a las pantallas de usuario
            header('location:../front/index.php');

            $_SESSION['log_in'] = true;
            $_SESSION['rol'] = "regular";

    }
  }else{
   echo 'Password incorrecto';
  }
 }else{
  echo 'Usuario no existente en la base de datos';

 }
 pg_free_result($result);
}else{
 echo 'Debe especificar un usuario y password';
}
pg_close();
?>
