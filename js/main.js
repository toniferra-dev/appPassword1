// 8 caracteres, texto, números y símbolos fáciles
// aleatorio

// Variable de salida - Variable Global
let password = "";
// Variable de historial de passwords
let historico = [];


function password_basic() {
    // Variables de contenido
    const abecedario = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolosFaciles = "!$%*()+-¿?¡.,;";

    const maxPass = 8;

    // Definir un bucle
    while (password.length < maxPass) {
        const todoContenido = abecedario + numeros + simbolosFaciles;
        password += todoContenido.charAt(Math.random() * todoContenido.length);
    }
    // Enviar contenido HTML a la etiqueta de HTML definida
    document.getElementById("texto__password").innerHTML = password;
}

// Llamada a la función cuando el HTMl se haya cargado totalmente
window.onload = function () {
    // Vaciar histórico
    historico = [];
    // crea el password
    password_basic();
    // En el histórico, llenamos el primer password
    historico.push(password);
};

// llamada a la función cuando hagamos un clic encima del button
let actualizar = document.getElementById("actualizar");

actualizar.addEventListener("click", function () {
    // Devolver la variable a nada
    password = "";
    // Llamada a la función
    password_basic();
    // Añadir el password a un array
    historico.push(password);
    // llamar a la función flechitas
    if (historico.length > 1) {
        // opacity 1, al boton derecho
        flechaDer.style.opacity = 1;
    }
});

// Control de histórico, con las dos flechas

    const flechaDer = document.getElementById("flechaDer");
    const flechaIzq = document.getElementById("flechaIzq");


        flechaDer.addEventListener("click", function (){
                password = historico.pop();
                document.getElementById("texto__password").innerHTML = password;

                if (historico.length == 1) {
                    // opacity 1, al boton derecho
                    flechaDer.style.opacity = 0.2;
                }
            })
        
    



// función cuando hagamos un clic encima del button, se debe copiar el password actual en el portapapeles
function portapapeles() {
    alert("El password ha sido copiado al portapapeles: " + password);
}

// crear una variable para insertar el nodo btncopiar
let copiar = document.getElementById("btncopiar");

copiar.addEventListener("click", function () {
    // llamar a la variable
    portapapeles();
});
