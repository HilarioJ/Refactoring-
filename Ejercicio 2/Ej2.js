const $PALABRAS = [
    document.getElementById("pal1"),
    document.getElementById("pal2"),
    document.getElementById("pal3"),
    document.getElementById("pal4")
]
function palabraMasCorta(){
    const palabras = $PALABRAS.map($PALABRA => $PALABRA.value)
    const tamannoPalabras = palabras.map(palabra => palabra.length)
    const tamannoMenor = Math.min(...tamannoPalabras)
    const palabraMasCorta = palabras.find(palabra => palabra.length === tamannoMenor)
    alert("La palabra más corta es: " + palabraMasCorta)
}