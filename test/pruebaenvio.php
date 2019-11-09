
<?php
    if (isset($_POST["username"],$_POST["nombre"],$_POST["apellido"],$_POST["estado"],$_POST["especialidad"],$_POST["password"]))
    {
        $ruta = $_POST["username"];
        $ruta2 = $_POST["nombre"];
        $ruta4 = $_POST["estado"];

        $url = "http://localhost:3000/api/".$ruta;

            print_r($ruta);
            print_r($ruta4);


    }




?>
