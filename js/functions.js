// Expresiones regulares
const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    CP:  /^\d{4,6}$/,
	telefono: /^\d{9,11}$/ // 10 numeros.
}
// constructor del objeto
class usuario {
    constructor(correo, nombre, apellido, localidad, CP, telefono){
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.localidad = localidad;
        this.cp = cp;
        this.telefono = telefono;
    }
}
// Definicion de variables y constantes
const usuarios = [];    

let submit = document.getElementById("submit")
let form = document.getElementById("form")
let invalidnombre = document.getElementById("invalidNombre")
let invalidMail = document.getElementById("invalidMail")
let invalidApellido = document.getElementById("invalidApellido")
let invalidLocalidad = document.getElementById("invalidLocalidad")
let invalidCP = document.getElementById("invalidCP")
let invalidTelefono = document.getElementById("invalidTelefono")

// Funcion
const nuevoUsuario = (e) => {
    e.preventDefault()

    let correo = validacionMail()
    let nombre = validacionnombre()
    let apellido = validacionApellido()
    let localidad = document.getElementById("localidad").value
    let cp = validacionCP()
    let telefono = validacionTelefono()
    console.log(`${correo} ${nombre} ${apellido} ${localidad}`)  
}

// validacion nombre y mensaje de error
const validacionnombre = () => {
if(expresiones.nombre.test(document.getElementById("nombre").value)){
    this.nombre = document.getElementById("nombre").value;
    console.log("nombre true");
}
else {
    console.log("nombre false");
    invalidnombre.classList.add('bg-danger')
    invalidnombre.classList.add('badge')
    invalidnombre.innerHTML = `Ingrese un nombre valido`
}
}

const validacionApellido = () => {
    if(expresiones.nombre.test(document.getElementById("apellido").value)){
        this.apellido = document.getElementById("apellido").value;
        console.log("Apellido true");
    }
    else {
        console.log("Apellido false");
        invalidApellido.classList.add('bg-danger')
        invalidApellido.classList.add('badge')
        invalidApellido.innerHTML = `Ingrese un apellido valido`
    }
    }

const validacionMail = () => {
    if(expresiones.correo.test(document.getElementById("email").value)){
        this.correo = document.getElementById("email").value;
        console.log("mail true");
    }
    else {
        console.log("mail false");
        invalidMail.classList.add('bg-danger')
        invalidMail.classList.add('badge')
        invalidMail.innerHTML = `Ingrese un email valido`
    }
    }

const validacionCP = () => {
    if(expresiones.CP.test(document.getElementById("cp").value)){
        this.cp = document.getElementById("cp").value;
        console.log("cp true");
    }
    else {
        console.log("cp false");
        invalidCP.classList.add('bg-danger')
        invalidCP.classList.add('badge')
        invalidCP.innerHTML = `Ingrese un CP valido`
    }
    }

const validacionTelefono = () => {
    if(expresiones.telefono.test(document.getElementById("telefono").value)){
        this.telefono = document.getElementById("telefono").value;
        console.log("telefono true");
    }
    else {
        console.log("telefono false");
        invalidTelefono.classList.add('bg-danger')
        invalidTelefono.classList.add('badge')
        invalidTelefono.innerHTML = `Ingrese un telefono valido`
    }
    }

// tomar datos
form.addEventListener("submit",nuevoUsuario)



/*
codigo viejo


let nombre2 = prompt("ingrese nuevo nombre \n Debe contener letras solamente");
    if(expresiones.nombre.test(nombre2)){
        this.nombre = nombre2;
        console.log("nombre true");
    }
    else {
        console.log("nombre false");
        this.nuevoNombre();
    }
}

    nuevoPass(){
        this.pass = prompt("Ingrese una contraseña entre 4 y 12 digitos");
        if(expresiones.pass.test(this.pass)){
            this.pass = this.pass;
            console.log("pass true");
        }
        else {
            console.log("pass false");
            this.nuevoPass();
        }
    }
    nuevoCorreo(){
        this.correo = prompt("Ingrese un correo electronico válido");
        if(expresiones.correo.test(this.correo)){
            this.correo = this.correo;
            console.log("correo true");
        }
        else {
            console.log("correo false");
            this.nuevoCorreo();
        }
    }
    nuevoTelefono(){
        this.telefono = prompt("Ingrese su numero telefonico \n Debe contener 10 digitos");
        if(expresiones.telefono.test(this.telefono)){
            this.telefono = this.telefono;
            console.log("telefono true");
        }
        else {
            console.log("telefono false");
            this.nuevoTelefono();
        }
    }

}


const usuario1 = new usuario("0","0","0","0");

function guardarDatos(){
    alert("Guardar mis datos");
    usuarios.push(new usuario(usuario1));
}


  
function suscripcion(){
usuario1.nuevoNombre();
usuario1.nuevoPass();
usuario1.nuevoCorreo();
usuario1.nuevoTelefono();
console.log(usuarios.toString())
guardarDatos();
console.log(usuarios.length)
}

*/