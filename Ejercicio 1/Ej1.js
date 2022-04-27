function myFunction(){

    let n = document.getElementById("nombre").value;
    let a = document.getElementById("apellidos").value;
    let e = parseInt(document.getElementById("edad").value);
    let p  = document.getElementById("profesion").value;

    let s = "";
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            s += "Hola " + n + " "
        }
        else {
            if (i == 1) {
                s+= a
            }else if (i == 2) {
                s += "\n Tienes una edad de: " + e
            }else if (i == 3) {
                s+= "\n Y tu profesión es: " + p
            }
        }
        
    }
    

    alert(s);

}