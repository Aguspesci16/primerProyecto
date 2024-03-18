inicializar();

function inicializar() {
    esconderDivs();
    precargaUsuarios();
    document.querySelector("#btnDerivarARegistro").addEventListener("click", btnDerivarARegistroHandler);
    document.querySelector("#btnVolverADivInicial").addEventListener("click", btnVolverADivInicialHandler);
    document.querySelector("#btnLogin").addEventListener("click", btnLoginHandler);
    document.querySelector("#btnRegistrarse").addEventListener("click", btnRegistrarseHandler);
    document.querySelector("#btnCerrarSesionLocal").addEventListener("click", btnCerrarSesionLocalHandler);
    document.querySelector("#btnCerrarSesionPersona").addEventListener("click", btnCerrarSesionPersonaHandler);
    document.querySelector("#btnDisponibilidadLocal").addEventListener("click", btnDisponibilidadLocalHandler);
    document.querySelector("#btnVolverDisponibilidadLocal").addEventListener("click", btnVolverDisponibilidadLocalHandler);
    document.querySelector("#btnReservasLocal").addEventListener("click", btnReservasLocalHandler);
    document.querySelector("#btnVolverReservasLocal").addEventListener("click", btnVolverReservasLocalHandler);
    document.querySelector("#btnCuposLocal").addEventListener("click", btnCuposLocalHandler);
    document.querySelector("#btnVolverCuposLocal").addEventListener("click", btnVolverCuposLocalHandler);
    document.querySelector("#btnEstadisticaLocal").addEventListener("click", btnEstadisticaLocalHandler);
    document.querySelector("#btnVolverEstadisticaLocal").addEventListener("click", btnVolverEstadisticaLocalHandler);
    document.querySelector("#btnSolicitarPersona").addEventListener("click", btnSolicitarPersonaHandler);
    document.querySelector("#btnVolverSolicitarPersona").addEventListener("click", btnVolverSolicitarPersonaHandler);
    document.querySelector("#btnVerReservaPersona").addEventListener("click", btnVerReservaPersonaHandler);
    document.querySelector("#btnVolverVerReservaPersona").addEventListener("click", btnVolverVerReservaPersonaHandler);
    document.querySelector("#btnCancelarReservaPersona").addEventListener("click", btnCancelarReservaPersonaHandler);
    document.querySelector("#btnVolverCancelarReservaPersona").addEventListener("click", btnVolverCancelarReservaPersonaHandler);
    document.querySelector("#btnEstadisticaPersona").addEventListener("click", btnEstadisticaPersonaHandler);
    document.querySelector("#btnVolverEstadisticaPersona").addEventListener("click", btnVolverEstadisticaPersonaHandler);
    document.querySelector("#btnCalificarPersona").addEventListener("click", btnCalificarPersonaHandler);
    document.querySelector("#btnVolverCalificarPersona").addEventListener("click", btnVolverCalificarPersonaHandler);
    document.querySelector("#btnHabilitarDeshabilitarReservasLocal").addEventListener("click", btnHabilitarDeshabilitarReservasLocalHandler);
    document.querySelector("#btnBuscarCliente").addEventListener("click", btnBuscarClienteHandler);
    document.querySelector("#btnModificarCupo").addEventListener("click", btnModificarCupoHandler); 
    document.querySelector("#btnMostrarPorcentajeDeOcupacion").addEventListener("click", btnMostrarPorcentajeDeOcupacionHandler); 
    document.querySelector("#btnMostrarPromedioDeCalificaciones").addEventListener("click", btnMostrarPromedioDeCalificacionesHandler); 
    document.querySelector("#btnMostrarTotalDeReservasRealizadas").addEventListener("click", btnMostrarTotalDeReservasRealizadasHandler); 
    document.querySelector("#btnMostrarMasReservasPersona").addEventListener("click", btnMostrarMasReservasPersonaHandler); 
    document.querySelector("#btnMostrarPorcentajeDeReservasPersona").addEventListener("click", btnMostrarPorcentajeDeReservasPersonaHandler); 
}

// Esconde todos los divs para que se vea solo el del inicio de sesión.
function esconderDivs() {
    document.querySelector("#divRegistro").style.display = "none";
    document.querySelector("#divMenuLocal").style.display = "none";
    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divDisponibilidadLocal").style.display = "none";
    document.querySelector("#divReservasLocal").style.display = "none";
    document.querySelector("#divCuposLocal").style.display = "none";
    document.querySelector("#divEstadisticaLocal").style.display = "none";
    document.querySelector("#divVerReservaPersona").style.display = "none";
    document.querySelector("#divCalificarPersona").style.display = "none";
    document.querySelector("#divSolicitarPersona").style.display = "none";
    document.querySelector("#divCancelarReservaPersona").style.display = "none";
    document.querySelector("#divEstadisticaPersona").style.display = "none";
    document.querySelector("#divTablaReservasLocal").style.display = "none";
}

// Lleva al usuario a la pantalla de registro.
function btnDerivarARegistroHandler() {
    document.querySelector("#divInicial").style.display = "none";
    document.querySelector("#divRegistro").style.display = "block";
    document.querySelector("#txtUsuarioLogin").value = "";
    document.querySelector("#txtContraseñaLogin").value = "";
    document.querySelector("#divCredencialesErroneas").innerHTML = "";
}

// Devuelve al usuario al inicio.
function btnVolverADivInicialHandler() {
    document.querySelector("#divInicial").style.display = "block";
    document.querySelector("#divRegistro").style.display = "none";
    document.querySelector("#divRegistroMensaje").innerHTML = "";
    vaciarCamposRegistro();
}

//Limpiar campos del registro.
function vaciarCamposRegistro () {
    document.querySelector("#txtNombreRegistro").value = "";
    document.querySelector("#txtUsuarioRegistro").value = "";
    document.querySelector("#txtContraseñaRegistro").value = "";
}

//Crea un usuario de tipo persona y lo agrega al array de personas.
function ingresarUsuarioPersona(nombreUsu, password, tipoUsu, nombrePersona) {
    let unUsuPersona = new UsuPersona (nombreUsu, password, tipoUsu, nombrePersona);
    console.log(`Usuario persona precargado con el id ${unUsuPersona.id}:`);
    if (validarDatosPrecargaPersona(nombreUsu, password, tipoUsu, nombrePersona)) {
        console.log("No hubieron errores.");
    }
    console.log("");
    usuariosPersona.push(unUsuPersona);
}

//Valida datos de la precarga de Usuarios persona.
function validarDatosPrecargaPersona(nombreUsu, password, tipoUsu, nombrePersona) {
    let valido = true;
    if (nombreUsu == "") {
        console.log ("El nombre de usuario no debe estar vacío.");
        if (valido) {
            valido = false;
        }
    }
    if (!contraseñaEsValida(password)) {
        console.log("La contraseña debe tener al menos 6 caracteres y contar con una mayúscula, una minúscula y un número.");
        if (valido) {
            valido = false;
        }
    }
    if (tipoUsu != "persona") {
        console.log("El tipo de usuario debe de ser persona.");
        if (valido) {
            valido = false;
        }
    }
    if (nombrePersona == "") {
        console.log("El nombre de la persona no debe estar vacío.");
        if (valido) {
            valido = false;
        }
    }
    return valido;
}

//Crea un usuario de tipo local y lo agrega al array de locales.
function ingresarUsuarioLocal(nombreUsu, password, tipoUsu, tipoLocal, direccion, cupoMax, cuposRestantes, foto, estado) {
    let unUsuLocal = new UsuLocal(nombreUsu, password, tipoUsu, tipoLocal, direccion, cupoMax, cuposRestantes, foto, estado);
    console.log(`Usuario local precargado con el id ${unUsuLocal.id}:`);
    if (validarDatosPrecargaLocal(nombreUsu, password, tipoUsu, tipoLocal, direccion, cupoMax, cuposRestantes, foto, estado)) {
        console.log("No hubieron errores.");
    }
    console.log("");
    usuariosLocal.push(unUsuLocal);
}

//Valida datos de la precarga de Usuarios local.
function validarDatosPrecargaLocal(nombreUsu, password, tipoUsu, tipoLocal, direccion, cupoMax, cuposRestantes, foto, estado) {
    let valido = true;
    if (nombreUsu == "") {
        console.log ("El nombre de usuario no debe estar vacío.");
        if (valido) {
            valido = false;
        }
    }
    if (!contraseñaEsValida(password)) {
        console.log("La contraseña debe tener al menos 6 caracteres y contar con una mayúscula, una minúscula y un número.");
        if (valido) {
            valido = false;
        }
    }
    if (tipoUsu != "local") {
        console.log("El tipo de usuario debe de ser local.");
        if (valido) {
            valido = false;
        }
    }
    if ((tipoLocal != "restaurante") && (tipoLocal != "teatro") && (tipoLocal != "museo")) {
        console.log("El tipo de usuario debe de ser restaurante, teatro o museo.");
        if (valido) {
            valido = false;
        }
    }
    if (direccion == "") {
        console.log("La dirección no debe estar vacío.");
        if (valido) {
            valido = false;
        }
    }
    if ((cupoMax < 1) || (cuposRestantes < 1) || (cupoMax != cuposRestantes)) {
        console.log("Los cupos restantes y máximos deben ser iguales y mayores o iguales a 1");
        if (valido) {
            valido = false;
        }
    }
    if ((foto != "img/foto1.jpg") && (foto != "img/foto2.jpg") && (foto != "img/foto3.jpg") && (foto != "img/foto4.jpg") && (foto != "img/foto5.jpg") && (foto != "img/foto6.jpg") && (foto != "img/foto7.jpg") && (foto != "img/foto8.jpg") && (foto != "img/foto9.jpg") && (foto != "img/foto10.jpg")) {
        console.log("La foto no existe");
        if (valido) {
            valido = false;
        }
    }
    if ((estado != "habilitado") && (estado != "deshabilitado")) {
        console.log ("El estado debe de ser habilitado o deshabilitado.");
        if (valido) {
            valido = false;
        }
    }
    return valido;
}

//Crea un una reserva y la agrega al array de reservas.
function ingresarReserva(nombreUsu, localReservado, cuposReservados, estado, calificacion) {
    let unaReserva = new Reservas(nombreUsu, localReservado, cuposReservados, estado, calificacion);
    console.log(`La reserva precargada con el id ${unaReserva.id}:`);
    if (validarDatosPrecargaReserva(nombreUsu, localReservado, cuposReservados, estado, calificacion)) {
        console.log("No hubieron errores.");
    }
    console.log("");
    reservasPersona.push(unaReserva);
    let posicionLocal = buscarUsuarioEnArray(usuariosLocal, localReservado);
    if (estado == "pendiente") {
        usuariosLocal[posicionLocal].cuposRestantes -= cuposReservados;
    }
}

//Valida datos de la precarga de Reserva.
function validarDatosPrecargaReserva(nombreUsu, localReservado, cuposReservados, estado, calificacion) {
    let valido = true;
    if (buscarUsuarioEnArray(usuariosPersona, nombreUsu) == -1) {
        console.log ("No existe una persona con ese nombre de usuario.");
        if (valido) {
            valido = false;
        }
    }
    if (buscarUsuarioEnArray(usuariosLocal, localReservado) == -1) {
        console.log ("No existe un local con ese nombre.");
        if (valido) {
            valido = false;
        }
    }
    if (cuposReservados < 1) {
        console.log ("Se deben reservar 1 o más cupos.");
        if (valido) {
            valido = false;
        }
    }
    if ((estado != "pendiente") && (estado != "finalizada") && (estado != "cancelada")) {
        console.log ("El estado de las reservas debe estar en pendiente, finalizada o cancelada");
        if (valido) {
            valido = false;
        }
    }
    if ((calificacion < 0) || (calificacion > 5)) {  
        console.log ("La calificación inicial debe estar entre 0 y 5.");
        if (valido) {
            valido = false;
        }
    }
    return valido;
}

//Hace todas las precargas necesarias de personas, locales y reservas.
function precargaUsuarios() {
    ingresarUsuarioPersona ("Juanchi", "Juan123", "persona", "Juan");
    ingresarUsuarioPersona ("PedrinhoBR", "Pedro123", "persona", "Pedro");
    ingresarUsuarioPersona ("LorenaPerez", "Lorena123", "persona", "Lorena");
    ingresarUsuarioPersona ("Lukitas2003", "Lucas123", "persona", "Lucas");
    ingresarUsuarioPersona ("MagicalGirl", "Lucy123", "persona", "Lucía");
    ingresarUsuarioPersona ("NachoLibre", "Nacho123", "persona", "Ignacio");
    ingresarUsuarioPersona ("DiegoPocas", "Diego123", "persona", "Diego");
    ingresarUsuarioPersona ("RomualdoUmpi", "Romualdo123", "persona", "Romualdo");
    ingresarUsuarioPersona ("KaterineRosa", "Katerine123", "persona", "Katerine");

    ingresarUsuarioLocal ("PepeLoco", "Pepe123", "local", "restaurante", "Av. 8 de Octubre 281", 200, 200, "img/foto4.jpg", "habilitado");
    ingresarUsuarioLocal ("ParrillaCentral", "Parrilla123", "local", "restaurante", "Bvar. Artigas 3613", 200, 200, "img/foto5.jpg", "habilitado");
    ingresarUsuarioLocal ("BarCubaLibre", "CubaLibre123", "local", "restaurante", "Alfredo Baldomir 1991", 150, 150, "img/foto6.jpg", "habilitado");
    
    ingresarUsuarioLocal ("Llanto y Sonrisa", "Llanto123", "local", "teatro", "Canelones 2344", 750, 750, "img/foto1.jpg", "habilitado");
    ingresarUsuarioLocal ("Malfato", "Malfato123", "local", "teatro", "Rivadavia 755", 1000, 1000, "img/foto3.jpg", "habilitado");
    ingresarUsuarioLocal ("Solis", "Solis123", "local", "teatro", "Solis 2024", 850, 850, "img/foto8.jpg", "habilitado");
    
    ingresarUsuarioLocal ("Historico", "Historico123", "local", "museo", "Av. Siempre Viva 123", 200, 200, "img/foto2.jpg", "habilitado");
    ingresarUsuarioLocal ("Precolombino", "Precolombino123", "local", "museo", "Mataojo 1244", 250, 250, "img/foto10.jpg", "habilitado");
    ingresarUsuarioLocal ("Moderno", "Moderno123", "local", "museo", " Ejido 4263", 300, 300, "img/foto9.jpg", "habilitado");
    ingresarUsuarioLocal ("Fotografico", "Fotografico123", "local", "museo", "Av. Sacafoto 443", 280, 280, "img/foto7.jpg", "habilitado");

    ingresarReserva("Juanchi", "PepeLoco", 7, "pendiente", "0");
    ingresarReserva("PedrinhoBR", "ParrillaCentral", 10, "pendiente", "0");
    ingresarReserva("LorenaPerez", "BarCubaLibre", 22, "pendiente", "0");
    ingresarReserva("Lukitas2003", "Llanto y Sonrisa", 4, "finalizada", "0");
    ingresarReserva("Lukitas2003", "Malfato", 16, "pendiente", "0");
    ingresarReserva("MagicalGirl", "Solis", 11, "finalizada", "0");
    ingresarReserva("MagicalGirl", "Historico", 3, "pendiente", "0");
    ingresarReserva("RomualdoUmpi", "Fotografico", 17, "finalizada", "0");
    ingresarReserva("RomualdoUmpi", "Precolombino", 5, "pendiente", "0");
    
    ingresarReserva("Juanchi", "Precolombino", 18, "finalizada", "0");
    ingresarReserva("LorenaPerez", "Moderno", 12, "pendiente", "0");
    ingresarReserva("MagicalGirl", "Fotografico", 1, "cancelada", "0");
    ingresarReserva("PedrinhoBR", "PepeLoco", 14, "cancelada", "0");

    ingresarReserva("Juanchi", "PepeLoco", 3, "finalizada", "2");
    ingresarReserva("PedrinhoBR", "ParrillaCentral", 10, "finalizada", "3");
    ingresarReserva("LorenaPerez", "BarCubaLibre", 2, "finalizada", "2");
    ingresarReserva("RomualdoUmpi", "Llanto y Sonrisa", 4, "finalizada", "4");
    ingresarReserva("Lukitas2003", "Malfato", 6, "finalizada", "5");
    ingresarReserva("RomualdoUmpi", "Solis", 8, "finalizada", "3");
    ingresarReserva("MagicalGirl", "Historico", 3, "finalizada", "5");
    ingresarReserva("PedrinhoBR", "Fotografico", 4, "finalizada", "4");
    ingresarReserva("RomualdoUmpi", "Precolombino", 5, "finalizada", "1");
    ingresarReserva("Juanchi", "PepeLoco", 7, "finalizada", "2");
    ingresarReserva("PedrinhoBR", "ParrillaCentral", 10, "finalizada", "1");
    ingresarReserva("LorenaPerez", "Moderno", 14, "finalizada", "5");
    ingresarReserva("RomualdoUmpi", "Llanto y Sonrisa", 4, "finalizada", "4");
    ingresarReserva("Lukitas2003", "Malfato", 12, "finalizada", "2");
    ingresarReserva("RomualdoUmpi", "Solis", 11, "finalizada", "5");
    ingresarReserva("MagicalGirl", "Historico", 2, "finalizada", "4");
    ingresarReserva("RomualdoUmpi", "Precolombino", 2, "finalizada", "2");
}


/*************************
 
    LOGIN Y REGISTRO

*************************/


//Lógica del login.
function btnLoginHandler() { 
    let mensaje = "";
    let usuarioIngresado = document.querySelector("#txtUsuarioLogin").value;
    let passwordIngresado = document.querySelector("#txtContraseñaLogin").value;
    let posUsuEncontrada = -1;
    let usuEncontradoEn = [];
    // Busca en los dos arreglos de Usuario Persona y Local, y si no encuentra el usuario en ninguno, entonces, devuelve un mensaje de error
    if (buscarUsuarioEnArray(usuariosPersona, usuarioIngresado) != -1) {
        posUsuEncontrada = buscarUsuarioEnArray(usuariosPersona, usuarioIngresado);
        usuEncontradoEn = usuariosPersona;
    } else if (buscarUsuarioEnArray(usuariosLocal, usuarioIngresado) != -1) {
        posUsuEncontrada = buscarUsuarioEnArray(usuariosLocal, usuarioIngresado);
        usuEncontradoEn = usuariosLocal;
    } else {
        mensaje = "El usuario no existe."
    }
    // Si encontró un usuario entonces verifica la contraseña y según el tipo de usuario muestra el menú correspondiente
    if (posUsuEncontrada > -1) {
        if (usuEncontradoEn[posUsuEncontrada].password == passwordIngresado) {
            if (usuEncontradoEn[posUsuEncontrada].tipoUsu == "persona"){
                mostrarMenuPersona();
                document.querySelector("#divBienvenidaPersona").innerHTML = "¡Bienvenido/a " + usuEncontradoEn[posUsuEncontrada].nombrePersona + "!";
                usuarioLogueado = usuariosPersona[posUsuEncontrada];
            } else {
                mostrarMenuLocal();
                usuarioLogueado = usuariosLocal[posUsuEncontrada];
            }
        } else {
            mensaje = "Contraseña incorrecta";
        }
    } 
    document.querySelector("#divCredencialesErroneas").innerHTML = mensaje;
}

//Lógica del Registrarse.
function btnRegistrarseHandler() { 
    let mensaje = "";
    let tipoUsu = "persona";
    let nombreIngresado = document.querySelector("#txtNombreRegistro").value; 
    let usuarioIngresado = document.querySelector("#txtUsuarioRegistro").value;
    let passwordIngresado = document.querySelector("#txtContraseñaRegistro").value;
    //Verifica que nombre y nombre de usuario no esten vacíos
    if (nombreIngresado.length == 0) {
        mensaje = "Por favor ingrese un nombre.";
    } else if (usuarioIngresado.length == 0) {
        mensaje = "Por favor ingrese un nombre de usuario.";
    } else {
        let posicionUsuariosPersona = buscarUsuarioEnArray(usuariosPersona, usuarioIngresado);
        let posicionUsuariosLocal = buscarUsuarioEnArray(usuariosLocal, usuarioIngresado);

        //Verifica que el nombre de usuario no este en uso en la aplicación
        if ((posicionUsuariosPersona == -1) && (posicionUsuariosLocal == -1)) { 
            if (contraseñaEsValida(passwordIngresado)) { //Valida la contraseña
                ingresarUsuarioPersona(usuarioIngresado, passwordIngresado, tipoUsu, nombreIngresado);
                mensaje = "Usuario registrado";
                vaciarCamposRegistro();
            } else {
                mensaje = "La contraseña debe tener al menos 6 caracteres y contar con una mayúscula, una minúscula y un número."
            }
        } else {
            mensaje = "El usuario ya existe";
        }
    }
    document.querySelector("#divRegistroMensaje").innerHTML = mensaje;
}

//Devuelve la posición de "usuario" en el array de usuarios.
function buscarUsuarioEnArray (arrayUsuarios, usuario) {
    let resultado = -1;
    let i = 0;
    while ((resultado == -1) && (i < arrayUsuarios.length)) {
        if (arrayUsuarios[i].nombreUsu == usuario) {
            resultado = i;
        }
        i++;
    }
    return resultado;
}

//Verifica si la contraseña "pass" es válida (si contiene al menos 6 caracteres, un número, una mayúscula y una minúscula).
function contraseñaEsValida(pass) {
    let valida = false;
    if (pass.length >= 6) {
        let tieneNumero = false;
        let tieneMinus = false;
        let tieneMayus = false;
        let i = 0;
        //Recorre la contraseña hasta que se hayan cumplido las 3 condiciones o se termine de recorrer.
        //Para cada caracter, compara con los respectivos caracteres de la tabla ASCII     
        while ((!tieneNumero || !tieneMinus || !tieneMayus) && (i < pass.length)) {
            if ((pass.charCodeAt(i) > 47) && (pass.charCodeAt(i) < 58)) {
                tieneNumero = true;
            }
            if ((pass.charCodeAt(i) > 96) && (pass.charCodeAt(i) < 123)) {
                tieneMinus = true;
            }
            if ((pass.charCodeAt(i) > 64) && (pass.charCodeAt(i) < 91)) {
                tieneMayus = true;
            }
            i++;
        }
    if (tieneNumero && tieneMayus && tieneMinus) {
        valida = true;
    }
    }
    return valida;
}

// Muestra el menu con las funcionalidades de los usuarios local.
function mostrarMenuLocal () {
    document.querySelector("#divMenuLocal").style.display = "block";
    document.querySelector("#divInicial").style.display = "none";
}

// Muestra el menu con las funcionalidades de los usuarios persona.
function mostrarMenuPersona () {
    document.querySelector("#divMenuPersona").style.display = "block";
    document.querySelector("#divInicial").style.display = "none";
}

// Cierra la sesión de cuenta local y vuelve al inicio.
function btnCerrarSesionLocalHandler() {
    document.querySelector("#divMenuLocal").style.display = "none";
    document.querySelector("#divInicial").style.display = "block";
    document.querySelector("#txtUsuarioLogin").value = "";
    document.querySelector("#txtContraseñaLogin").value = "";
}

// Cierra la sesión de cuenta persona y vuelve al inicio.
function btnCerrarSesionPersonaHandler() {
    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divInicial").style.display = "block";
    document.querySelector("#txtUsuarioLogin").value = "";
    document.querySelector("#txtContraseñaLogin").value = "";
}


/*************************
 
 FUNCIONALIDADES LOCAL

*************************/


// Entra al divDisponibilidadLocal y esconde el menu local.
function btnDisponibilidadLocalHandler() {
    if (usuarioLogueado.cuposRestantes == 0) {
        document.querySelector("#btnHabilitarDeshabilitarReservasLocal").disabled = true;
        usuarioLogueado.estado = "deshabilitado";
    }
    document.querySelector("#divCuposRestantes").innerHTML = "El local tiene " + usuarioLogueado.cupoMax + " cupos máximos.<br>" + "Quedan " + usuarioLogueado.cuposRestantes + " cupos restantes.";
    document.querySelector("#divReservasHabilitadasLocal").innerHTML = "Estado de las reservas: " + usuarioLogueado.estado + "."; 
    document.querySelector("#divMenuLocal").style.display = "none";
    document.querySelector("#divDisponibilidadLocal").style.display = "block";
}

// Se presiona para deshabilitar o habilitar las reservas del local.
function btnHabilitarDeshabilitarReservasLocalHandler() {
    if (usuarioLogueado.estado == "habilitado") {
        usuarioLogueado.estado = "deshabilitado";
    } else {
        usuarioLogueado.estado = "habilitado";
    }
    document.querySelector("#divReservasHabilitadasLocal").innerHTML = "Estado de las reservas: " + usuarioLogueado.estado + "."; 
}

// Vuelve de divDisponibilidadLocal al menu local.
function btnVolverDisponibilidadLocalHandler() {
    document.querySelector("#divMenuLocal").style.display = "block";
    document.querySelector("#divDisponibilidadLocal").style.display = "none";
}

//Entra al divReservasLocal y esconde el menu local.
function btnReservasLocalHandler() {
    document.querySelector("#divMensajeFinalReservasLocalError").style.display = "none";
    document.querySelector("#divTablaReservasLocal").style.display = "none";
    document.querySelector("#divMenuLocal").style.display = "none";
    document.querySelector("#divReservasLocal").style.display = "block";
}

// Vuelve de divReservasLocal al menu local.
function btnVolverReservasLocalHandler() {
    document.querySelector("#divMenuLocal").style.display = "block";
    document.querySelector("#divMensajeFinalReservasLocalError").style.display = "none";
    document.querySelector("#divReservasLocal").style.display = "none";
    document.querySelector("#divMensajeFinalReservasLocal").style.display = "none";
    document.querySelector("#divTablaReservasLocal").style.display = "none";
}

//Presionado luego de escribir el nombre del cliente buscado.
function btnBuscarClienteHandler() {
    document.querySelector("#divMensajeFinalReservasLocalError").style.display = "none";
    document.querySelector("#divMensajeFinalReservasLocal").style.display = "none";
    document.querySelector("#divTablaReservasLocal").style.display = "none";
    let busqueda = document.querySelector("#txtBuscarCliente").value;
    let tabla = completarTablaBuscarCliente(busqueda);
    if (tabla == '') {
        document.querySelector("#divMensajeFinalReservasLocalError").style.display = "block";
    } else {
        document.querySelector("#divTablaReservasLocal").style.display = "block";
        document.querySelector("#tablaReservasLocalUsuariosEncontrados").innerHTML = tabla;
        let arrayDeBotones = document.querySelectorAll(".btnFinalizarReserva");
        for (let i = 0; i < arrayDeBotones.length; i++) {
            let botonActual = arrayDeBotones[i];
            botonActual.addEventListener("click", btnFinalizarReservaHandler);
        }
    }
}

//Tabla que se genera con todas las reservas pendientes del cliente buscado.
function completarTablaBuscarCliente(texto) {
    let tablaGenerada = '';
    for (i = 0; i < usuariosPersona.length; i++) {
        //Entra si hay una reserva pendiente del usuario persona actual en el local logueado
        if (verificarSiReservo(usuariosPersona[i].nombreUsu, i)) {
            let reserva = buscarReservaHecha(usuariosPersona[i].nombreUsu, usuarioLogueado.nombreUsu);
            contador = 0;
            contador2 = 0;
            let coincide = false;
            while (!coincide && (contador < usuariosPersona[i].nombrePersona.length)) { // Se fija si la busqueda es subcadena del nombre.
                if (texto[contador2] == usuariosPersona[i].nombrePersona[contador]) {
                    contador2++;
                } else {
                    contador2 = 0;
                }
                if (contador2 == texto.length) {
                    coincide = true;
                }
                contador++;
            }
            if (coincide) { // Si es subcadena la agrega a la tabla.
                tablaGenerada += `
                                    <tr>
                                        <td>
                                            ${usuariosPersona[i].nombrePersona}
                                        </td>
                                        <td>
                                            ${usuariosPersona[i].nombreUsu}
                                        </td>
                                        <td>
                                            ${reserva.estado}
                                        </td>
                                        <td>
                                            <input data_reserva="${reserva.id}" type="button" value="Finalizar" class="btnFinalizarReserva">
                                        </td>
                                    </tr>
                `;
            }
        }
    }
    return tablaGenerada;
}

//Devuelve el objeto de la reserva pendiente hecha por usuario en local (después de haber verificado que efectivamente tiene una).
function buscarReservaHecha(usuario, local) {
    let i = 0;
    let encontrada = false;
    let reservaDevuelta = {};
    while ((!encontrada) && (i < reservasPersona.length)) {
        let reservaActual = reservasPersona[i];
        if ((reservaActual.nombreUsu == usuario) && (reservaActual.localReservado == local) && (reservaActual.estado == "pendiente")) {
            encontrada = true;
            reservaDevuelta = reservaActual;
        }
        i++;
    }
    return reservaDevuelta;
}

//Busca si existe una reserva hecha por "usuario", si esa reserva es para el local logueado y si está en estado pendiente.
function verificarSiReservo(usuario, indice) {
    let reservo = false;
    while (!reservo && (indice < reservasPersona.length)) {
        if (reservasPersona[indice].nombreUsu == usuario) {
            if (usuarioLogueado.nombreUsu == reservasPersona[indice].localReservado) {
                if(reservasPersona[indice].estado == "pendiente") {
                    reservo = true;
                }
            }
        }
        indice++;
    }
    return reservo;
}

//Se hace al apretar un botón de finalizar en la tabla de usuarios encontrados por la búsqueda
function btnFinalizarReservaHandler() {
    let idReserva = this.getAttribute("data_reserva"); 
    let i = 0;
    let encontro = false;
    //Busca la reserva pendiente por su id y si coincide con el id del botón le cambia su atributo de estado a "finalizada".
    while (!encontro && (i < reservasPersona.length)) {
        let reservaEncontrada = reservasPersona[i];
        if (reservaEncontrada.id == idReserva){
            encontro = true;
            reservaEncontrada.estado = "finalizada";
            let posicionLocal = buscarUsuarioEnArray(usuariosLocal, reservaEncontrada.localReservado);
            //También devuelve los cupos reservados
            usuariosLocal[posicionLocal].cuposRestantes += reservaEncontrada.cuposReservados;
        }
        i++;
    }
    btnBuscarClienteHandler();
}

//Entra al divCuposLocal y esconde el menu local.
function btnCuposLocalHandler() {
    document.querySelector("#divMensajeCuposIncorrectos").innerHTML = "";
    document.querySelector("#divMenuLocal").style.display = "none";
    document.querySelector("#divCuposLocal").style.display = "block";
    document.querySelector("#txtModificarCupo").value = "";
    if ((usuarioLogueado.cupoMax > 0) && (usuarioLogueado.cuposRestantes > 0)) {
        document.querySelector("#divCuposLocalActual").innerHTML = "El cupo máximo actual es de " + usuarioLogueado.cupoMax + " lugares.";
    } else {
        document.querySelector("#divCuposLocalActual").innerHTML = "El local actual no tiene cupos disponibles.";
        document.querySelector("#btnModificarCupo").disabled = true;
    }
}

//Si el local no tiene reservas pendientes cambia el cupo máximo por nuevoCupo.
function btnModificarCupoHandler() {
    let nuevoCupo = parseInt(document.querySelector("#txtModificarCupo").value);
    if ((nuevoCupo >= 0) && (!isNaN(nuevoCupo))) {
        if (!tieneReservasPendientes(usuarioLogueado.nombreUsu)){
            if (nuevoCupo > usuarioLogueado.cupoMax) {
                usuarioLogueado.cuposRestantes += (nuevoCupo - usuarioLogueado.cupoMax);
            } else {
                usuarioLogueado.cuposRestantes -= (usuarioLogueado.cupoMax - nuevoCupo);
            }
            usuarioLogueado.cupoMax = nuevoCupo;
        } else {
            document.querySelector("#divMensajeCuposIncorrectos").innerHTML = "El local tiene reservas pendientes.";
        }
    } else {
        document.querySelector("#divMensajeCuposIncorrectos").innerHTML = "La cantidad de cupos debe ser mayor o igual a cero."
    }
    document.querySelector("#divCuposLocalActual").innerHTML = "El cupo máximo actual es de " + usuarioLogueado.cupoMax + " lugares.";
    if (usuarioLogueado.cupoMax == 0) {
        document.querySelector("#btnModificarCupo").disabled = true;
    }
    document.querySelector("#txtModificarCupo").value = "";
}

// Busca si hay alguna reserva en estado "pendiente" hecha en "local"
function tieneReservasPendientes(local) {
    let encontrada = false;
    let i = 0;
    while (!encontrada && (i < reservasPersona.length)) {
        reservaActual = reservasPersona[i];
        if ((reservaActual.localReservado == local) && (reservaActual.estado == "pendiente")) {
            encontrada = true;
        }
        i++;
    }
    return encontrada;
}

// Vuelve de divCuposLocal al menu local.
function btnVolverCuposLocalHandler() {
    document.querySelector("#divMenuLocal").style.display = "block";
    document.querySelector("#divCuposLocal").style.display = "none";
    document.querySelector("#divMensajeCuposIncorrectos").innerHTML = "";
}

//Entra al divEstadisticaLocal y esconde el menu local.
function btnEstadisticaLocalHandler() {
    document.querySelector("#divPorcentajeDeOcupacion").style.display = "none";
    document.querySelector("#divPromedioDeCalificaciones").style.display = "none";
    document.querySelector("#divTotalDeReservasRealizadas").style.display = "none";

    document.querySelector("#divMenuLocal").style.display = "none";
    document.querySelector("#divEstadisticaLocal").style.display = "block";
}

//Botón que al presionarse muestra el porcentaje de ocupación del local.
function btnMostrarPorcentajeDeOcupacionHandler() {
    document.querySelector("#divPorcentajeDeOcupacion").style.display = "block";
    document.querySelector("#divPromedioDeCalificaciones").style.display = "none";
    document.querySelector("#divTotalDeReservasRealizadas").style.display = "none";
    let porcentajeDeOcupacion = 0;
    let reservasParaElLocal = 0;
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if ((reservaActual.localReservado == usuarioLogueado.nombreUsu) && (reservaActual.estado == "pendiente")) {
            reservasParaElLocal += reservaActual.cuposReservados;
        }
    }
    porcentajeDeOcupacion = (reservasParaElLocal * 100) / usuarioLogueado.cupoMax;
    let porcentajeDeOcupacionParseado = parseFloat(Number(porcentajeDeOcupacion).toFixed(1));
    document.querySelector("#divPorcentajeDeOcupacion").innerHTML = "El porcentaje de ocupación del local es de " + porcentajeDeOcupacionParseado + "%";
}

//Botón que al presionarse muestra los promedios de calificaciones.
function btnMostrarPromedioDeCalificacionesHandler() {
    let tabla = generarTablaPromedioDeCalificaciones();
    document.querySelector("#tablaPromedioDeCalificaciones").innerHTML = tabla;
    mostrarPromedioDeLocalPropio();
    document.querySelector("#divPorcentajeDeOcupacion").style.display = "none";
    document.querySelector("#divPromedioDeCalificaciones").style.display = "block";
    document.querySelector("#divTotalDeReservasRealizadas").style.display = "none";
}

//Muestra el promedio solamente del local que está logueado en un div.
function mostrarPromedioDeLocalPropio() {
    let promedio = 0;
    let cantidadReservas = 0;
    let sumaCalificaciones = 0;
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if ((reservaActual.localReservado == usuarioLogueado.nombreUsu) && (reservaActual.calificacion != 0)) {
            cantidadReservas++;
            sumaCalificaciones += parseInt(reservaActual.calificacion);
        }
    }
    if (cantidadReservas > 0) {
        promedio = sumaCalificaciones / cantidadReservas;
        document.querySelector("#mensajePromedioDeCalificaciones").innerHTML = "Su local, " + usuarioLogueado.nombreUsu + ", tiene un promedio de calificaciones de: " + promedio;
    } else {
        document.querySelector("#mensajePromedioDeCalificaciones").innerHTML = "Su local no tiene calificaciones realizadas.";
    }
}

//Genera una tabla que muestra el promedio de las calificaciones de todos los locales, incluido el propio
function generarTablaPromedioDeCalificaciones() {
    let tablaGenerada = "";
    let varPromedio;
    for (let i = 0; i < usuariosLocal.length; i++) {
        let localActual = usuariosLocal[i];
        let promedio = hacerPromedioDeCalificaciones(localActual);
        if (promedio != 0) {
            varPromedio = promedio;
        } else {
            varPromedio = "El local no tiene calificaciones.";
        }
        tablaGenerada += `
            <tr>
                <td>
                    ${localActual.nombreUsu}
                </td>
                <td>
                    ${varPromedio}
                </td>
            </tr>
            `;
        }
    return tablaGenerada;
}

//Realiza el promedio de las calificaciones de "local".
function hacerPromedioDeCalificaciones(local) {
    let sumaCalificaciones = 0;
    let cantidadReservas = 0;
    let promedio = 0;
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if ((reservaActual.localReservado == local.nombreUsu) && (reservaActual.calificacion != 0)) {
            cantidadReservas++;
            sumaCalificaciones += parseInt(reservaActual.calificacion);
        }
    }
    if (cantidadReservas > 0) {
        promedio = sumaCalificaciones / cantidadReservas;  
    }
    return promedio;
}

//Muestra el total de reservas realizadas en el local, exceptuando las canceladas.
function btnMostrarTotalDeReservasRealizadasHandler() {
    document.querySelector("#divPorcentajeDeOcupacion").style.display = "none";
    document.querySelector("#divPromedioDeCalificaciones").style.display = "none";
    document.querySelector("#divTotalDeReservasRealizadas").style.display = "block";
    let totalReservas = 0;
    let reservasFinalizadas = 0;
    let reservasPendientes = 0;
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if ((reservaActual.localReservado == usuarioLogueado.nombreUsu) && (reservaActual.estado != "cancelada")) {
            totalReservas++;
            if (reservaActual.estado == "pendiente") {
                reservasPendientes++;
            } else {
                reservasFinalizadas++;
            }
        }
    }
    if (totalReservas > 0) {
        document.querySelector("#divTotalDeReservasRealizadas").innerHTML = "Se han hecho " + totalReservas + " reserva/s en su local hasta el momento. <br><br>Finalizadas: " + reservasFinalizadas + "<br>Pendientes: " + reservasPendientes;
    } else {
        document.querySelector("#divTotalDeReservasRealizadas").innerHTML = "No tiene reservas realizadas en su local.";
    }
}

// Vuelve de divEstadisticaLocal al menu local.
function btnVolverEstadisticaLocalHandler() {
    document.querySelector("#divMenuLocal").style.display = "block";
    document.querySelector("#divEstadisticaLocal").style.display = "none";
}


/*************************
 
 FUNCIONALIDADES PERSONA

*************************/


//Entra al divSolicitarPersona y esconde el menu persona.
function btnSolicitarPersonaHandler() {
    document.querySelector("#divTablaSolicitudDeReserva").style.display = "none";
    let tabla = generarTablaReservasDisponibles();
    if (tabla == "") {
        document.querySelector("#divErrorAlSolicitarReserva").style.display = "block";
        document.querySelector("#divErrorAlSolicitarReserva").innerHTML = "Por el momento no se pueden solicitar más reservas.";
    } else {
        document.querySelector("#divTablaSolicitudDeReserva").style.display = "block";
        document.querySelector("#tablaLocalesParaReservarDisponibles").innerHTML = tabla;
        let arrayDeBotones = document.querySelectorAll(".btnReservarCupo");
        for (let i = 0; i < arrayDeBotones.length; i++) {
            let botonActual = arrayDeBotones[i];
            botonActual.addEventListener("click", btnReservarCuposHandler);
        }
    }
    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divSolicitarPersona").style.display = "block";
}

// Genera la tabla de locales disponibles para que el usuario logueado reserve.
function generarTablaReservasDisponibles() {
    let tablaGenerada = "";
    for (i = 0; i < usuariosLocal.length; i++) {
        let localActual = usuariosLocal[i];
        //Entra si no hay reserva pendiente del usuario actual en ese local
        if (sePuedeReservar(localActual)) {
            //Lo agrega a la tabla si tiene cupos restantes y si esta "habilitado"
            if ((localActual.cuposRestantes >= 1) && (localActual.estado == "habilitado")) {
                tablaGenerada += `
                <tr>
                    <td>
                        ${localActual.nombreUsu}
                    </td>
                    <td>
                        ${localActual.cuposRestantes}
                    </td>
                    <td>
                        <input id="cuposReserva_${localActual.id}" type="number" placeholder="0" class="cuposReservarLocal">    
                    </td>
                    <td>
                        <input data-local="${localActual.id}" type="button" value="Reservar" class="btnReservarCupo">
                    </td>
                </tr>
                `; 
            }      
        }
    }
    return tablaGenerada;
}

//Reserva los cupos especificados por el usuario para el local elegido y controla que los cupos reservados sean mayor 
//o igual a los cupos restantes, y que estos sean mayor a cero, si no, muestra un mensaje de error
function btnReservarCuposHandler() { 
    let idLocalCupos = this.getAttribute("data-local");
    let cuposReserva = parseInt(document.querySelector(`#cuposReserva_${idLocalCupos}`).value);
    let i = 0;
    let encontre = false;
    let localEncontrado = {};
    while (!encontre && i < usuariosLocal.length) {
        if (usuariosLocal[i].id == idLocalCupos) {
            localEncontrado = usuariosLocal[i];
            encontre = true;
        }
        i++;
    }
    if ((cuposReserva <= localEncontrado.cuposRestantes) && (cuposReserva >= 1)) {
        ingresarReserva(usuarioLogueado.nombreUsu, localEncontrado.nombreUsu, cuposReserva, "pendiente", 0);
        document.querySelector("#divErrorAlSolicitarReserva").innerHTML = "Cupos reservados correctamente.";
    } else {
        document.querySelector("#divErrorAlSolicitarReserva").innerHTML = "Los cupos reservados no pueden exceder el máximo disponible y deben ser mayores a 0.";
    }  
    btnSolicitarPersonaHandler();
}

// Se fija si el usuario logueado tiene una reserva en localActual.
function sePuedeReservar(localActual) {
    let i = 0;
    let permitido = true;
    while (permitido && (i < reservasPersona.length)) {
        let reserva = reservasPersona[i];
        if ((reserva.localReservado == localActual.nombreUsu) && (reserva.nombreUsu == usuarioLogueado.nombreUsu) && (reserva.estado == "pendiente")) {
            permitido = false;
        }
        i++;
    }
    return permitido;
}

// Vuelve de divSolicitarPersona al menu local.
function btnVolverSolicitarPersonaHandler() {
    document.querySelector("#divErrorAlSolicitarReserva").innerHTML = "";
    document.querySelector("#divMenuPersona").style.display = "block";
    document.querySelector("#divSolicitarPersona").style.display = "none";
}

//Entra al divVerReservaPersona y esconde el menu persona.
function btnVerReservaPersonaHandler() {
    let tabla = generarTablaReservasPendientesPersona();
    document.querySelector("#tablaVerReservasPersona").innerHTML = tabla;
    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divVerReservaPersona").style.display = "block";
}

//Genera una tabla que muestra todas las reservas pendientes que tiene la persona.
function generarTablaReservasPendientesPersona() {
    let tablaGenerada = "";
    for (i = 0; i < reservasPersona.length; i++) {
        reservaActual = reservasPersona[i];
        if ((usuarioLogueado.nombreUsu == reservaActual.nombreUsu) && (reservaActual.estado == "pendiente")) {
            let localBuscado = buscarLocal(reservaActual.localReservado);
            tablaGenerada += `
                <tr>
                    <td>
                        <img src="${localBuscado.foto}" style="width:100%">
                    </td>
                    <td align=center>
                        ${localBuscado.nombreUsu}
                    </td>
                    <td align=center>
                        ${reservaActual.cuposReservados}
                    </td>
                </tr>
            `;
        }
    }
    return tablaGenerada;
}

//Busca el usuario de tipo local que tiene como nombre de usuario "local".
function buscarLocal(local) {
    let i = 0;
    encontrado = false;
    let localADevolver = {};
    while (!encontrado && (i < usuariosLocal.length)) {
        localActual = usuariosLocal[i];
        if (localActual.nombreUsu == local) {
            encontrado = true;
            localADevolver = localActual;
        }
        i++;
    }
    return localADevolver;
}

// Vuelve de divVerReservaPersona al menu local.
function btnVolverVerReservaPersonaHandler() {
    document.querySelector("#divMenuPersona").style.display = "block";
    document.querySelector("#divVerReservaPersona").style.display = "none";
}

//Entra al divCancelarReservaPersona y esconde el menu persona.
function btnCancelarReservaPersonaHandler() {
    let tabla = generarTablaCancelarReservas();
    document.querySelector("#tablaCancelarReservasPersona").innerHTML = tabla;
    document.querySelector("#divTablaCancelarReservasPersona").style.display = "none";
    if (tabla == "") {
        document.querySelector("#divNoTieneReservasPendientesCancelar").innerHTML = "No tiene reservas pendientes";
    } else {
        document.querySelector("#divTablaCancelarReservasPersona").style.display = "block";
        let arrayDeBotones = document.querySelectorAll(".btnCancelarReserva");
        for (let i = 0; i < arrayDeBotones.length; i++) {
            let botonActual = arrayDeBotones[i];
            botonActual.addEventListener("click", btnCancelarReservaHandler);
        }
    }
    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divCancelarReservaPersona").style.display = "block";
}

//Genera una tabla con todas las reservas pendientes hechas por el usuario en la cual puede cancelarlas.
function generarTablaCancelarReservas() {
    let tablaGenerada = "";
    for (i = 0; i < reservasPersona.length; i++) {
        reservaActual = reservasPersona[i];
        if ((usuarioLogueado.nombreUsu == reservaActual.nombreUsu) && (reservaActual.estado == "pendiente")) {
            let localBuscado = buscarLocal(reservaActual.localReservado);
            tablaGenerada += `
                <tr>
                    <td>
                        ${localBuscado.nombreUsu}
                    </td>
                    <td align=center>
                        ${reservaActual.cuposReservados}
                    </td>
                    <td align=center>
                        <input data-reserva="${reservaActual.id}" type="button" value="Cancelar" class="btnCancelarReserva">
                    </td>
                </tr>
            `;
        }
    }
    return tablaGenerada;
}

//Botón presionado para cancelar una reserva.
function btnCancelarReservaHandler () {
    let idReserva = this.getAttribute("data-reserva");
    let i = 0;
    let encontro = false;
    while (!encontro && (i < reservasPersona.length)) {
        let reservaEncontrada = reservasPersona[i];
        if (reservaEncontrada.id == idReserva){
            encontro = true;
            reservaEncontrada.estado = "cancelada";
            let posicionLocal = buscarUsuarioEnArray(usuariosLocal, reservaEncontrada.localReservado);
            usuariosLocal[posicionLocal].cuposRestantes += reservaEncontrada.cuposReservados;
        }
        i++;
    }
    document.querySelector("#divNoTieneReservasPendientesCancelar").innerHTML = "Su reserva se ha cancelado.";
    btnCancelarReservaPersonaHandler();
}

// Vuelve de divCancelarReservaPersona al menu local.
function btnVolverCancelarReservaPersonaHandler() {
    document.querySelector("#divNoTieneReservasPendientesCancelar").innerHTML = "";
    document.querySelector("#divMenuPersona").style.display = "block";
    document.querySelector("#divCancelarReservaPersona").style.display = "none";
}

//Entra al divEstadisticaPersona y esconde el menu persona.
function btnEstadisticaPersonaHandler() {
    document.querySelector("#divMostrarMasReservasPersona").style.display = "none";
    document.querySelector("#divMostrarPorcentajeDeReservasPersona").style.display = "none";

    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divEstadisticaPersona").style.display = "block";
}

//Muestra el porcentaje de reservas.
function btnMostrarPorcentajeDeReservasPersonaHandler () {
    let tabla = generarTablaPorcentajeDeReservas ();
    if (tabla != "") {
        document.querySelector("#tablaPorcentajeDeReservas").innerHTML = tabla;
        document.querySelector("#divMostrarPorcentajeDeReservasPersona").style.display = "block";
    } else {
        document.querySelector("#divMostrarPorcentajeDeReservasPersona").style.display = "none";
        document.querySelector("#divMensajeTablaPorcentajeDeReservasPersonaVacia").innerHTML = "Usted todavía no ha realizado reservas.";
    }
    document.querySelector("#divMostrarMasReservasPersona").style.display = "none";
}

//Genera una tabla con nombre local, cupos reservados, total de reservas del local y porcentaje de reservas hechas por el usuario.
function generarTablaPorcentajeDeReservas() {
    let tablaGenerada = "";
    for (i = 0; i < usuariosLocal.length; i++) {
        let localActual = usuariosLocal[i];
        let cantidadDeReservasHechasPorLaPersona = totalDeReservasFinalizadasPersona(localActual.nombreUsu);
        let cantidadDeReservasHechasEnTotal = cantidadTotalReservasLocal(localActual.nombreUsu);
        if (cantidadDeReservasHechasPorLaPersona > 0) {
            let porcentajeDeReservas = porcentajeDeReservasDelUsuario(cantidadDeReservasHechasPorLaPersona, cantidadDeReservasHechasEnTotal);
            tablaGenerada += `
            <tr>
                <td>
                    ${localActual.nombreUsu}
                </td>
                <td>
                    ${cantidadDeReservasHechasPorLaPersona}
                </td>
                <td>
                    ${cantidadDeReservasHechasEnTotal}
                </td>
                <td>
                    ${porcentajeDeReservas} %
                </td>
            </tr>
            `;
        }
    }
    return tablaGenerada;
}

//Se calcula el total de reservas hechas por la persona logueada en "localReserva" que están en estado finalizada.
function totalDeReservasFinalizadasPersona(localReserva) {
    let totalDeReservasHechas = 0;
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if ((reservaActual.localReservado == localReserva) && (reservaActual.nombreUsu == usuarioLogueado.nombreUsu) && (reservaActual.estado == "finalizada")) {
            totalDeReservasHechas++;
        }
    }
    return totalDeReservasHechas;
}


//Se calcula la cantidad de reservas totales que se realizaron en el local en todos los estados.
function cantidadTotalReservasLocal(localReserva) {
    let totalReservas = 0;
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if (reservaActual.localReservado == localReserva) {
            totalReservas++;
        }
    }
    return totalReservas;
}

//Se calcula el porcentaje de reservas hechas por el usuario en el local
function porcentajeDeReservasDelUsuario(reservasDePersona, totalDeReservas) {
    let porcentajeDeReservas = (reservasDePersona * 100) / (totalDeReservas);
    let porcentajeDeReservasParseado = parseFloat(Number(porcentajeDeReservas).toFixed(1));
    return porcentajeDeReservasParseado;
}

//Muestra el o los locales en los que la persona hizo la mayor cantidad de reservas.
function btnMostrarMasReservasPersonaHandler() {
    document.querySelector("#divMensajeTablaPorcentajeDeReservasPersonaVacia").innerHTML = "";
    document.querySelector("#divMostrarPorcentajeDeReservasPersona").style.display = "none";
    document.querySelector("#divMostrarMasReservasPersona").style.display = "block";
    document.querySelector("#divMostrarMasReservasPersona").innerHTML = "Local/es con mayor cantidad de reservas: <br><br>";
    let reservasPersonaActual = [];
    let mayorCantidadReservas = Number.NEGATIVE_INFINITY;
    let localesConMayorCantidad = []; //Aca vamos a guardar los nombres de los locales en los que tiene más reservas hechas.
    /* Recorre el arreglo de reservas y agrega a "reservasPersonaActual" todas las reservas que
    fueron realizadas por el usuario logueado. */
    for (let i = 0; i < reservasPersona.length; i++) {
        let reservaActual = reservasPersona[i];
        if (reservaActual.nombreUsu == usuarioLogueado.nombreUsu) {
            reservasPersonaActual.push(reservaActual);
        }
    }
    if (reservasPersonaActual[0] != undefined) { //Se fija que el arreglo tenga por lo menos una reserva dentro.
        for (let i = 0; i < usuariosLocal.length; i++) { //Recorre todos los locales.
            let localActual = usuariosLocal[i];
            let reservasEncontradas = 0; //Contador que va a ir guardando la cantidad de reservas hechas por el usuario en localActual.
            /* Recorre el arreglo creado por nosotros de reservas y cada vez 
            que encuentra una suma uno al contador */
            for (let j = 0; j < reservasPersonaActual.length; j++) {
                if (reservasPersonaActual[j].localReservado == localActual.nombreUsu) {
                    reservasEncontradas++;
                }
            }   
            if (reservasEncontradas > mayorCantidadReservas) { //Si hay más reservas en el local actual que en el anterior mayor lo pisa con el actual.
                mayorCantidadReservas = reservasEncontradas;
                localesConMayorCantidad = [];
                localesConMayorCantidad.push(localActual.nombreUsu);
            } else if (reservasEncontradas == mayorCantidadReservas) { //Si tiene la misma cantidad de reservas que en el que había antes agrega el local actual.
                localesConMayorCantidad.push(localActual.nombreUsu);
            }
        }
        //Recorre el arreglo de los nombres de los locales en los que tiene más cantidad y los va agregando al div en forma de lista.
        for (let i = 0; i < localesConMayorCantidad.length; i++) {
            let texto = localesConMayorCantidad[i];
            document.querySelector("#divMostrarMasReservasPersona").innerHTML += (texto + "<br>");
        }
    } else {
        document.querySelector("#divMostrarMasReservasPersona").innerHTML = "Usted todavía no ha realizado reservas.";
    }
}

//Vuelve de divEstadisticaPersona al menu persona.
function btnVolverEstadisticaPersonaHandler() {
    document.querySelector("#divMenuPersona").style.display = "block";
    document.querySelector("#divEstadisticaPersona").style.display = "none";
    document.querySelector("#divMostrarMasReservasPersona").innerHTML = "Local/es con mayor cantidad de reservas: <br><br>";
}

//Entra al divCalificarPersona y esconde el menu persona.
function btnCalificarPersonaHandler() {
    let tabla = generarTablaCalificaciones();
    document.querySelector("#tablaCalificarPersona").innerHTML = tabla;
    document.querySelector("#divTablaCalificarPersona").style.display = "none";
    if (tabla == "") {
        document.querySelector("#divMensajeReservasParaCalificar").innerHTML = "No tiene reservas para calificar.";
    } else {
        document.querySelector("#divTablaCalificarPersona").style.display = "block";
        let arrayDeBotones = document.querySelectorAll(".btnCalificarReserva");
        for (let i = 0; i < arrayDeBotones.length; i++) {
            let botonActual = arrayDeBotones[i];
            botonActual.addEventListener("click", btnCalificarReservaHandler);
        }
    }
    document.querySelector("#divMenuPersona").style.display = "none";
    document.querySelector("#divCalificarPersona").style.display = "block";
}

//Genera la tabla donde van a aparecer las reservas finalizadas del usuario y donde va a poder calificarlas.
function generarTablaCalificaciones() {
        let tablaGenerada = "";
        for (i = 0; i < reservasPersona.length; i++) {
            let reservaActual = reservasPersona[i];
            if ((reservaActual.estado == "finalizada") && (reservaActual.calificacion == 0) && (reservaActual.nombreUsu == usuarioLogueado.nombreUsu)) {
                tablaGenerada += `
                <tr>
                    <td>
                        ${reservaActual.localReservado}
                    </td>
                    <td>
                        ${reservaActual.cuposReservados}
                    </td>
                    <td>
                        <input id="puntuacion_${reservaActual.id}" type="number" class="puntuacionLocal">
                    </td>
                    <td>
                       <input data-reserva="${reservaActual.id}" type="button" value="Calificar" class="btnCalificarReserva">
                    </td>
                </tr>
                `; 
            }
        }
    return tablaGenerada;
}

//Ingresa una calificación para la reserva elegida verificando que esté entre 1 y 5.
function btnCalificarReservaHandler() {
    let idReserva = this.getAttribute("data-reserva");
    let puntajeCalificado = parseInt(document.querySelector(`#puntuacion_${idReserva}`).value);
    if ((puntajeCalificado >= 1) && (puntajeCalificado <= 5)) {
        let i = 0;
        let encontro = false;
        while (!encontro && (i < reservasPersona.length)) {
            let reservaEncontrada = reservasPersona[i];
            if (reservaEncontrada.id == idReserva) {
                encontro = true;
                reservaEncontrada.calificacion = puntajeCalificado;
            }
            i++;
        }
        document.querySelector("#divMensajeReservasParaCalificar").innerHTML = "Reserva calificada correctamente.";
    } else {
        document.querySelector("#divMensajeReservasParaCalificar").innerHTML = "Ingrese un número del 1 al 5.";
    }
    btnCalificarPersonaHandler();
}

// Vuelve de divCalificarPersona al menu local.
function btnVolverCalificarPersonaHandler() {
    document.querySelector("#divMenuPersona").style.display = "block";
    document.querySelector("#divCalificarPersona").style.display = "none";
    document.querySelector("#divMensajeReservasParaCalificar").innerHTML = "";
}