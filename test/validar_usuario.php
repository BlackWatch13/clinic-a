<?php

    session_start();
    $_SESSION = array();
    session_destroy();

    session_start();

//AQUI CONECTAMOS A LA BASE DE DATOS DE POSTGRES
$conex = "host=localhost port=5432 dbname=clinica user=blackwatch password=1234";
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
 $result = pg_query('SELECT iduser,pass, estado FROM public.user where iduser = \''.$usuario.'\'');
 if($row = pg_fetch_array($result)){
  if($row["pass"] == $password){
   $_SESSION["k_username"] = $row['iduser'];
   if($row["estado"]== 1){
       //mandalo a la pantallas de admon
            header('location:../front/Cdoctores.php');

            $_SESSION['log_in'] = true;
            $_SESSION['rol'] = "admin";

   }
    else if($row["estado"]== 2){
        //mandalo a las pantallas de usuario
            header('location:../front/index.php');

            $_SESSION['log_in'] = true;
            $_SESSION['rol'] = "recepcionista";

    }
  }else if($row["estado"]== 3){
    /mandalo a las pantallas de usuario
        header('location:../front/index.php');

        $_SESSION['log_in'] = true;
        $_SESSION['rol'] = "doctor";
  }
 }else{
  echo '<script>alert:"usuario o contraseña invalidos"</script>';
    header('location:./index.php');

 }
 pg_free_result($result);
}else{
 echo 'Debe especificar un usuario y password';
}
pg_close();
?>
