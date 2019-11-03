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
  <link href="css/style.css" rel="stylesheet">
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
          <H1 class="pink-text">Doctores</H1>
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
 
<div class="container-fluid text-center contenedor">




<!-- Section: Testimonials v.1 -->


 
  <!-- Grid row -->
  <div class="row">

    <!--Grid column-->
    <div class="col-lg-3 col-md-5 mb-lg-0 mb-4">
      <!--Card-->
      <div class="card ">
        <!--Background color-->
        <div class="card-up info-color"></div>
        <!--Avatar-->
        <div class="avatar mx-auto white">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid">
        </div>
        <div class="card-body">
          <!--Name-->
          <h4 class="font-weight-bold mb-4">Dr. Manuel Perez</h4>
          <hr>
          <!--Quotation-->
          <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet eos
            adipisci, consectetur adipisicing elit.</p>
        </div>
      </div>
      <!--Card-->
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-3 col-md-5 mb-md-0 mb-4">
      <!--Card-->
      <div class="card">
        <!--Background color-->
        <div class="card-up blue-gradient">
        </div>
        <!--Avatar-->
        <div class="avatar mx-auto white">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid">
        </div>
        <div class="card-body">
          <!--Name-->
          <h4 class="font-weight-bold mb-4">Dra. Anna Aston</h4>
          <hr>
          <!--Quotation-->
          <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>assumenda in
            maiores repudiandae mollitia architecto.</p>
        </div>
      </div>
      <!--Card-->
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-3 col-md-5 mb-md-0 mb-4">
      <!--Card-->
      <div class="card">
        <!--Background color-->
        <div class="card-up indigo"></div>
        <!--Avatar-->
        <div class="avatar mx-auto white">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid">
        </div>
        <div class="card-body">
          <!--Name-->
          <h4 class="font-weight-bold mb-4">Dra. Maria Kate</h4>
          <hr>
          <!--Quotation-->
          <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Delectus impedit saepe officiis
            ab aliquam repellat rem unde ducimus.</p>
        </div>
      </div>
      <!--Card-->
    </div>
    <!--Grid column-->

  </div>
  <!-- Grid row -->





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

</body>

</html>
