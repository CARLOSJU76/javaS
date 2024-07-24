let operacion;
let contador=0;

    do{
        if (contador=== 0){
            operacion= parseInt(prompt("digite 1 si quiere una suma, 2 si quiere una resta, 3 si quiere una multiplicacion y cuatro si quiere una division: "));
            contador++;
        }else if (contador !==0 && operacion!==1 && operacion !==2 && operacion !==3 && operacion !==4 ){
            alert("Opción no válida. Vuelve a intentarlo.");
            operacion= parseInt(prompt("digite 1 si quiere una suma, 2 si quiere una resta, 3 si quiere una multiplicacion y cuatro si quiere una division: "));
            contador++;
        }     
         
    } while(operacion!== 1 && operacion !==2 && operacion !==3 && operacion !==4);

        let numero1= parseInt(prompt("Digita el primer numero: "));
        let numero2= parseInt(prompt("Digita el segundo numero: "));
        let suma= (parseInt(numero1)+ parseInt(numero2));
let resta;

if(numero1 > numero2){
    resta=(parseInt(numero1) - parseInt(numero2));
}else{
    (parseInt(numero2)- parseInt(numero1))
}
let multiplicacion= parseInt(numero1)*(numero2);
let division;
let bandera= true;

    if (numero2 != 0){ 
        division=parseFloat(numero1)/parseFloat(numero2);
}else{
    bandera=false;
}
switch (operacion){
    case 1: alert("La suma da: "+  suma); break;
    case 2: 
        alert("La resta es: " + resta);break;

    case 3: alert("La multiplicacion da: "+ multiplicacion);
    case 4: if(numero2 != 0){
        alert("La division es: "+ division);
    }else{
        alert("NO es posible realizar la operacion");
    }
    
    }





/*if(operacion=== 1){
    alert("La suma da: "+  suma);
    
}else if(operacion=== 2){
    alert("La resta es: " + resta);

}else if(operacion=== 3){
    alert("La multiplicacion da: "+ multiplicacion);
    
}else{
    if(bandera=== true){
        alert("La division es: "+ division);

    }else{
        alert("NO es posible realizar la operacion.");
    }
}*/
