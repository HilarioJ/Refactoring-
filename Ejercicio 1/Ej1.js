function myFunction(){

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);
    let profesion  = document.getElementById("profesion").value;

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
                s+= "\n Y tu profesión es: " + p
        }
        
    }
    

    alert(s);

}