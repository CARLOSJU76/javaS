//1.- Leer un entero y mostrar todos los múltipols de 5 comprendidos entre 1 y el número leído.

/*let numero= prompt("Dime un número:");

for( let i=0; i<=numero; i++){
    if(i%5===0 && i>(numero-5)){
        alert(i + ". " );
    }else if (i%5=== 0 && i<(numero-5)){
        alert(i + ",");
    }

}*/

// 2.- Leer un número entero y determinar si es primo.

/*let numero= prompt ("Dime  un número:");
let contador=0;

for(let i=2; i <=numero; i++){
    if(numero%i===0){
        contador++;
    }
}
if(contador>1 ){
    alert("El número no es primo");
}else{
    alert("El número es primo");
}*/

//3.- Leer un número entero y determinar cuantos dígitos tiene.

/*let numero= prompt("Dime un número: ");
let contador=1;

do{
    numero= numero/10;
    contador++;
    
} while (numero > 10);

alert ("El número esta comfomrado por : "+ contador + "dígitos. ");
*/

//4.-Leer un número entero y determinar  a cuanto es igual la suma de sus dígitos.
/*let numero= prompt("Digita un número.  ");
let digito;
let suma=0;
do{
    digito=numero%10;
    suma+=digito;
    numero= Math.trunc(numero/10);
}while(numero != 0);
alert("La suma de los dígitos del numero es: " + suma);
*/

//5.-Leer un npumero entero y determinar cuál es el mayor de sus dígitos

/*let numero= prompt("Digita un número: ");
let digito;
let mayor=0;
do{
    digito= numero%10;
    if(digito>mayor){
        mayor = digito;
    }
    numero= Math.trunc(numero/10);
}while(numero !==0);
alert ("El mayor de los números que digitaste es : " +  mayor);
*/

//6.-Leer números hasta que digiten 0 y determinar a cuanto es igual el promedio entero de los números primos leídos.
/*let numero;
let suma=0;
let contador=0;
let contadorp=0;
let bandera=false;
let promedio;
do {
    numero= parseInt(prompt("Digita un número: "));

    for(let i=1; i <=numero; i++){
        if(numero%i===0){
            contadorp++;
        }
    }

    if(contadorp<=2 && numero!=0 ){       
        suma=suma+numero;
        contador++;
        promedio=suma/contador;
    }    
    contadorp=0;
    
}while (numero!==0);

alert("El promedio de los números primos leídos es: " + promedio);
*/

//7.-Serie de Fibonacci:

/*let can_ter = parseInt(prompt("Cuántos térmnos deseas en la serie: "));
let termino=[];
let a=0; b=1, c=0;

for(let i=0; i<=can_ter; i++){
    termino[i]=a;
    c=a;
    a=b;
    b=a+c;
}
alert(termino);
*/
let frutas=[];
while (frutas[i]!="F" || frutas[i]!="f"){
    frutas[i]=prompt("Agrega una fruta al arreglo. Digita f si no deseas ingresar mas elementos:  ");

}
let cantidad= frutas.length;
alert ("Hay "+ cantidad + " en el arreglo.");


