export class Usuario{
    #nombreUsuario
    #email
    #contrasena
    #cuentas

    constructor(nombreUsuario, email, contrasena) {
        this.#nombreUsuario = nombreUsuario;
        this.#contrasena = contrasena;
        this.#email = email;
        this.#cuentas = [];
    }

    get nombreUsuario() {
        return this.#nombreUsuario;
    }
    get contrasena() {
        return this.#contrasena;
    }
    get email() {
        return this.#email;
    }
    get cuentas() {
        return this.#cuentas; // Retorna una copia del array
    }

    set cuentas(cuenta){
        this.#cuentas = cuenta;
    }

    nuevaCuenta(cuenta){
        this.#cuentas.push(cuenta)
    }
}