<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <label for="ruta"></label>
       <form class="" action="" method="get">
    <input type="text" name="ruta" value="">
    <button type="submit" name="button">Enviar</button>
       </form>
</body>
</html>


<?php
    if (isset($_GET["ruta"]))
    {
        $ruta = $_GET["ruta"];

        $url = "http://localhost:3000/api/".$ruta;
        $json = file_get_contents($url);
        $datos = json_decode($json, true);
        $data = $datos["data"];
        //var_dump($nombre);
        foreach($data as $datos)
        {
          //var_dump($datos);
          foreach($datos as $info)
          {
            echo($info);
            echo("<br>");
          }
        }
    }




?>
