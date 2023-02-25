const textArea = document.querySelector(".text-2");
const textInput = document.querySelector(".text-input");
const resultado = document.querySelector(".text-back");
const boton = document.querySelector(".btn-copiar");

function btnencriptar(){
    const textoEncriptado = encriptar(textInput.value)
    resultado.value = textoEncriptado
    ocultarAdelante();
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function ocultarAdelante(){
    textArea.classList.add("ocultar");
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(textInput.value)
    resultado.value = textoEncriptado
}

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()//*Convertir a minuscula

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}
////Para copiar//////
boton.addEventListener("click", function (){
    resultado.select();

    navigator.clipboard.writeText(resultado.value);
})

///////////////