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
        <div id="content" style="border-bottom-width: 28px;border-bottom-style: solid;">

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
<div class="container-fluid" style="margin-top:60px">


     <!-- INSERTAR CONTENIDOS -->

	 <div class="fondoForm  light-blue accent-1">
					<div class="card-header">
						<h4>Informacion del Paciente </h4>
					</div>
					<div class="card-body">
						<form class="form" role="form" autocomplete="off">
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Medicamento</label>
								<div class="col-lg-9">
									<input name="medicamento" class="form-control" type="text" placeholder="Ingrese Medicamento">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Apellidos</label>
								<div class="col-lg-9">
									<input name="apellido" class="form-control" type="text" placeholder="Ingrese Paciente">
								</div>
							</div>
							
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Edad</label>
								<div class="col-lg-9">
									<input name="edad" type="number" class="form-control" type="text" placeholder="XX">
								</div>
                            </div>
                            
                            <div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Sexo</label>
								<div class="col-lg-9">
                                <select name="sexo" class="browser-default custom-select">
                                <option selected>Seleccione</option>
                                <option value="1">Hombre</option>
                                <option value="2">Mujer</option>
                                </select>
								</div>
                            </div>
                            
							<div class="form-group row">
								<label class="col-lg-3 col-form-label form-control-label">Dirrecion</label>
								<div class="col-lg-9">
									<input name="direccion" class="form-control" type="text" placeholder="Ingrese Direccion">
								</div>
                            </div>
                            
                            

							<div class="form-group row">
								<div class="col-lg-12 text-center">
									<input type="reset" class="btn btn-secondary" value="Cancelar">
									<input type="button" class="btn btn-primary"
										value="Guardar">
								</div>
							</div>
						</form>
					</div>
				</div>
				<!-- FIN CONTENIDO-->

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
