/**
 * 
 * 
 *
 */

var STRINGDELETRAS = "THE BEST IS ALWAYS YET TO COME";
var contadorCaracter= 0;


function CercarCaracter()
{  caracter = caracter.toUpperCase();            //Convierto el caracter ingresado por teclado a mayusculas 
   for (i=0; i<STRINGDELETRAS.length; i++)       //Recorro el string de letras en toda su longitud
   {       
       if (STRINGDELETRAS.charAt(i)==caracter) {contadorCaracter++;}  
   }                                              //Utilizo la misma variable i para posicionarme en el string  
    return contadorCaracter;        
}
