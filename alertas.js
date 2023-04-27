// JavaScript source code

function mostrarAlerta1() {
    var respuesta = confirm("Estas a punto de salir de la pagina de curriculum hacia un enlace externo.");
    if (respuesta == true) {
        window.location.href = "https://goo.gl/maps/3SUAcpw2iAcQVs5T6";
    } else {
    }
}

function mostrarAlerta2() {
    var respuesta = confirm("Estas a punto de salir de la pagina de curriculum hacia un enlace externo.");
    if (respuesta == true) {
        window.location.href = "mailto:azaliasanchez41@gmail.com?subject=Asunto";
    } else {
    }
}

function mostrarAlerta3() {
    var respuesta = confirm("Estas a punto de salir de la pagina de curriculum hacia un enlace externo.");
    if (respuesta == true) {
        window.location.href = "https://wa.me/qr/SIUGITA6WJTDA1";
    } else {
    }
}

function mostrarAlerta4() {
    var respuesta = confirm("Estas a punto de salir de la pagina de curriculum hacia un enlace externo.");
    if (respuesta == true) {
        window.location.href = "https://instagram.com/brooklyn_baby0012?igshid=ZDdkNTZiNTM=";
    } else {
    }
}

function mostrarAlerta5() {
    var respuesta = confirm("Estas a punto de salir de la pagina de curriculum hacia un enlace externo.");
    if (respuesta == true) {
        window.location.href = "https://www.facebook.com/azaliamargarita.riverassanchez?mibextid=ZbWKwL";
    } else {
    }
}

function mostrarInformacion() {
      var informacion = document.getElementById("informacion");
      if (informacion.style.display === "none") {
        informacion.style.display = "block";
      } else {
        informacion.style.display = "none";
      }
}
