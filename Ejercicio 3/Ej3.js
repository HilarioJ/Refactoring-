var n = 0;

function myFunction(){

    if(n > 10){
        n++;
    }
    else{
        n--;
        n = n +2;
    }
    
    document.getElementById("numero").innerHTML = n;

}

function myFunction2(){
    if (n < 10) {
        n--;
    }
    else {
        n++;
        n = n -2;
    }
    document.getElementById("numero").innerHTML = n;
}