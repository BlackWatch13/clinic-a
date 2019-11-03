<?php  
     $url = "http://localhost:3000/api/consulta_hojaclinica";
     $data = array(
        'idconsulta' => '',
        'fecha' => '',
        'motivo_consulta' => '',
        'peso' => ''
        'evaluacion' => '',
        'examenes_slt' => '',
        'prescripcion_fc' => '',
        
    );
    $payload = json_encode($data);
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($cu rl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
        array("Content-type: application/json"));
    curl_setopt($curl, CURLOPT_POST, true); 
    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
    $json_response = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

?>