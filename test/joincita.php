<?php

$idpaciente= 'pact452';
$conexion = pg_connect("host=localhost dbname=clinica user=blackwatch password=1234");
$citas = pg_query($conexion, "select public.pacientes.nombre,public.pacientes.apellido, public.proxcita.fecha,
                              public.proxcita.hora, public.user.nombre, public.user.apellido,public.user.especialidad
                              from public.pacientes inner join public.proxcita
                              on public.pacientes.idpaciente = public.proxcita.idpaciente
                              inner join public.user
                              on public.proxcita.iduser = public.user.iduser where public.pacientes.idpaciente='$idpaciente'");
if (!$citas) {
    echo "Ocurrió un error.\n";
    exit;
  }

  while ($row = pg_fetch_row($citas)) {
    echo "Paciente: $row[0] $row[1] Fecha:$row[2] Hora:$row[3] Dr: $row[4] $row[5] Especialidad: $row[6]" ;
    echo "<br />\n";
  }


?>
