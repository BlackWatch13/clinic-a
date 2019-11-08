<?php
    session_start();
    //$_SESSION = array();
    if ($_SESSION["rol"]=="admin") {
      header('location:../front/cusuarios.php');
    }
    ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Citas</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="css/mdb.min.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="css/style.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <!-- link href="style.css" rel="stylesheet"-->
</head>

<body>

    <div class="wrapper">

        <div class="navbar">
        <!-- AQUI VA EL Sidebar  -->
       <?php
   include 'sidebar.php';
    ?>
      </div>
        <!-- Page Content  -->
        <div id="content" style="border-bottom-width: 18px;border-bottom-style: solid;">

            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid col-2">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>

                    </button>

                </div>
                <div class="container-fluid col-7">
                   <h2 class="tituloHeader"> Citas Proximas </h2>
                </div>
            </nav>
<div class="container-fluid" style="margin-top:80px">

<div class="d-flex p-3 col-example" style="width:80%; float:left;">
                <div class="card" style="width:325px;   ">
                <div class="card-header">Añadir nueva cita </div>
                <div class="card-body text-center"> <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm"><i class="fas fa-plus fa-6x"></i></a></div>
                <div class="card-footer"></div>
</div>

     <!-- INSERTAR CONTENIDOS -->
     <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Nueva Cita</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="far fa-calendar-alt prefix grey-text"></i>
          <input name="fecha" type="date" id="defaultForm-email" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-email"></label>
        </div>

        <div class="md-form mb-5">
          <i class="far fa-clock prefix grey-text"></i>
          <input name="hora" type="time" id="defaultForm-email" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-email"></label>
        </div>

        <div class="md-form mb-5">
          <i class="fas fa-user-injured prefix grey-text"></i>
          <input name="idpaciente" type="email" id="defaultForm-email" class="form-control validate" placeholder="paciente">
          <label data-error="wrong" data-success="right" for="defaultForm-email"></label>
        </div>

        <div class="md-form mb-5">
          <i class="fas fa-user-md prefix grey-text"></i>
          <input name="doctor" type="email" id="defaultForm-email" class="form-control validate" placeholder="doctor">
          <label data-error="wrong" data-success="right" for="defaultForm-email"></label>
        </div>

        <div class="md-form mb-5">
          <i class="fas fa-certificate prefix grey-text"></i>
          <input name="especialidad" type="email" id="defaultForm-email" class="form-control validate" placeholder="Especialidad">
          <label data-error="wrong" data-success="right" for="defaultForm-email"></label>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-default">Guardar</button>
      </div>
    </div>
  </div>
</div>



</div>
        </div>
    </div>
    <!-- AQUI VA EL FOOTER -->
    <?php
    include 'footer.php';
    ?>
    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <!-- jQuery Custom Scroller CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
    </script>
</body>

</html>
