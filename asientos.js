
function mostrar(asientos){
   
  var log = asientos.length;
  var str = "";
  var srt2 = "";
   for (var i = 0; i <log ; i++) {
     var x=(asientos[i] != undefined)?"*":'';
      if (i%2 == 0)   
         str += (i+1) + "[" + x + "] ";
      else   
         srt2 += (i+1) + "[" + x + "] ";
   }
   // return "|" + str + "|\n";
  return '\n' +str+'\n'+srt2+'\n';
}  

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
  function buscar(asientos,dni){
    for(var i=0;i<asientos.length; i++){
      if(asientos[i] !== undefined){
        if(asientos[i].dni == dni){
          return asientos[i];
        }
        return " ";
      }
    }   
  }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Seleccionar asiento \n"+
                 "4: Buscar Pasajero \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            var name =  prompt( "nombre del pasajero" )  ;
            var id = parseInt( prompt( "dni del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id
            };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >0 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            str = mostrar(asientos) +
                     "Nombre del pasajero: " + asientos [nro - 1].nombre + 
                     "DNI del pasajero: " + asientos [nro - 1].dni;
                
            alert (str);
         }
      }
      else if (option == 4){
        var dni = parseInt(prompt("ingrese el DNI"));
        var pasajero = buscar(asientos,dni);
        alert ("Pasajero:" +  pasajero.nombre + "  " + pasajero.dni + " "+ pasajero.asientos);
      }
   } 
   imprimir(asientos);
}

//reserva(); 