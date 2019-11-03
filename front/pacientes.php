<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Material Design Bootstrap</title>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link href="css/style.min.css" rel="stylesheet">
  <style>

    .map-container{
overflow:hidden;
padding-bottom:56.25%;
position:relative;
height:0;
}
.map-container iframe{
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
}
  </style>
</head>

<body class="">

<header>
    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container-fluid text-center">

        <!-- Brand -->
        <a class="navbar-brand waves-effect"  style="margin-left: 50%;" target="_blank">
          <H1 class="pink-text">Pacientes</H1>
        </a>

          <!-- Collapse -->

        </div>

      </div>
    </nav>
    <!-- Navbar -->

    <!-- Sidebar -->
    <?php
   include 'sidebar.php';
    ?>
    <!-- Sidebar -->

  </header>

  <div class="container-fluid text-center wrapper-editor blue lighten-4" style="padding: 95px 0px 0px 280px ">
<!--Table-->
<table id="tablePreview" class="table table-striped">
<!--Table head-->
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Telefono</th>
      <th>Edad</th>
      <th>Direccion</th>
      <th>Padecimiento</th>
      <th>Alergias</th>

    </tr>
  </thead>
  <!--Table head-->
  <!--Table body-->
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Twain</td>
      <td>22222222</td>
      <td>33</td>
      <td>San Salvador, El salvador</td>
      <td>Colon nervioso</td>
      <td>Ninguna</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mauricio</td>
      <td>Padilla</td>
      <td>77777777</td>
      <td>45</td>
      <td>Quezaltepeque, La libertad</td>
      <td>Problemas respiratorios</td>
      <td>Mani, maiz, chocolate</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Enrique</td>
      <td>Carabantes</td>
      <td>76472345</td>
      <td>46</td>
      <td>Quezaltepec, La libertad</td>
      <td>Acaros en la piel</td>
      <td>A ciertos medicamentos contra las alergias</td>

    </tr>
  </tbody>
  <!--Table body-->
</table>
<!--Table-->

    </div>



<!--Footer-->
<?php
    include 'footer.php';
    ?>
  <!-- SCRIPTS -->
  <!-- JQuery -->
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <!-- Bootstrap tooltips -->
  <script type="text/javascript" src="js/popper.min.js"></script>
  <!-- Bootstrap core JavaScript -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <!-- MDB core JavaScript -->
  <script type="text/javascript" src="js/mdb.min.js"></script>
  <!-- Initializations -->
  <script type="text/javascript">
    $('#dtBasicExample-1').mdbEditor({
rowEditor: true
});
$('.dataTables_length').addClass('bs-select');

  </script>

</body>

</html>
