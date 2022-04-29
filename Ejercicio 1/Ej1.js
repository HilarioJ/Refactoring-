function MandarSaludo(){

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellidos").value;
    const edad = parseInt(document.getElementById("edad").value);
    const profesion  = document.getElementById("profesion").value;

    let saludar = "";
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            saludar += "Hola " + nombre + " "
        } 
        else if (i == 1) {
            saludar += apellido
        }
        else if (i == 2) {
            saludar += "\n Tienes una edad de: " + edad
        }
        else if (i == 3) {
            saludar += "\n Y tu profesión es: " + profesion
        }
        
    }

    alert(saludar);

}