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

  <!--Main Navigation-->
  <header>

    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container-fluid text-center">

        <!-- Brand -->
        <a class="navbar-brand waves-effect"  style="margin-left: 50%;" target="_blank">
          <H1 class="pink-text">Citas Próximas</H1>
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
  <!--Main Navigation-->

  <!--Main layout-->
  <div class="container-fluid " style="padding: 91px 0px 0px 280px; margin-left:9%;">
    <div class="d-flex p-3 col-example " style="width:80%; float:left;">
      <div class="card" style="width:400px; ">
        <div class="card-header">Fecha: 32-08-19 11:30</div>
        <div class="card-body">Dennis Anaya <br>DUI:03051366-6</div>
        <div class="card-footer">Dr. Miguel Orellana - Quiropráctico</div>
      </div>
      
      <div class="card" style="width:400px">
        <div class="card-header">Fecha: 3-09-19 02:58</div>
        <div class="card-body">Alexander Santamaria<br>DUI: 12345678-9</div>
        <div class="card-footer">Dra. Carolina Angulo - Psicologa</div>
      </div>
      
      <div class="card" style="width:400px">
        <div class="card-header">Fecha: 4-09-19 11:30</div>
        <div class="card-body">Oscar Romero <br>DUI:11223344-0</div>
        <div class="card-footer">Dr. Ricardo Archilla - Gastroenterólogo </div>
      </div>
    </div>

    <div class="d-flex p-3 col-example" style="width:80%; float:left;">
      <div class="card" style="width:400px; ">
        <div class="card-header">Fecha: </div>
        <div class="card-body">Paciente: <br>DUI:</div>
        <div class="card-footer">Dr(a). - Especialidad</div>
      </div>
      
      <div class="card" style="width:400px; ">
        <div class="card-header">Fecha: </div>
        <div class="card-body">Paciente: <br>DUI:</div>
        <div class="card-footer">Dr(a). - Especialidad</div>
      </div>
      
      <div class="card" style="width:400px; ">
        <div class="card-header">Fecha: </div>
        <div class="card-body">Paciente: <br>DUI:</div>
        <div class="card-footer">Dr(a). - Especialidad</div>
      </div>
    </div>
    
      
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
    // Animations initialization
    new WOW().init();

  </script>

  <!-- Charts -->
 
</body>

</html>
