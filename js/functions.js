const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	pass: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9,11}$/ // 10 numeros.
}

const usuarios = [];

class usuario {
    constructor(nombre, pass, correo, telefono){
        this.nombre = nombre;
        this.pass = pass;
        this.correo = correo;
        this.telefono = telefono;
    }
    
    nuevoNombre(){
           this.nombre = prompt("ingrese nuevo nombre \n Debe contener letras solamente");
            if(expresiones.nombre.test(this.nombre)){
                this.nombre = this.nombre;
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
console.log(usuario1)
guardarDatos();
console.log(usuarios.length)
}

do{
suscripcion();
}while(usuarios.length < 3);







