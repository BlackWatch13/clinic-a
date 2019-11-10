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

       $.post("../test/pruebaenvio.php",
      {
        username: $borrar
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status + $borrar);
        });



  });

  jQuery('.modificar').on('click', function() {
    //obtener valores asi como estan en la tabla y el form
    //desde username hasta pass

    var $edit1 = document.getElementById("editform1").value;
    var $edit2 = document.getElementById("editform2").value;
    var $edit3 = document.getElementById("editform3").value;
    var $edit4 = document.getElementById("editform4").value;


    //Agregar al post los valores necesarios y vincularlos con sus
    //variables correspondientes

    //Cambiar la ruta del post a archivo necesario
        $.post("../test/pruebaenvio.php",
       {
         idexpe: $edit1,
         idpaciente: $edit2,
         alergias: $edit3,
         enferpade: $edit4
       },
       function(data, status){
         alert("Data: " + data + "\nStatus: " + status);
         });



   });
/*$('#borrar').onClick(function() {
var $row = $(this).closest("tr");    // Find the row
var $text = $row.find(".nr").text(); // Find the text

// Let's test it out
alert($text);
});*/
