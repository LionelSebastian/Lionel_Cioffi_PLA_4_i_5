/**
* 
*/

var fraseEncontrada = "Los numero mayores que el ingresado son:  ";
var fraseNoencontrada = "Usted a selecionado un numero mayor que 9 o menor que 0....vuelva a intentarlo!! Gracias por jugar con nosotros!!";

var output = "";
var resultado = [];
var posicionCaracter = 0;
var posicion = 0;


function CercarCaracter() 
  
{     if (numero<0) {output=fraseNoencontrada}
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
            if (resultado == 0) {output=fraseNoencontrada}
            else
            {
                resultado.toString();    
                output = fraseEncontrada.concat(resultado," Gracias por jugar con nosotros!!");
            }         
        }            
   return output;

}