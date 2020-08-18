function isPalindrome(word) {
    
    var texInput = word.value.toLowerCase().replace(/\s/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Reemplazamos tildes y acentos.
    textReverse=texInput.split("").reverse().toString();  // Transformamos el texto
    for (var i = 0; i < textReverse.length - 1; i++) { // Eliminamos separadores
       textReverse=textReverse.replace(",","");
    }    
    if(texInput==textReverse){  // Evaluamos si el resultado es idéntico.
        success();
    } else{
        failure();
    }
}

function success(){
    swal({
        title: "Excelente!",
        text: "La palabra que introduciste es un palíndromo!",
        icon: "success",
        button: "Aceptar",
    });
    word.value="";
}

function failure(){
    swal({
        title: "Oops!",
        text: "La palabra que introduciste NO es un palíndromo!",
        icon: "error",
        button: "Aceptar",
    });    
    word.value="";
}