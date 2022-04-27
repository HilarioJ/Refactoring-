function Ejercicio4(){

let n = document.getElementById("pal1").value;

var v = "AEIOU";
var c = "aeiou";
var s = "";
var p = 0;

for (let i = 0; i < n.length; i++) {
    p = 0;
    for (let k = 0; k < v.length; k++) {
        if (n[i] == v[k]) {
            s += c[k];
            p++;
        }
        else{
            
            s+= "";
        }
        
    }
    
}

alert(s);

}