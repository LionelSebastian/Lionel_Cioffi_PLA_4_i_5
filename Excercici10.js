/**
* 
*/

var resultado = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ABECEDARIO = "abcdefghijklmnopwrstuvxyz";
var posicionCaracter = 0;

function CercarCaracter()  
{ 
     for (i = 0; i < stringLetras.length; i++)     
    { 
        for (j = 0; j < ABECEDARIO.length; j++)        
        {
            if (stringLetras.charAt(i)==ABECEDARIO.charAt(j))
             {
                resultado[j]++;
             }        
        }           
    }
 return resultado;   
}
  