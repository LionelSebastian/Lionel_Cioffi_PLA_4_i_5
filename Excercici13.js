/**
 * 
 * 
 */
var VECTORnxn = [];
var respuesta = "La suma de la diagonal de este vector ";
var output = "";
var resultado = 0;
var posicionDiagonal = 0;


function sumaDiagonal()
{   var multiplicador = parseInt(numero);
    for (i = 0; i<(multiplicador*multiplicador); i++)
    {
       VECTORnxn[i] = Math.floor(Math.random() * 10);
    }     
    for (j = 0; j < multiplicador; j++)
    {
        resultado = resultado + VECTORnxn[posicionDiagonal];
        posicionDiagonal = posicionDiagonal + multiplicador + 1;          
    }   
resultado.toString();
output = respuesta.concat(VECTORnxn," da como resultado ",resultado);
return output

}