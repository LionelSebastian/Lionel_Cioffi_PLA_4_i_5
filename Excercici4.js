/**
 * 
 * 
 *
 */

var posicionCaracter= 0;

function CercarCaracter()
{   cadenadeLetras = cadenadeLetras.toLowerCase();//Aqui utilice el recurso de pasarlo a minusculas poara poder reconocer el caracter con un solo loop
   for (i=0; i<cadenadeLetras.length; i++)
   {        if (cadenadeLetras.charAt(i)=="a") 
            {
            posicionCaracter=i+1; //utilizamos el recurso de sumar uno a la posicion donde termina el loop 
 //porque se acaba cuando encuentra una A, por lo que la posicion de la A corresponde al caracter siguiente
            i=cadenadeLetras.length+1;
//le damos a i el valor necesario que termine el loop
            }  
   }
   if (posicionCaracter==0) 
   {
       posicionCaracter.toString();
       posicionCaracter = "No se ha encontrado su caracter en la frase";      
   } 
   return posicionCaracter;
}