TypeScript - JavaScript
Proporcionan interactividad a las páginas web y móbiles.

TypeScript -> Se transpila a JavaScript
JavaScript posee unh motor modelo de ejecución donde se
ejecuta nuestro código

Transpilar: Conversión de código fuente de un lenguaje de
alto nivel a otro, al misno nivel de abstracción.

El modelo de ejecución de Js es de un solo hilo principal
(single-threaded): solo se puede ejecutar una instrucción a
la vez en su hilo principal.

Operaciones síncronas: Las tareas se ejecutan una tras otra.
Operaciones asíncronas: Una tarea que se inicia ahora, pero 
cuyo resultado se obtendrá en el futuro.

Call Stack, CallBack Queue y Microtask Queue, Entorno  y Event 
Loop (Bluce de eventos)

1. CallBack (Llamada de Retorno): Es una función que se pasa
a otra como argumento con la intención de que la función 
receptora la invoque en algún momento de su propio cuerpo.

1. Declarar una función: Definimos que hace, pero aún no se
ejecuta.

2. Ivocar una función:Usamos paréntesis para que corra 
AHORA MISMO.

3. Pasar como ARGUMENTO una función: Usamos el nombre la 
función pero SIN parentésis, ya que la entregamos a otra
función para que ella decida cuándo usarla. 

ECMAScript (ES6) 2015
Promesas (Promise)
Es un objeto de JS, que representa la eventual finalización
( con un éxito o con un fracaso)de una operación asíncrona y
su valor resultante (Puede ser una promesa)

1. pendiente (pending)
2. cumplida (fulfilled)
3. rechazada (rejected)

1. Crear promesas: new Promise()
2. Consumir promesas: .then(), cath(), finall()
