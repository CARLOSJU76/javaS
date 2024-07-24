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