const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


function usuario(nombre, pass, correo, telefono) {
    this.nombre = nombre;
    this.pass = pass;
    this.correo = correo;
    this.telefono = telefono;
}

const usuario1 = new usuario(nuevoNombre(),nuevoPass(),nuevoCorreo(),nuevoTelefono())

function nuevoNombre(){
   prompt("ingrese nuevo nombre")
}
function nuevoPass(){
    prompt("Ingrese su contraseña");
}
function nuevoCorreo(){
    prompt("Ingrese su correo electronico");
}
function nuevoTelefono(){
    prompt("Ingrese su numero telefonico");
}

/*
usuario["nombre"] = prompt("Ingrese su nombre");
usuario["pass"]  = prompt("Ingrese su contraseña");
usuario["correo"] = prompt("Ingrese su correo electronico");
usuario["telefono"] = prompt("Ingrese su numero telefonico");
*/
console.log(usuario1)
const usuarios = [];


