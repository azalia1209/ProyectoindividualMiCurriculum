// JavaScript source code
window.onload = function () {
    var boton = document.getElementById("miBoton");
    boton.title = "Haz clic sobre este boton para regresar a la pagina de inicio";
}

function mostrarBienvenida() {
    document.getElementById("bienvenida").style.display = "block";
}

function cerrarBienvenida() {
    document.getElementById("bienvenida").style.display = "none";
}
