jQuery('.editar').on('click', function() {
     var $row = jQuery(this).closest('tr');
     var $columns = $row.find('td');

     $columns.addClass('row-highlight');
     var values = "";

     jQuery.each($columns, function(i, item) {
       switch(i+1) {
              case 1:
              document.getElementById("editform1").value = item.innerHTML;
                // code block
                break;
                case 2:
                document.getElementById("editform2").value = item.innerHTML;
                  break;
                  case 3:
                  document.getElementById("editform3").value = item.innerHTML;
                    break;
                    case 4:
                    document.getElementById("editform4").value = item.innerHTML;

                      break;
                      case 5:
                      document.getElementById("editform5").value = item.innerHTML;
                        break;
                        case 6:
                        document.getElementById("editform6").value = item.innerHTML;
                          break;
                          case 7:
                          var $text = item.innerHTML;


                          if($text=="Hombre" | $text=="Masculino")
                          {
                            $("#editform7").val('Hombre');
                          }
                          else if ($text=="Mujer" | $text=="Femenino") {
                            $("#editform7").val('Mujer');
                          }
                          else {
                            alert($text);
                          }
                            break;
              default:
                // code block
              }

     });

     $('#modalLoginForm').modal('show');
 });

 jQuery('.borrar').on('click', function() {
      var $row = jQuery(this).closest('tr');
      var $tds = $row.find("td:nth-child(1)"); // Finds the 2nd <td> element
      var $borrar = "";
       $.each($tds, function() {                // Visits every single <td> element
          $borrar = $(this).text();         // Prints out the text within the <td>
       });

       $.post("../test/eliminarPac.php",
      {
        username: $borrar
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        window.location="../front/pacientes.php";
        });



  });

  jQuery('.modificar').on('click', function() {
    //obtener valores asi como estan en la tabla y el form
    //desde username hasta pass
    var $edit1 = document.getElementById("editform1").value;
    var $edit2 = document.getElementById("editform2").value;
    var $edit3 = document.getElementById("editform3").value;
    var $edit4 = document.getElementById("editform4").value;
    var $edit5 = document.getElementById("editform5").value;
    var $edit6 = document.getElementById("editform6").value;
    var $edit7 = document.getElementById("editform7").value;

    //Agregar al post los valores necesarios y vincularlos con sus
    //variables correspondientes

    //Cambiar la ruta del post a archivo necesario
        $.post("../test/updatepacientes.php",
       {
         idpaciente: $edit1,
         nombre: $edit2,
         apellido: $edit3,
         telefono: $edit4,
         edad: $edit5,
         direccion: $edit6,
         sexo: $edit7
       },
       function(data, status){
         alert("Data: " + data + "\nStatus: " + status);
         window.location="../front/pacientes.php";
         });



   });
/*$('#borrar').onClick(function() {
var $row = $(this).closest("tr");    // Find the row
var $text = $row.find(".nr").text(); // Find the text

// Let's test it out
alert($text);
});*/
