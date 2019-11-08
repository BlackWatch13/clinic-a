<?php if ($_SESSION["rol"]=="admin"){
  include 'adminSidebar.php';
}
else if ($_SESSION["rol"]=="recepcionista") {
  // code...
  include 'recepSidebar.php';
}
else if ($_SESSION["rol"]=="doctor") {
  // code...
  include 'doctorSidebar.php';
}


  ?>
