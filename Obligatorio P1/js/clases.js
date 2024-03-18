let usuariosPersona = [];
let usuariosLocal = [];
let reservasPersona = [];
let usuarioLogueado = {};

let proximoIdPersona = 1;
class UsuPersona {
    constructor (pUsuario, pPassword, pTipoUsu, pNombrePersona) {
        this.id = proximoIdPersona,
        this.nombreUsu = pUsuario,
        this.password = pPassword,
        this.tipoUsu = pTipoUsu,
        this.nombrePersona = pNombrePersona,
        
        proximoIdPersona++
    }
}

let proximoIdLocal = 1;
class UsuLocal {
    constructor (pUsuario, pPassword, pTipoUsu, pTipoLocal, pDireccion, pCupoMax, pCuposRestantes, pFoto, pEstado) {
        this.id = proximoIdLocal;
        this.nombreUsu = pUsuario,
        this.password = pPassword,
        this.tipoUsu = pTipoUsu,
        this.tipoLocal = pTipoLocal,
        this.direccion = pDireccion,
        this.cupoMax = pCupoMax,
        this.cuposRestantes = pCuposRestantes,
        this.foto = pFoto,
        this.estado = pEstado,

        proximoIdLocal++
    }
}

let proximoIdReservas = 1;
class Reservas {
    constructor (pUsuario, pLocal, pCupos, pEstado, pCalificacion) {
        this.id = proximoIdReservas,
        this.nombreUsu = pUsuario,
        this.localReservado = pLocal,
        this.cuposReservados = pCupos,
        this.estado = pEstado,
        this.calificacion = pCalificacion,
        
        proximoIdReservas++
    }
}