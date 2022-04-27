function Ejercicio5(){

    var e = 18;

    var y = parseInt(document.getElementById("pal1").value);
    var s  ="";

    if(y > 100){
        s+= "No válido";
    }
    else if(y < 0){
        s += "No válido";
    }else{
        if (e < y) {
            s += "Puedes conducir"
        }
        else{
            if (e == y) {
                s+= "Puedes conducir"
            }
            else{
                if(e > y){
                    s+= "No puedes conducir";
                }
            }
        }
    }

    

    alert(s);

   

}