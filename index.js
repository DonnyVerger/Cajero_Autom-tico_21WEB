
var cuentas = [
  { nombre: "Mali", saldo: 200, password:"123" },
  { nombre: "Gera", saldo: 290, password:"hola" },
  { nombre: "Maui", saldo: 67, password:"contraseña" }
];

/////inicia el ejemplo
const formDom = document.getElementById("formulario1");
const DbUser = "";
const DbPassword = "";
var nombreUsuario ="";
var contraseñaUsuario ="";
var saldoUsuario ="";
const campoUsuario = document.getElementById("user");
const campocontraseña = document.getElementById("password");
const cero = document.getElementById("0");
const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const siete = document.getElementById("7");
const ocho = document.getElementById("8");
const nueve = document.getElementById("9");
const igual = document.getElementById("=");

const cero2 = document.getElementById("r0");
const uno2 = document.getElementById("r1");
const dos2 = document.getElementById("r2");
const tres2 = document.getElementById("r3");
const cuatro2 = document.getElementById("r4");
const cinco2 = document.getElementById("r5");
const seis2 = document.getElementById("r6");
const siete2 = document.getElementById("r7");
const ocho2 = document.getElementById("r8");
const nueve2 = document.getElementById("r9");
const igual2 = document.getElementById("r=");

const borrar1 = document.getElementById("borrar");
const borrar2 = document.getElementById("rborrar");

const consul = document.getElementById("consultar");
const ingre = document.getElementById("ingresar");
const reti = document.getElementById("retirar");
const reset1 = document.getElementById("salir1");
const regres1 = document.getElementById("regresar1");
const regres2 = document.getElementById("regresar2");
const regres3 = document.getElementById("regresar3");

igual.addEventListener("click", (evento)=>{
    evento.preventDefault();
    // Este es el igual de la pantalla ingresar
    ingresarResultado();
    document.getElementById("campo").value = "";
});
igual2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    // Este es el igual de la pantalla retirar
    retirarResultado();
    document.getElementById("rcampo").value = "";
});

//BOTONES DE LA CALCULADORA 1 (INGRESAR) 
borrar1.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value = "";
});
cero.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "0";
    console.log("0");
});
uno.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "1";
    console.log("1");
});
dos.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "2";
    console.log("2");
});
tres.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "3";
    console.log("3");
});
cuatro.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "4";
    console.log("4");
});
cinco.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "5";
    console.log("5");
});
seis.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "6";
    console.log("6");
});
siete.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "7";
    console.log("7");
});
ocho.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "8";
    console.log("8");
});
nueve.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value += "9";
    console.log("9");
});
//BOTONES DE LA CALCULADORA 2 (RETIRAR)
borrar2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value = "";
});
cero2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "0";
    console.log("0");
});
uno2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "1";
    console.log("1");
});
dos2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "2";
    console.log("2");
});
tres2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "3";
    console.log("3");
});
cuatro2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "4";
    console.log("4");
});
cinco2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "5";
    console.log("5");
});
seis2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "6";
    console.log("6");
});
siete2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "7";
    console.log("7");
});
ocho2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "8";
    console.log("8");
});
nueve2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value += "9";
    console.log("9");
});

reset1.addEventListener("click", (evento)=>{
    evento.preventDefault();
    // swal("Hasta luego :D !");
    window.location.reload();
});
regres1.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formConsulta").style.display = "none";
    document.getElementById("formulario2").style.display = "block";
});
regres2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("campo").value = "";
    document.getElementById("formIngresar").style.display = "none";
    document.getElementById("formulario2").style.display = "block";
});
regres3.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("rcampo").value = "";
    document.getElementById("formRetirar").style.display = "none";
    document.getElementById("formulario2").style.display = "block";
});
consul.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formulario2").style.display = "none";
    document.getElementById("formConsulta").style.display = "block";
    document.getElementById("mirame").value = saldoUsuario + " pesos";
});
ingre.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("labelSaldo1").innerHTML = "Tu saldo actual es de: "+saldoUsuario + " pesos"; 
    document.getElementById("formulario2").style.display = "none";
    document.getElementById("formIngresar").style.display = "block";
    // document.getElementById("campo").value = saldoUsuario;
});
reti.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("labelSaldo2").innerHTML = "Tu saldo actual es de: "+saldoUsuario  + " pesos";
    document.getElementById("formulario2").style.display = "none";
    document.getElementById("formRetirar").style.display = "block";
    // document.getElementById("campo").value = saldoUsuario;
});


function crearElemento(mierror){
    let span = document.createElement('span');
    span.classList.add("hide");
    span.setAttribute("id", `error${mierror}`);
    span.innerHTML = `${mierror} incorrecto`;
    let div = document.getElementById(`contenedor&{mierror}`);
    div.appendChild(span);
}

function mostrarError(tipoError){
    crearElemento(tipoError);
    let span = document.getElementById(`error&{tipoError}`);
    span.classList.remove('hide');
    span.classList.add('error');
    setInterval(()=>{
        span.classList.remove('error');
        span.classList.add('hide');
    }, 3000)
}


function ingresarResultado(){
    let inputValor = document.getElementById("campo").value;
    let res = parseInt(inputValor) + saldoUsuario;
    if(res <= 990){
        for(let pep = 0; pep < cuentas.length; pep++){
            if(nombreUsuario == cuentas[pep].nombre){
                cuentas[pep].saldo = res;
                saldoUsuario = cuentas[pep].saldo;
                break;
            }
        }
        swal({
            tittle: 'Datos',
            text: "Monto ingresado: " + inputValor + 
            '\n Tu nuevo saldo es de: ' + res, 
            icon: 'success'
        });
        document.getElementById("labelSaldo1").innerHTML = "Tu saldo actual es de: "+saldoUsuario + " pesos";
    }else{
        swal({
            tittle: 'Advertencia',
            text: "Lo sentimos, el monto no puede superar los 990 pesos" + 
            '\n Favor de introducir una cantidad que no haga revasar los 990 en esta cuenta', 
            icon: "warning"
        });
        document.getElementById("campo").value = "";
    }
}
function retirarResultado(){
    let inputValor = document.getElementById("rcampo").value;
    let res = saldoUsuario - parseInt(inputValor);
    if(res >= 10){
        for(let pep = 0; pep < cuentas.length; pep++){
            if(nombreUsuario == cuentas[pep].nombre){
                cuentas[pep].saldo = res;
                saldoUsuario = cuentas[pep].saldo;
                break;
            }
        }
        swal({
            tittle: 'Datos',
            text: "Monto retirado: " + inputValor + 
            '\n Tu nuevo saldo es de: ' + res, 
            icon: 'success'
        });
        document.getElementById("labelSaldo2").innerHTML = "Tu saldo actual es de: "+ saldoUsuario + " pesos";
    }else{
        swal({
            tittle: 'Advertencia',
            text: "Lo sentimos, el monto sobrante no puede ser menor de $10 " + 
            '\n Favor de introducir una cantidad que no deje A esta cuenta con $10', 
            icon: "warning"
        });
        document.getElementById("campo").value = "";
    }
}


function revisar(miArreglo, us, pss) {
    let i ="";
    for(i = 0; i < miArreglo.length; i++){
        let arrNombre = miArreglo[i].nombre;
        let arrPassword = miArreglo[i].password;
       if(arrNombre == us && arrPassword == pss){
            console.log("Bienvenido", us);
            nombreUsuario =miArreglo[i].nombre;
            contraseñaUsuario = pss;
            saldoUsuario = miArreglo[i].saldo;
            document.getElementById("formulario1").style.display = "none";
            document.getElementById("formulario2").style.display = "block";
            document.getElementById("elNombre").innerHTML = "Bienvenido "+ nombreUsuario; 
            break;
        }
        else if(i == 2 && arrNombre != us){
            alert("Error de usuario, compruebe su usuario y contraseña");
            campoUsuario.value="";
            campocontraseña.value = "";
            campoUsuario.focus();
            break;
            // mostrarError("User");

        }
        else if(i == 2 && arrPassword != pss){
            alert("Error de usuario, compruebe su contraseña");
            break;
            // mostrarError("Password");
        }  
    }
}

formDom.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let userDom = document.getElementById("user").value;
    let passDom = document.getElementById("password").value;
    revisar(cuentas,userDom,passDom);
    
});
