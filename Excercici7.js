/**
 * En el Scratch habia realizado este ejercicio creando una lista con numeros naturales.
 * Luego de darle unas vueltas y pensar el ejercicio sin el scratch se me ocurrio 
 * que podia hacerlo mucho mas sencillo utilizando la misma variable de mis bucles,
 * una como el numero a comparar y otra como la posicion en la cadenadeNumeros a comparar.
 * Asi utilizo el minimo de variables.
 * Me aprecio al solucion mas efectiva.
 */

var posicionCaracter = [0,0,0,0,0,0,0,0,0,0];

function CercarCaracter()
{
   for (i=0; i<10; i++)
   {     for (let j = 0; j < cadenaNumeros.length; j++)
       {   
            if (cadenaNumeros.charAt(j) == i) 
            {
            posicionCaracter[i]++;        
            } 
       }  
   }    
   return posicionCaracter;
}