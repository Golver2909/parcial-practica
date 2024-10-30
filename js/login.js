import { Usuario } from "./usuario";

coleccionUsuarios = [];

function iniciarSesion(){
    const contrasena = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const boton = document.getElementById('boton-login');

    coleccionUsuarios.forEach(usuario => {
        if (usuario.contrasena === contrasena && usuario.email === email) {
            
        }else if(fsfds){

        }else{
            alert('Ha iniciado sesion con exito');
            boton.location.href = "";
        }
    });
}

const user1 = new Usuario('Marta Mora','marmorita@gmail.com','pepitomivida');
const user2 = new Usuario('Pepito Mora','pepomora@gmail.com','martitamicielo');
coleccionUsuarios.push(user1);
coleccionUsuarios.push(user2);