let numeroSecreto;
let intentos;
const numeroMaximo = 10;
let listaNumerosSorteados = [];
condicionesIniciales();


function asignarTextoElemento(elemento, texto){
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    const numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `GANASTE en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroUsuario > numeroSecreto){            
            asignarTextoElemento("p", `El numero es menor`);
        }else{            
            asignarTextoElemento("p", `El numero es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value="";
    document.getElementById("valorUsuario").focus();
    return;
}

function reiniciarJuego(){
    //location.reload(); equivale a apretar f5
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del Número Secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto)
}

