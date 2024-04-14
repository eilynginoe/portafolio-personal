function btnValidarFormulario() {
    // Llamamos a las funciones de validación para cada campo del formulario
    var nombreValido = validarNombre();
    var emailValido = validarEmail();
    var asuntoValido = validarAsunto();
    var mensajeValido = validarMensaje();

     //Si todos los campos son válidos, el formulario se envía
    if (nombreValido && emailValido && asuntoValido && mensajeValido) {
            alert("El formulario se ha enviado correctamente.");
   }
}

function validarNombre() {
    var nombre = document.getElementById("nombre").value.trim();
    var errorNombre = document.getElementById("errorNombre");

    if (nombre === "") {
        errorNombre.textContent = "Por favor, ingrese su nombre.";
        return false;
    } else if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(nombre)) {
        errorNombre.textContent = "El nombre solo puede contener letras.";
        return false;
    } else {
        errorNombre.textContent = "";
        return true;
    }
}

function validarEmail() {
    var email = document.getElementById("email").value.trim();
    var errorEmail = document.getElementById("errorEmail");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        errorEmail.textContent = "Por favor, ingrese su correo electrónico.";
        return false;
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = "Por favor, ingrese un correo electrónico válido.";
        return false;
    } else {
        errorEmail.textContent = "";
        return true;
    }
}

function validarAsunto() {
    var asunto = document.getElementById("asunto").value.trim();
    var errorAsunto = document.getElementById("errorAsunto");

    if (asunto === "") {
        errorAsunto.textContent = "Por favor, ingrese el asunto.";
        return false;
    } else {
        errorAsunto.textContent = "";
        return true;
    }
}

const validarMensaje = () => {
    var mensaje = document.getElementById("mensagem").value.trim();
    var errorMensaje = document.getElementById("errorMensaje");

    if (mensaje === "") {
        errorMensaje.textContent = "Por favor, ingrese su mensaje.";
        return false;
    } else if (mensaje.length > 300) {
        errorMensaje.textContent = "El mensaje no debe exceder los 300 caracteres.";
        return false;
    } else {
        errorMensaje.textContent = "";
        return true;
    }
}


