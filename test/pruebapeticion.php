
<?php
    if (isset($_POST["ruta"]))
    {
        $ruta = $_POST["ruta"];

        $url = "http://localhost:3000/api/".$ruta;
        $json = file_get_contents($url);
        $datos = json_decode($json, true);
        $data = $datos["data"];
        //var_dump($data);
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
