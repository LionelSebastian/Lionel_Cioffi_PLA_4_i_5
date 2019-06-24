/**
 * 
 * 
 *
 */

var posicionCaracter= 0;

function CercarCaracter()
{
   cadenadeLetras = cadenadeLetras.toLowerCase();
   for (i=0; i<cadenadeLetras.length; i++)
   {        if (cadenadeLetras.charAt(i)==caracter) 
            {
            posicionCaracter=i+1;
            i=cadenadeLetras.length+1;
            }  
   }
          
   return posicionCaracter;
}