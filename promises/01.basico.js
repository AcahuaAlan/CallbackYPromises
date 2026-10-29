var miPromesa = new Promise(
    // Recibe un único argumento:
    //  Función ejecutadora (executor function)
    function(resolve, reject){
        // Cuerpo de la función ejecutadora
        var operacionExitosa = true;
        if (operacionExitosa){
            // Cambio de estado de la promesa de 'pending' a 'fulfilled'
            // y entrega el valor
            resolve('Los datos se procesaron correctamente');
        } else {
            // Cambio de estado de la promesa de 'pending' a 'rejected'
            // y entrega el motivo del fallo
            reject('Ocurrio un error al procesar los datos');
        }
    }
)

// then(); registra una función que se ejecutará cuando
// la promesa pase al estado 'fulfilled' (cumplida)

// catch(); registra una función que se ejecutará cuando
// la promesa pase al estado 'rejected' (rechazado)

miPromesa.then(
    function(mensajeRecibido){
        console.log("Resultado capturado en then(): " + mensajeRecibido);
    }).catch(
    function(motivoError){
        console.log("Error capturado en catch(): " + motivoError);
    }
)