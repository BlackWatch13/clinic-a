<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Usuarios</title>
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
        <div id="content" style="border-bottom-width: 10px;border-bottom-style: solid;">

            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid col-2">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>

                    </button>

                </div>
                <div class="container-fluid col-7">
                   <h2 class="tituloHeader"> Usuarios </h2>
                </div>
            </nav>
<div class="container-fluid" style="margin-top:80px">
<div class="card card-cascade narrower">

  <!--Card image-->
  <div
    class="view view-cascade gradient-card-header blue-gradient narrower py-2  mb-3 d-flex justify-content-between align-items-center">

    <!--div>
      <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
        <i class="fas fa-th-large mt-0"></i>
      </button>
      <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
        <i class="fas fa-columns mt-0"></i>
      </button>
    </div-->

    <a href="" class="white-text mx-4">Table name</a>


    <div>
      <input id="myInput" type="text" placeholder="Buscar..">
    </div>

  </div>
  <!--/Card image-->

  <div class="px-4">

    <div class="table-wrapper">
      <!--Table-->
      <table id="mainTable" class="table table-hover mb-0">

        <!--Table head-->
        <thead>
          <tr>

            <th class="th-lg">
              <a>Username
                <i class="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th class="th-lg">
              <a href="">Nombre
                <i class="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th class="th-lg">
              <a href="">Apellido
                <i class="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th class="th-lg">
              <a href="">Estado
                <i class="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th class="th-lg">
              <a href="">Especialidad
                <i class="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th class="th-lg">
              <a href="">Contraseña
                <i class="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th class="th-lg">
              Editar/Eliminar

            </th>
          </tr>
        </thead>
        <!--Table head-->
            <tbody id="myTable">
        <?php
        $i = 1;
        $url = "http://localhost:3000/api/user";
        $json = file_get_contents($url);
        $datos = json_decode($json, true);
        $data = $datos["data"];

        foreach($data as $datos)
        {
          echo "<tr>";

          foreach($datos as $info)
          {
            echo '<td class="'.$i.'">';
            if($info=='1'){
              echo("admin");
            }
              else if($info=='2'){
                echo("recepcionista");
              }
                else if($info=='3'){
                  echo("doctor");
                }
                else{
                  echo($info);
                }
            echo("</td>");
            $i++;
          }

          echo '<td>
          <button type="button" class="btn  btn-sm px-2 editar">
            <i class="far fa-edit mt-0"></i>
          </button>
          <button type="button" class="btn btn-sm px-2 borrar">
            <i class="fas fa-times mt-0"></i>
          </button>
          </td>
          </tr>';
        }
        ?>
        <!--Table body-->





        </tbody>
        <!--Table body-->
      </table>
      <!--Table-->
    </div>

  </div>

</div>
<!-- Table with panel -->

     <!-- INSERTAR CONTENIDOS -->
     <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
     <div class="modal-dialog" role="document">
     <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Editar Usuario</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="far fa-calendar-alt prefix grey-text"></i>
          <input name="username" type="text" id="editform1" class="form-control validate">
        </div>

        <div class="md-form mb-5">
          <i class="far fa-clock prefix grey-text"></i>
          <input name="nombre" type="text" id="editform2" class="form-control validate">

        </div>

        <div class="md-form mb-5">
          <i class="fas fa-user-injured prefix grey-text"></i>
          <input name="apellido" type="text" id="editform3" class="form-control validate">

        </div>


        <div class="md-form mb-5">

          <select name="estado" id="editform4" class="browser-default custom-select" >
          <option selected>Elegir tipo de usuario</option>
          <option value="1">Administrador</option>
          <option value="2">Recepcionista</option>
          <option value="3">Doctor</option>
          </select>
        </div>



        <div class="md-form mb-5">
          <i class="fas fa-certificate prefix grey-text"></i>
          <input name="especialidad" type="text" id="editform5" class="form-control validate" >

        </div>



        <div class="md-form mb-5">
          <i class="fas fa-certificate prefix grey-text"></i>
          <input name="contraseña" type="password" id="editform6" class="form-control validate" placeholder="Especialidad">

        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-default modificar">Guardar</button>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <!-- jQuery Custom Scroller CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="./js/mindmup-editabletable.js"></script>
    <script src="./js/crud.js"></script>


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
