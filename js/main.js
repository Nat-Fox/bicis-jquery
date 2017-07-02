function validateForm() {
    //función que valida que el contenido tenga a-z y A-Z
    //si tiene numeros da true
    function contenidoAlfa(data) {
        var expReg = /^[a-zA-Z ]+$/;
        if (!expReg.test(data)) {
            return true;
        }
    }

    //función para validar el correo
    function validarCorreo(correo) {
        var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!expRegCorreo.test(correo)) {
            return true;
        }
    }

    //función que valida la contraseña
    function password(pass) {
        var largoPass = pass.length;
        if (largoPass < 6 || pass == 'password' || pass == '123456' || pass == '098754') {
            return true;
        }
    }

    // Valores ingresados por el usuario
    var nameValue = $('#name').val();
    var lastNameValue = $('#lastname').val();
    var correo = $('#input-email').val();
    var pass = $('#input-password').val();

    // Validaciones para el nombre
    if (nameValue !== '') {
        if (contenidoAlfa(nameValue)) {
            $('#name').parent().append('<span>Solo se permiten letras</span>');
        }
    } else {
        $('#name').parent().append('<span>Debes ingresar tu nombre</span>');
    }


    // Validaciones para el apellido
    if (lastNameValue !== '') {
        if (contenidoAlfa(lastNameValue)) {
            $('#lastname').parent().append('<span>Solo se permiten letras</span>');
        }
    } else {
        $('#lastname').parent().append('<span>Debes ingresar tu apellido</span>');
    }


    // Validaciones para el correo
    if (correo !== '') {
        if (validarCorreo(correo)) {
            $('#input-email').parent().append('<span>Ingresa un correo valido. Ejem: name@domain.com</span>');
        }
    } else {
        $('#input-email').parent().append('<span>Debes ingresar tu correo</span>');
    }


    // Validaciones para la contraseña
    if (pass !== '') {
        if (password(pass)) {
            $('#input-password').parent().append('<span>Debes ingresar una contraseña más segura.</span>');
        }
    } else {
        $('#input-password').parent().append('<span>Debes ingresar tu contraseña</span>');
    }


}