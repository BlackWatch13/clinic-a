<?php
//Aqui pongan los get,s  si el input se llama id , 
//la variable quedaria $id=$GET["id"]


$id = $_POST["username"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$estado = $_POST["estado"];
$especialidad = $_POST["especialidad"];
$pass = $_POST["pass"];

$data = array(    
    'iduser' => $id,
     'nombre' => $nombre,
      'apellido' => $apellido,
       'estado' => $estado,    
        'especialidad' => $especialidad,
         'pass' => $pass);
$payload = json_encode($data);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_PORT => "3000",
    CURLOPT_URL => "http://localhost:3000/api/user/".$id,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_POSTFIELDS => $payload ,
    CURLOPT_HTTPHEADER => array(
      "content-type: application/json"
    ),
  ));
  
  $response = curl_exec($curl);
  $err = curl_error($curl);
  
  curl_close($curl);
  
  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }
  ?>