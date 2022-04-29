var numero = 0;

function Sumar(){

    if(numero > 10){
        numero++;
    }
    else{
        numero--;
        numero = numero +2;
    }
    
    document.getElementById("Resultado").innerHTML = numero;

}

function Restar(){
    if (numero < 10) {
        numero--;
    }
    else {
        numero++;
        numero = numero -2;
    }
    document.getElementById("Resultado").innerHTML = numero;
}