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

<<<<<<< HEAD
$ruta = $_GET["ruta"];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_PORT => "3000",
  CURLOPT_URL => "http://localhost:3000/api/pacientes",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_HTTPHEADER => array(
    "content-type: application/json"
  ),
));
=======
        $url = "http://localhost:3000/api/".$ruta;
        $json = file_get_contents($url);
        $datos = json_decode($json, true);
        $data = $datos["data"];
        //var_dump($nombre);
        foreach($data as $datos)
        {
          var_dump($datos);
        }
    }
>>>>>>> 940d96416abf92b0398d0b4768e351bec190cb4f

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

<<<<<<< HEAD
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
  echo $ruta;
} ?>
=======

?>
>>>>>>> 940d96416abf92b0398d0b4768e351bec190cb4f
