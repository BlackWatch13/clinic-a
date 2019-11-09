
<?php
    if (isset($_POST["username"]))
    {
        $ruta = $_POST["username"];

        $url = "http://localhost:3000/api/".$ruta;

            print_r($ruta);


    }




?>
