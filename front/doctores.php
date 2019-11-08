<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Doctores</title>
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
                   <h2 class="tituloHeader"> Doctores </h2>
                </div>
            </nav>
<div class="container-fluid" style="margin-top:80px;text-align:center">

     <!-- INSERTAR CONTENIDOS -->
<!-- Grid row -->
<div class="row" syle="display: inline-block">

<!--Grid column-->
<div class="col-lg-8 col-md-5 mb-lg-0 mb-4">
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
      <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>assumenda in
        maiores repudiandae mollitia architecto.</p>
    </div>
  </div>
  <!--Card-->
</div>
<!--Grid column-->

<!--Grid column-->
<div class="col-lg-8 col-md-5 mb-md-0 mb-4">
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
<div class="col-lg-8 col-md-5 mb-md-0 mb-4">
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
      <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>assumenda in
        maiores repudiandae mollitia architecto.</p>
    </div>
  </div>
  <!--Card-->
</div>
<!--Grid column-->

</div>
<!-- Grid row -->



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
