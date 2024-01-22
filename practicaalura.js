let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('mensajeDeBienvenida');

//
alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

if (eleccion == numeroSecreto) {
    alert('Adivinaste');
} 

//javascript
let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia = contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}

//javascript

     

// 1  Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
  
alert ("Bienvenida y bienvenido a nuestro sitio web!");

// 2  Declara una variable llamada nombre y asígnale el valor "Luna".
var nombre = 'luna';

// 3  Crea una variable llamada edady asígnale el valor 25.
var edad = 25;

// 4  Establece una variable numeroDeVentas y asígnale el valor 50.
var numeroDeVentas = 50;

//5  Establece una variable saldoDisponible y asígnale el valor 1000.
var saldoDisponible = 1000;

//6  Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert ("¡Error! Completa todos los campos");

/*7  Declara una variable llamada mensajeDeError y asígnale el valor 
     "¡Error! Completa todos los campos". Ahora muestra una alerta con
      el valor de la variable mensajeDeError. */
var mensajeDeError = "¡Error! Completa todos los campos";
alert (mensajeDeError);

/* 8 Utiliza un prompt para preguntar el nombre del usuario y almacénalo
     en la variable nombre.*/
var nombre = prompt('Ingrese el nombre del usuario');

/* 9 Pide al usuario que ingrese su edad usando un prompt y almacénala
     en la variable edad.*/
var edad = prompt('Ingrese su edad');

/*10 Ahora, si la edad es mayor o igual a 18, muestra una alerta
     con el mensaje "¡Puedes obtener tu licencia de conducir!". */
var edad = prompt('Ingrese su edad');
if(edad>=18){
    alert ('¡Puedes obtener tu licencia de conducir!')
};

//Variables
//let numeroSecreto = 8;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor:');

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else{
    alert('Lo siento, no acertaste el número');
}

//Variables

let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

//let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto, 'y elegiste' + intento);
}

let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");

/*if (cantidadMillas > 530000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
} else {
    porcentajeDescuento = 0;
}
console.log('El descuento que tiene es: '+porcentajeDescuento); */
if (cantidadMillas > 30000) {
    porcentajeDescuento =porcentajeDescuento + 20;
} else{
    if (cantidadMillas > 5000){
    porcentajeDescuento = porcentajeDescuento +10;
    }
 }

console.log('El descuento que tiene es: ' + porcentajeDescuento);

// DESAFIOS

/* 1 Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado"
     o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra 
     "¡Buena semana!".*/
     let diaDelUsuario = prompt('¿Que día de la semana es?')
     if (diaDelUsuario == 'Sábado'){
         alert('Buen fin de semana');
     } else {
         if (diaDelUsuario == 'Domingo')
         alert('Buen fin de semana');
         else {
             alert('Buena semana')
         }
     }
     
     
     /* 2 Verifica si un número ingresado por el usuario es positivo o negativo.
          Muestra una alerta informativa. */
     
     let numeroComparado = prompt('Ingresa un número')    
     
     if (numeroComparado >= 0){
         alert('es un positivo')
     } else {
         alert('es un negativo')
     }
     /* 3 Crea un sistema de puntuación para un juego. Si la puntuación es mayor
          o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario,
          muestra "Intenta nuevamente para ganar." .*/
     let puntaje = prompt('Ingresa tu numero ganador');
     if (puntaje >=100) {
         alert('¡Felicidades has ganado!')
     } else {
         alert('Intenta nuevamente para ganar.')
     }
     
     
     /* 4 Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
          utilizando un template string para incluir el valor del saldo.*/
     let saldo = 500
     
     alert('Su saldo es: ' + saldo + ' Usd.');
     /* 5 Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra
          una alerta de bienvenida usando ese nombre. */
     
     let nombreUser = prompt('Ingrese su usuario');
     alert ('Bienvenido: ' + nombreUser);

     let contador = 1;
while (contador < 4){
    console.log('Ejecutando la iteración ' + contador);
    contador = contador + 1;
}








/*let numeroSecreto = 5;
let numeroPreguntador =0;
let intentos = 1;
let palabraveces = 'vez';
while(numeroPreguntador != numeroSecreto){
    numeroPreguntador = prompt('Me indicas un número entre 1 y 10 por favor:');
    
    //console.log(numeroPreguntador);
    if (numeroPreguntador == numeroSecreto){
        alert('Acertaste el numero secreto es: '+ numeroPreguntador + ' Lo hiciste en ' 
        + intentos + ' veces');
    }else {
        if (numeroPreguntador > numeroSecreto){
            alert('El número secreto es menor')
        } else {
            alert('El número secreto es mayor')
        }
        intentos = intentos + 1;

        console.log(intentos);
    }
}*/

let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador--;
}

let promedio = soma / qtdNumeros;

console.log(promedio);

/*1 Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'.
    Muestra cada número.*/
    let contador = 1;
    while (contador < 11){
        //console.log(contador); // se pone como comentario para no molestar el sgte codigo
        contador++;
    }
    
    /*2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.
        Muestra cada número. */
    let contamenos = 10;
    while (contamenos >= 0){
        //console.log(contamenos);
        contamenos--;
    }
    
    /*3 Crea un programa de cuenta progresiva. Pide un número
        y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la
        consola del navegador.*/
    let numeroFinal = prompt('ingresa tu numero');
    let numeroZero = 0;
    while (numeroZero <= numeroFinal){
        console.log(numeroZero);
        numeroZero++;
    
    }
    
    
    
    /*4 Crea un programa de cuenta progresiva. Pide un número y 
        cuenta desde 0 hasta ese número utilizando un bucle 'while'
        en la consola del navegador.*/
    /*let numeroFinal = prompt('ingresa tu numero');
    let numeroZero = 0;
    while (numeroZero <= numeroFinal){
        console.log(numeroZero);
        numeroZero++;
    
    }*/

     let numeroSecreto = Math.floor(Math.random()*10);
     let intentos = 0;
     while (intentos < 5){
     let intento = parseInt(prompt('ingrese un numero del 0 al 9'));
     intentos++;
     if (intento == numeroSecreto){
          alert(`¡Eso es Descrubriste el número secreto ${numeroSecreto}!`);
     }
     }
     /*
     let numeroSecreto = Math.floor(Math.random()*10);
     let intentos = 0;
     while (intentos < 5){
     let intento = parseInt(prompt('ingrese un numero del 0 al 9'));
     intentos++;
     if (intento == numeroSecreto){
          alert(`¡Eso es Descrubriste el número secreto ${numeroSecreto}!`);
     }
     }*/
