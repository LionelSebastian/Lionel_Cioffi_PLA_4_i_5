/**
 * Se hace una evolucion completa del ejercicio 6 con la finalidad de comunicar mejor los resultados 
 * al usuario ya que este ejercicio requeria enviar un error si se encontraba un numero en la cadena de 
 * caracteres ingresada. Se utilzia el recurso de concatenar strings, por lo que se convierte el array 
 * resultado en un string para luego concatenarlo con la frase deseada.
 */

var fraseEncontrada = "La posiciones de A encontradas en la cadena son: ";
var fraseNoencontrada = "No se ha encontrado ninguna A en al cadena";
var fraseError = "Ha ingresado un caracter numerico:::FATAL ERROR!!!";
output = "";
var resultado = [];
var posicionCaracter = 0;
var posicionCadena = 0;

function CercarCaracter()  
{  
   for (i=0; i<10; i++)
   {  
      for (j=0; j<stringdeLetras.length; j++)
      {
         if (stringdeLetras.charAt(j)==i)
          {output = fraseError} 
      }
   }
   if (output!=fraseError) 
   {
      for (i=0; i<stringdeLetras.length; i++)
      {
          if (stringdeLetras.charAt(i)=="a") 
          {
            resultado[posicionCaracter] = i+1;
             posicionCaracter++;            
         }                       
      }                    
      resultado.toString();                  
      output = fraseEncontrada.concat(resultado)             
   } 
   return output;
}