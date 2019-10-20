<?php  
     $url = "http://localhost:3000/api/paciente";
     $data = array(
        'idpaciente' => '',
        'nombre' => '',
        'apellidos' => '',
        'telefono' => '',
        'edad' => '',
        'dirrecion' => '',
        'enferpade' => '',
        'alergias' => '',
        'sexo' => ''
    );
    $payload = json_encode($data);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array("Content-type: application/json"));
    curl_setopt($curl, CURLOPT_POST, true); 
    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
    $json_response = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

?>
