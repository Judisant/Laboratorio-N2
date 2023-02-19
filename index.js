function validarNombre() {
    let valid=true;
    const inputName = document.getElementById("nombre");
    const contenedorError = document.getElementById("error-nombre");
    if (inputName.validity.patternMismatch) {
        contenedorError.innerText = "El nombre solo puede tener letras mayúsculas y minúsculas";
        inputName.style.backgroundImage = "url('images/error-icon.svg')";
        inputName.style.borderColor = "red";
        valid=false;
    } else if (inputName.validity.valueMissing) {
        contenedorError.innerText = "Rellene este campo";
        inputName.style.backgroundImage = "url('images/error-icon.svg')";
        inputName.style.borderColor = "red";
        valid=false;
    } else {
        contenedorError.innerText = "";
        inputName.style.backgroundImage = "url('images/success-icon.svg')";
        inputName.style.borderColor = "green";  
    }
    return valid;
};
function validarEmail() {
    let valid=true;
    const inputEmail = document.getElementById("email");
    const contenedorError = document.getElementById("error-email");
    if (inputEmail.validity.patternMismatch) {
        contenedorError.innerText = "Email inválido";
        inputEmail.style.backgroundImage = "url('images/error-icon.svg')";
        inputEmail.style.borderColor = "red";
        valid=false;
    } else if (inputEmail.validity.valueMissing) {
        contenedorError.innerText = "Rellene este campo";
        inputEmail.style.backgroundImage = "url('images/error-icon.svg')";
        inputEmail.style.borderColor = "red";
        valid=false;
    } else {
        contenedorError.innerText = "";
        inputEmail.style.backgroundImage = "url('images/success-icon.svg')";
        inputEmail.style.borderColor = "green";  
    }
    return valid;
};
function validarClave() {
    let valid=true;
    const inputClave = document.getElementById("clave");
    const inputConfirmation = document.getElementById("confirme-su-clave");
    const errorClave = document.getElementById("error-clave");
    const errorConfirmation = document.getElementById("error-confirmation");
    if (inputClave.value.length > 8) {
        errorClave.innerText = "No debe tener más de 8 caracteres";
        inputClave.style.backgroundImage = "url('images/error-icon.svg')";
        inputClave.style.borderColor = "red";
        valid=false;
    } else if (inputClave.validity.valueMissing) {
        errorClave.innerText = "Rellene este campo";
        inputClave.style.backgroundImage = "url('images/error-icon.svg')";
        inputClave.style.borderColor = "red";
        valid=false;
    } else {
        errorClave.innerText = "";
        inputClave.style.backgroundImage = "url('images/success-icon.svg')";
        inputClave.style.borderColor = "green";  
    }
    if (inputConfirmation.value != inputClave.value) {
        errorConfirmation.innerText = "Las contraseñas no coinciden";
        inputConfirmation.style.backgroundImage = "url('images/error-icon.svg')";
        inputConfirmation.style.borderColor = "red";
        valid=false;
    } else if (inputConfirmation.validity.valueMissing) {
        errorConfirmation.innerText = "Rellene este campo";
        inputConfirmation.style.backgroundImage = "url('images/error-icon.svg')";
        inputConfirmation.style.borderColor = "red";
        valid=false;
    } else {
        errorConfirmation.innerText = "";
        inputConfirmation.style.backgroundImage = "url('images/success-icon.svg')";
        inputConfirmation.style.borderColor = "green";  
    }
    return valid;
};
function validarButton() {
    const listaFunciones = [validarNombre(), validarEmail(), validarClave()];
    let valid=true;
    for (let index = 0; index < listaFunciones.length; index++) {
        const value = listaFunciones[index];
        if (!value) {
            valid=value;
        }
    }
    if (valid) {
        window.alert("La inscripción ha sido correcta");
    }
};