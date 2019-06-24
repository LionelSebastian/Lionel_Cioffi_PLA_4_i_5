/**
 * 
 * 
 */

var VECTOR5x5 = [5,5,5,5,5,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1];
var respuesta = "El resultado del producto de la diagonal de la matriz es : ";
var output = "";

function productoDiagonal()
{   
   resultado = (VECTOR5x5[0]*VECTOR5x5[6]*VECTOR5x5[12]*VECTOR5x5[18]*VECTOR5x5[24]);
   resultado.toString();
   output = respuesta.concat(resultado);
   return output

}