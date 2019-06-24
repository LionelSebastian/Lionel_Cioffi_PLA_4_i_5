/**
 * 
 * 
 *
 */
var resultado = [];//Creo un array vacio donde guardare las posiciones de las letras A encontradas
var posicionCaracter = 0;//Comienza en  que es la primera posicion del array, para introducir als posicioones encontradas
var posicionCadena = 0;//Esta variable guardara la posicion en al cadena de numeros donde se encuentra coincidenciacon A

function CercarCaracter()
{
   for (i=0; i<cadenadeLetras.length; i++)
   {   if (cadenadeLetras.charAt(posicionCadena)=="a") 
            {
            resultado[posicionCaracter] = posicionCadena+1;
            posicionCaracter++;
            
            }  
       posicionCadena++
   } 
   return resultado;
}