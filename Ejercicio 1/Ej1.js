
function Saludar(){

    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);
    let profe  = document.getElementById("profesion").value;

    let s = "";
            s += "Hola " + nom + " " + ape
            s += "\nTienes una edad de: " + edad
            s += "\nY tu profesión es: " + profe

    alert(s);

}