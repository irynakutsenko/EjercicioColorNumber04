let numero = parseInt(prompt("¿Itroduce un numero?"));
console.log(numero);

document.querySelector("#numero").innerHTML = numero;
if (numero < 100) {
    document.querySelector("#numero").style.color = "green";
} else if (numero > 100 && numero <= 200) {
    document.querySelector("#numero").style.color = "yellow";
} else if (numero > 200) {
    document.querySelector("#numero").style.color = "red";
}