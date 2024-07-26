//1.- Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.

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
/*
let frutas=[];
let i=0;
let agregar;

      do{

            frutas[i]= prompt("Agrega una nueva fruta al arreglo: ");
                             i++;
            agregar=prompt ("Deseas agregar una nueva fruta? ... Digita S");


}while (agregar==="s" || agregar==="S");

let cantidad= frutas.length;

alert ("Hay "+ cantidad + " frutas en el arreglo.");

let cola= prompt("Agrega una fruta en la cola del arreglo: ");
frutas[(cantidad+1)]=cola;
alert(frutas);

let inicio= prompt("Agrega una fruta al inicio del arreglo: ");
frutas.unshift(inicio);
alert(frutas);
alert("Eliminando el último elemento del arreglo: ")
frutas.pop();
alert(frutas);
let esta=prompt("Digita la fruta de la que quieras saber su posición en el arreglo: ");
if(frutas.includes(esta)===false){
    alert("El elemento que digitaste no se encuentra en el arreglo.")

}else{
   alert(esta + " Se encuentra en la posición " + frutas.indexOf(esta)+ " del arreglo.");
}

alert(frutas);
*/
    

let frutas=[];
let cantidad= frutas.length;


function agregarF (){

   let frutaN= document.getElementById("fruta");
   let valorF= frutaN.value;
   let agregada= document.getElementById("visor");

   if (document.getElementById("fruta").value.trim() === "") {
    alert("Por favor, ingrese un valor en el campo.");
    // Evitar que se envíe el formulario
    agregarF.preventDefault();
    // Mostrar un mensaje o realizar otra acción, por ejemplo:
    
    }else if(frutas.includes(valorF)=== true){
        agregada.textContent= valorF + ". Esta fruta se ha incluido antes en el frutero. ";
        frutaN.value="";
        agregarF.preventDefault();
    }else{
        frutas.push(valorF);
        agregada.textContent=("Agregaste: "+ valorF + " al frutero.");
        frutaN.value="";
    }   
}

function mostrarF() {
    cantidad=frutas.length;
    let spanResultado = document.getElementById("visor");
    if(frutas.length===0){
        spanResultado.textContent= "El frutero está vacío!!";
    }else{
        spanResultado.textContent = "El frutero contiene: " + frutas + ".";
    }

    
    
}
function cantidadF() {
    
    cantidad=frutas.length;
    let cantid= document.getElementById("visor");
    if(frutas.length===0){
        cantid.textContent="El frutero está vacío!!";
    }else if(frutas.length===1){
        cantid.textContent= "Tienes una fruta en el frutero.";
    }else{
        cantid.textContent=("tienes " + cantidad + " frutas en el frutero. ");
    }
    
    
}
function xUltima(){
    frutas.pop();
    let parrafo= document.getElementById("visor");
    parrafo.textContent= "Has eliminado la última fruta del arreglo.";
}
function alInicio() {

    let agregada= document.getElementById("fruta");
    let frutaI= agregada.value;
    let parrafo= document.getElementById("visor");

    if(document.getElementById("fruta").value.trim()===""){
        parrafo.textContent="Ingresa un valor en el campo. ";
        alInicio.preventDefault();
    }else if(frutas.includes(frutaI)===true){
        parrafo.textContent= frutaI + ". Esta fruta se ha incluido antes en el frutero";
        agregada.value="";
        alInicio.preventDefault();
    } else{
        frutas.unshift(frutaI);
       agregada.value="";
        
        parrafo.textContent="Has agregado "+ frutaI + " al inicio del arreglo.";
    }

}
function indice() {
    let parrafo= document.getElementById("fruta");
    let frutaInd= parrafo.value;
    let parrafo1=document.getElementById("visor");
    

    if (parrafo.value.trim()===""){
        parrafo1.textContent="Digita un elemento para realizar la consulta.";
        parrafo.value="";
    }else if(frutas.includes(frutaInd)===false){
        parrafo1.textContent="La fruta no se encuentra en el frutero.";
        parrafo.value="";
    }else{
        parrafo1.textContent=frutaInd+" se encuentra en la posición: "+ frutas.indexOf(frutaInd) + " del arreglo. ";
        parrafo.value="";
    }

}
let elemento= document.getElementById("fruta");

elemento.addEventListener('keydown', function(event){
    if(event.key==='Enter'){
        agregarF();
    }
});
