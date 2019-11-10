<?php
//Aqui pongan los get's  si el input se llama id , 
//la variable quedaria $idpaciente=$GET["id"]
$idpaciente = $_POST["idpaciente"]; 
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$telefono = $_POST["telefono"];
$edad = $_POST["edad"];
$direccion = $_POST["direccion"];
$sexo = $_POST["sexo"];

$data = array(    
    'idpaciente' => $idpaciente,
     'nombre' => $nombre,
      'apellido' => $apellido,
       'telefono' => $telefono,    
        'edad' => $edad,
         'direccion' => $direccion,
           'sexo' => $sexo);
$payload = json_encode($data);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_PORT => "3000",
    CURLOPT_URL => "http://localhost:3000/api/pacientes/".$idpaciente,
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