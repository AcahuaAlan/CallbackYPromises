//Definir la función que servira como callback
function despedirse() {
    console.log("Adiós, hemos terminado la clase");
}

// Declaramos la función principal que recibe
// una función como parametro
function iniciarProceso(miCallback) {
    console.log("Iniciando el proceso principal...");
    miCallback();
}

// Llamamos a la funcion principal
// pasando 'despedirse' SIN paréntesis
iniciarProceso(despedirse);
