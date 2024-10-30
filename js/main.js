class Cuenta {

    #alias;
    #dinero_disponible;
    #dueno;

    constructor(alias,dineroDisponible,dueno) {
        this.#alias = alias;
        this.#dinero_disponible = dineroDisponible;
        this.#dueno = dueno;
    }


    get alias(){
        return this.#alias;
    }
    get dinero_disponible(){
        return this.#dinero_disponible;
    }
    get dueno(){
        return this.#dueno;
    }


    set alias(alias){
        this.#alias = alias;
    }
    set dinero_disponible(dineroDisponible){
        this.#dinero_disponible = dineroDisponible;
    }
    set dueno(dueno){
        this.#dueno = dueno;
    }


    //FUNCIONES PARA TRANSFERIR Y RECIBIR DINERO
    transferir(monto,cuenta_destinatario){
        if (monto > this.#dinero_disponible || monto == 0) {
            return alert("No tienes suficiente dinero. Pruebe a pedir un credito");
        }

        //Obtiene la cuenta del usuario ingresado
        const cuentaEncontrada = coleccionCuentas.find(
            (cuenta) => cuenta.alias == cuenta_destinatario
        );

        //Condicional que asegura la validez de la cuenta. Realiza la operacion de resta
        if (cuentaEncontrada && cuentaEncontrada.alias != this.#alias) {
            this.#dinero_disponible = this.#dinero_disponible - monto;
            cuentaEncontrada.recibir(monto);
            return console.log(`Transferiste ${monto} .Tu nuevo saldo: ${this.#dinero_disponible}`);
        } else {
            return console.log('Ingrese una cuenta valida');
        }
    }

    //Recibe el monto desde 'transferir()' y lo sumo
    recibir(monto){
        this.#dinero_disponible = this.#dinero_disponible + monto;
        console.log(`Te acaban de mandar ${monto}. Tienes actualmente ${this.#dinero_disponible}`);
    }
}

let coleccionCuentas = [];

const cuenta1 = new Cuenta('laura.ocampos22',1000,'Laura Martina Ocampos');
const cuenta2 = new Cuenta('pablomar44',500,'Pablo Daniel Martinez');
coleccionCuentas.push(cuenta1);
coleccionCuentas.push(cuenta2);