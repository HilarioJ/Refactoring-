function Ejercicio2(){

    let sumar = document.getElementById("pal1").value;
    let restar = document.getElementById("pal2").value;
    let multiplicar = document.getElementById("pal3").value;
    let dividir = document.getElementById("pal4").value;
    let illo = 0;
    let illo2 = 0;
    let m = sumar;
    for (let i = 0; i < sumar.length; i++) {
        illo++;
        
    }

    for (let i = 0; i < restar.length; i++) {
        illo2++;
        
    }

    if (illo > illo2 ) {
        m = restar;
        illo = illo2;
    }
    else{
        m = sumar;
    }

    illo2 = 0;

    for (let i = 0; i < multiplicar.length; i++) {
        illo2++;
        
    }

    if (illo > illo2 ) {
        m = multiplicar;
        illo = illo2;
    }

    illo2 = 0;
    for (let i = 0; i < dividir.length; i++) {
        illo2++;
        
    }

    if(illo > illo2){
        m = dividir;
    }

    alert("La palabra más corta es: " + m);




}