function PuedeConducir(){
    var edad = parseInt(document.getElementById("edad").value);
    var mensaje;
    if(edad > 100 || edad<0){
        mensaje = "No válido";
    }
    else{
        if (edad >= 18) 
        {
            mensaje = "Puedes conducir"
        }
        else
        {            
            mensaje = "No puedes conducir";                
        }
    }
    alert(mensaje);
}
   

