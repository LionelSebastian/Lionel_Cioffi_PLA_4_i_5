/**
 * 
 * 
 *
 */
var contadorCaracter= 0;
var posicionCadena = 0;

function CercarCaracter()
{
   for (i=0; i<cadenadeLetras.length; i++)
   {        if (cadenadeLetras.charAt(posicionCadena)==caracter)
             {contadorCaracter++;}  
   posicionCadena++
   }
            if (contadorCaracter==0)            
            {
               cadenadeLetras = cadenadeLetras.toUpperCase();
               posicionCadena = 0;
                     for (j=0; j<cadenadeLetras.length; j++)
                     {   
                           if (cadenadeLetras.charAt(posicionCadena)==caracter) 
                           {contadorCaracter++;}  
                      posicionCadena++
                     }
             }
   if (contadorCaracter==0) 
   {
       contadorCaracter.toString();
       contadorCaracter = "No se ha encontrado su caracter en la frase";      
   } 
   return contadorCaracter;
}