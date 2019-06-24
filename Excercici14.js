/**
 * 
 * 
 */

var vectorNxn = [0];
var respuesta = "En la diagonal de la matriz representada en el vector : ";
var output = "";
var posicionDiagonal = 0;
var numPos = 0;
var numNeg = 0;
var ceros = 0;


function idNumDiagonal()
{   
    var multiplicador = parseInt(numero);

    for (i = 0; i<(multiplicador*multiplicador); i++)
    {
       vectorNxn[i] = Math.floor(Math.random() * 100)-50;
    }  
    
    for (j = 0; j < multiplicador; j++)
    {   

        if (vectorNxn[posicionDiagonal]==0) {ceros = ceros+1;}
        if (vectorNxn[posicionDiagonal]>0) {numPos = numPos+1;}
        if (vectorNxn[posicionDiagonal]<0) {numNeg = numNeg+1;}
        posicionDiagonal = posicionDiagonal + multiplicador + 1; 
    }

    posicionDiagonal = posicionDiagonal + multiplicador + 1;    
   
numNeg.toString();
ceros.toString();
numPos.toString();
output = respuesta.concat(vectorNxn," los numeros positivos encontrados son : ",numPos," los negativos son : ", numNeg,"  y los ceros son : ",ceros);
return output

}