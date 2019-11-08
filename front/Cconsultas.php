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
        .map-container {
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
            height: 0;
        }

        .map-container iframe {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
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
                <a class="navbar-brand waves-effect" style="margin-left: 50%;" target="_blank">
                    <H1 class="pink-text">Gestion de consultas</H1>
                </a>

                <!-- Collapse -->

            </div>


        </nav>
        <!-- Navbar -->

        <!-- Sidebar -->
        <?php
   include 'adminSidebar.php';
    ?>
        <!-- Sidebar -->

    </header>
    <!--Main Navigation-->


    <div class="container-fluid contenedor" >
        <!--Main layout-->
        <table id="editable" class="table table-striped w-auto">

            <!--Table head-->
            <thead>
                <tr>
                    <th>CODIGO</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Especialidad</th>

                </tr>
               
            </thead>
            <!--Table head-->

            <!--Table body-->
            <tbody>
                 <tr>
                    <td>CODIGO</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Especialidad</td>

                </tr>
            </tbody>
        </table>
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
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script> 
<script src="js/mindmup-editabletable.js"></script>
    <!-- Initializations -->
    <script type="text/javascript">
        // Animations initialization
        $('#editable').editableTableWidget();
        new WOW().init();

    </script>

    <!-- Charts -->

</body>

</html>
