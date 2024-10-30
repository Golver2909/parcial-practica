import { Usuario } from "./usuario";
import { Cuenta } from "./cuenta";

let coleccionUsuarios = [];
let coleccionCuentas = [];

function iniciarSesion(){
    const contrasena = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const boton = document.getElementById('boton-login');

    const user_encontrado = coleccionUsuarios.find(
        (usuario) => usuario.contrasena === contrasena && usuario.email === email
    );

    if(user_encontrado){
        boton.location.href = "";
        boton.value = 'IR A SU CUENTA';
        return Swal.fire({
            title: "Sesion Iniciada",
            text: "Sesion iniciada con exito",
            icon: "success"
          });
    } else {
        return Swal.fire({
            title: "ERROR",
            text: "Usuario no valido",
            icon: "error"
          });
    }
}



const cuenta1 = new Cuenta('martita.banco',10000,'Marta Mora');
const cuenta2 = new Cuenta('pepito.banco',5000,'Pepe Mora');
const cuenta3 = new Cuenta('pepito.banco',7000,'Pepe Mora');
const cuenta_inc = new Cuenta('pamitramit.inc',80000,'PAMI');
const user1 = new Usuario('Marta Mora','marmorita@gmail.com','pepitomivida');
const user2 = new Usuario('Pepito Mora','pepomora@gmail.com','martitamicielo');
const empresa = new Usuario('PAMI','tramitespami@gmail.com','45c9O7gu');
coleccionUsuarios.push(user1);
coleccionUsuarios.push(user2);
coleccionUsuarios.push(empresa);
coleccionCuentas.push(cuenta1);
coleccionCuentas.push(cuenta2);
coleccionCuentas.push(cuenta3);
coleccionCuentas.push(cuenta_inc);