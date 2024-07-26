function declare(){
    alert("función declarada");
}

function restar(x, y){
    let resta;
    if(x>y){

        resta= x-y;
    }else{
        resta= y-x;
    }
    
    return(resta);
}

function mostrar(){
    let num1=parseInt(prompt("Digite el primer número: "));
    let num2=parseInt(prompt("Digite el segundo número: "));
    let resultado= restar(num1, num2);
    alert("Resultado de la resta:  "+ resultado);

}
const saludar=() =>{
    alert("Hola mundo!!");
}

const sumar= (x,y)=>{
    let suma= x+y;
    return(suma);
}

const mostrarSuma=()=>{
    let num1= parseInt(prompt("Digite el primer número: "));
    let num2= parseInt(prompt("Digite el segundo número: "));

    let total= sumar(num1, num2);
    
    alert("El resultado de la suma es: "+ total);
}

function cambio(){

    let elemento = document.getElementById("miEtiqueta");
    let clase1= elemento.classList;
    //alert("hola "+ clase1);

    if(clase1== "oldClase"){
        elemento.classList.add("newClase");

    }else{
        elemento.classList.remove("newClase");
        elemento.classList.add("oldClase");
    }

}

function miClase(){

    let elementos= document.getElementsByClassName("claseX");

    for(var i=0; i<elementos.length; i++){
        elementos[i].style.background="blue";
        elementos[i].style.color="orange";
        elementos[i].style.fontStyle="italic";
        elementos[i].style.margin="1px";


    }
}
function cambiarT(){
    const parrafos= document.getElementsByTagName("label");
    for(var i=0; i<parrafos.length; i++){

        parrafos[i].textContent= "Las etiquetas han sido cambiadas!!";
    }

}

function xId(){
    let elemento= document.querySelectorAll("#id1");
    for(let i=0; i<elemento.length; i++){
        if(i%2===0){
            elemento[i].style.background="green";
            elemento[i].style.color="red";
            elemento[i].style.fontStyle="bold";
        }else{
            elemento[i].style.background="red";
            elemento[i].style.color="green";
            elemento[i].style.fontStyle="italic";
        }
        
    }
    
    
}
function xClase() {
    let elemento= document.querySelectorAll(".miClase");
    for(let i=0; i<elemento.length; i++){
        if(i%2===0){
            elemento[i].style.background="red";
            elemento[i].style.color="white";
        }else{
            elemento[i].style.background="yellow";
            elemento[i].style.color="violet";
        }
       
    }    
}

function xTag() {
    let elemento= document.querySelectorAll("p");
    for(let i=0; i<elemento.length; i++){
            if(i%2===0){
                elemento[i].style.background="black";
                elemento[i].style.color="yellow";
                elemento[i].textContent= "Ejecutado mediante etiquetas";
            }else{
                elemento[i].style.background="orange";
                elemento[i].style.color="blue";
                elemento[i].textContent= "Ejecutado mediante etiquetas";
                elemento[i].innerHTML="<i>Ejecutado mediante etiquetas</i>";

            }

        
    }

}

function enviando(){
    let elemento= document.querySelector("#boton_enviar");
    elemento.textContent="Enviado";

    elemento.style.background="red";
    elemento.style.color="white";
    elemento.style.fontStyle="italic";

}
function aNegrita() {
    let elemento= document.querySelector("#miBoton");
    elemento.innerHTML="<i>Cambiado a itálica</i>";
    elemento.style.background="black";
    elemento.style.color="white";
}

function nuevoElemento() {
    let elemento= document.getElementById("elementoN");
    let nuevoParrafo= document.createElement('p');
    nuevoParrafo.textContent= "Este es el nuevo párrafo.";
    elemento.appendChild(nuevoParrafo);

}
function remover() {
    let elemento= document.getElementById("elementoN1");
    elemento.remove();
}




document.getElementById("botonClick").addEventListener('click', function() {
    let elemento= document.getElementById("alertas");
    elemento.textContent= "El botón ha sido cliqueado!!";

});

document.getElementById("parrafoClick").addEventListener("dblclick", function(){
    alert("Has hecho doble click en el párrafo!!");
});

document.getElementById("etiClick").addEventListener("keydown", function(event){
    alert("Has opturado el teclado."+ event.key);
});

