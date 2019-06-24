/**
 * 
 * 
 *
 */
var posicionCadena = 0;
var posicionCaracter = 0;
var resultado = [];

function CercarCaracter()
{
   for (i=0; i<cadenadeLetras.length; i++)
   {   if (cadenadeLetras.charAt(posicionCadena)==caracter) 
            {
            resultado[posicionCaracter] = posicionCadena+1;
            posicionCaracter++;
            
            }  
       posicionCadena++
   } 
   if (resultado == 0) 
   {
   resultado.toString();
   resultado = " No se ha encontrado el caracter en la frase";  
   }
   return resultado;
}