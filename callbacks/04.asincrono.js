//setTimeOut()
function notificardescarga(nombreArchivo){
    console.log(
        "Notificación : El archivo " +
        nombreArchivo + 
        "se ha descargado correctamente"
    );
}

function descargarArchivo(archivo, CallbackAlTerminar){
    console.log("01. Iniciando descarga de: " + archivo + "...");
    
    // Simulamos una demora de 3 segundos(3000 milisegundos)
    setTimeout(function(){
        CallbackAlTerminar(archivo);
    }, 3000);

}

descargarArchivo("manual_callback.pdf",notificardescarga)
console.log("03.El usuario puede seguir navegando en la pagina mientras se descarga");

