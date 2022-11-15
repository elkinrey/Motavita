// Ejercicio de caso 1
function validarTexto(){
    var texto = document.getElementById("Vcampo").value;
    var resultado = "2(4x-2y+6z)";
    const name = "<img src='/Imagenes/home.png'";
    if(texto == resultado){
        document.getElementById("info").innerHTML = "----Respuesta correcta---- :)"; 
        //document.getElementById("info").innerHTML = name;           
        return false;
    }else{
        document.getElementById("info").innerHTML = "----Respuesta incorrecta----";   
        return false;
    }
}

// Ejercicio caso 2
function validarTexto2(){
    var texto = document.getElementById("Vcampo").value;
    var resultado = "(xy+z^2)*(2x+y^2)";
    if(texto == resultado){
        document.getElementById("info").innerHTML = "----Respuesta correcta---- :)"; 
        return false;
    }else{
        document.getElementById("info").innerHTML = "----Respuesta incorrecta----";   
        return false;
    }
    
}

// Ejercicio caso 3
function validarTexto3(){
    var texto = document.getElementById("Vcampo").value;
    var resultado = "(xy+z^2)*(2x+y^2)";
    if(texto == resultado){
        document.getElementById("info").innerHTML = "----Respuesta correcta---- :)"; 
        return false;
    }else{
        document.getElementById("info").innerHTML = "----Respuesta incorrecta----";   
        return false;
    }
    
}
// Ejercicio de caso 4
function validarF(){
    var elemento1 = document.forms["miForm"]["checkb1"].checked;
    var elemento2 = document.forms["miForm"]["checkb2"].checked;
    var elemento3 = document.forms["miForm"]["checkb3"].checked;
    if(elemento1 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else if(elemento2 == true){
        document.getElementById("info").innerHTML = "* Respuesta correcta";
        return false;
    }else if(elemento3 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else{
        document.getElementById("info").innerHTML = "* Campos vacios";
        alert("Intente de nuevo :)");
        return false;
    }
   
}

// Ejercicio de caso 5
function validarTexto5(){
    var texto = document.getElementById("Vcampo").value;
    var resultado = "(xy+z^2)*(2x+y^2)";
    if(texto == resultado){
        document.getElementById("info").innerHTML = "----Respuesta correcta---- :)"; 
        return false;
    }else{
        document.getElementById("info").innerHTML = "----Respuesta incorrecta----";   
        return false;
    }
    
}

// Ejercicio de caso 6
function validarF6(){
    var elemento1 = document.forms["miForm"]["checkb1"].checked;
    var elemento2 = document.forms["miForm"]["checkb2"].checked;
    var elemento3 = document.forms["miForm"]["checkb3"].checked;
    if(elemento1 == true){
        document.getElementById("info").innerHTML = "* Respuesta correcta";
        return false;
    }else if(elemento2 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else if(elemento3 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else{
        document.getElementById("info").innerHTML = "* Campos vacios";
        alert("Intente de nuevo :)");
        return false;
    }
}

// Ejercicio de caso 7
function validarF7(){
    var elemento1 = document.forms["miForm"]["checkb1"].checked;
    var elemento2 = document.forms["miForm"]["checkb2"].checked;
    var elemento3 = document.forms["miForm"]["checkb3"].checked;
    if(elemento1 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else if(elemento2 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else if(elemento3 == true){
        document.getElementById("info").innerHTML = "* Respuesta correcta";
        return false;
    }else{
        document.getElementById("info").innerHTML = "* Campos vacios";
        alert("Intente de nuevo :)");
        return false;
    }
}

// Ejercicio de caso 8
function validarF8(){
    var elemento1 = document.forms["miForm"]["checkb1"].checked;
    var elemento2 = document.forms["miForm"]["checkb2"].checked;
    var elemento3 = document.forms["miForm"]["checkb3"].checked;
    if(elemento1 == true){
        document.getElementById("info").innerHTML = "* Respuesta correcta";
        return false;
    }else if(elemento2 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else if(elemento3 == true){
        document.getElementById("info").innerHTML = "* Respuesta incorrecta";
        return false;
    }else{
        document.getElementById("info").innerHTML = "* Campos vacios";
        alert("Intente de nuevo :)");
        return false;
    }
}
// Ejercicio de caso 9
function validarTexto9(){
    var texto = document.getElementById("Vcampo").value;
    var resultado = "(xy+z^2)*(2x+y^2)";
    if(texto == resultado){
        document.getElementById("info").innerHTML = "----Respuesta correcta---- :)"; 
        return false;
    }else{
        document.getElementById("info").innerHTML = "----Respuesta incorrecta----";   
        return false;
    }
    
}
// Ejercicio de caso 10
function validarTexto10(){
    var texto = document.getElementById("Vcampo").value;
    var resultado = "(xy+z^2)*(2x+y^2)";
    if(texto == resultado){
        document.getElementById("info").innerHTML = "----Respuesta correcta---- :)"; 
        return false;
    }else{
        document.getElementById("info").innerHTML = "----Respuesta incorrecta----";   
        return false;
    }
    
}

