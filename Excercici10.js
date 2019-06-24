/**
*
*/

var resultado = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ABECEDARIO = "abcdefghijklmnopwrstuvxyz";
var posicionCaracter = 0;
var controlador = true;

function CercarCaracter()  
{ 
     for (i = 0; i < stringLetras.length; i++)     
    { 
        for (j = 0; j < ABECEDARIO.length; j++)        
        {
            if (stringLetras.charAt(i)==ABECEDARIO.charAt(j))
             {
                resultado[j]++;
                controlador = false;/*En este ejercicio indroduje una variable boolean para saber si se habia encontrado o no alguna letra
                                  para en el caso que el usuario no ingresara ningun caracter de nuesro abecedario se lo comunicaramos*/
             }        
        }           
    }
if (resultado != true ) 
   {
   resultado.toString();
   resultado = "No ha ingresado usted ninguna letra de nuestro abecedario...Gracias por jugar con nosotros!!"
   }
 return resultado;   
}
  