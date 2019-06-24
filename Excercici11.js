/**
 * 
 * 
 */
 var lista1 = [1,1,1,1,1];
 var lista2 = [2,2,2,2,2];
 var lista3 = [3,3,3,3,3];
 var lista4 = [4,4,4,4,4];
 var lista5 = [5,5,5,5,5];
 var respuesta = "El resultado del producto de la diagonal de la matriz es : ";
 var output = "";
 
 function productoDiagonal()
 {   
    resultado = (lista1[0]*lista2[1]*lista3[2]*lista4[3]*lista5[4]);
    resultado.toString();
    output = respuesta.concat(resultado);
    return output

}