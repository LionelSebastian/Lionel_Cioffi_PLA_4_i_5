/**
 * 
 * 
 */

var vectorNxn = [0];
var respuesta = "En la matriz representada en el vector : ";
var output = "";
var resultado = [0];
var posicionDiagonal = 0;



function idNumDiagonal()
{   
    var multiplicador = parseInt(numero);

        for (i = 0; i<(multiplicador*multiplicador); i++)
        {
            vectorNxn[i] = Math.floor(Math.random() * 100)-50;
        }  
    
        for (j = 0; j < multiplicador; j++)
        {   
            resultado[0] = resultado[0] + vectorNxn[posicionDiagonal];
            posicionDiagonal = posicionDiagonal + multiplicador; 
        }
    resultado[0] = resultado[0]/3;    
    resultado.toString();
    output = respuesta.concat(vectorNxn," La mediana aritmetica de la primera columna da como resultado : ", resultado);
    return output

}