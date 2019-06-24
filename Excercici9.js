/**
* 
*/

var fraseEncontrada = "Los numero mayores que el ingresado son:  ";
var fraseNoencontrada = "No hay caracteres mayores que el seleccionado entre los numeros naturales!! Gracias por jugar con nosotros!!";

var output = "";
var resultado = [];
var posicionCaracter = 0;
var posicion = 0;


function CercarCaracter() 
  
{     if (numero<=0) {output=fraseNoencontrada}
      else
        {
             for (i=0; i<10; i++)
            {
                if (i>numero) 
                {
                resultado[posicion] = i; 
                posicion++                 
                }             
            }  
        resultado.toString();    
        output = fraseEncontrada.concat(resultado," Gracias por jugar con nosotros!!");          
        }            
   return output;

}