function Ejercicio5(){
    var edad = parseInt(document.getElementById("pal1").value);
    var mensaje  ="";
    if(edad > 100 || edad<0){
        mensaje+= "No válido";
    }
    else{
        if (edad >= 18) 
        {
            mensaje+= "Puedes conducir"
        }
        else
        {            
            mensaje+= "No puedes conducir";                
        }
    }
    alert(mensaje);
}
   

