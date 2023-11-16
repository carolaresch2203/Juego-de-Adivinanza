let numeroAzar = Math.floor(Math.random() * 100 + 1);

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

function chequearResultado(){
    intentos ++;
    intento.textContent = intentos;
let numeroIngresado = parseInt(numeroEntrada.value);

if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
    mensaje.textContent = 'Por favor introduce un numero valido del 1 al 100';
    return;
}
if(numeroIngresado === numeroAzar){
    mensaje.textContent = 'Felicitaciones!! Has adivinado!!';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
}else if(numeroIngresado < numeroAzar){
    mensaje.textContent = 'Mas alto!!';
    mensaje.style.color = 'red';
}else{
    mensaje.textContent = 'Mas bajo!!';
    mensaje.style.color = 'blue';
}
}