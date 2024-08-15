
const textArea = document.querySelector(".text-area");

const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function encriptar(stringEncriptada){

    const regex = /[A-ZÁÉÍÓÚÑÜáéíóúñü]/;

    if (regex.test(textArea.value)) {
        alert("El texto no debe contener letras mayúsculas ni acentos.");
    }
    else{
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

            }
        }
        return stringEncriptada;
    }
    return "Nose pudo encriptar, intente denuevo";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }
    }
    return stringDesencriptada;
}


function copiarTexto(){
    const textarea = document.getElementById("miTexto");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
}