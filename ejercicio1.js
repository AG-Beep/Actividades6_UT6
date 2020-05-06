'use strict'

let color=prompt("Introduce un color (azul, verde o rojo)")
let Nombre=prompt("Introduce su nombre")
let patron = /^[A-Z]/

if (patron.test(Nombre))
{
    let Nombrecolor = document.querySelector("#Nombre")  
    Nombrecolor.textContent = Nombre
    console.log(Nombrecolor.textContent)

    if (color=="azul")
        Nombrecolor.className="azul"
    else if (color=="verde")
        Nombrecolor.className="verde"
    else 
        Nombrecolor.className="rojo"
}
else
    alert("Incorrecto no empieza por mayúscula")

let telefono=Number(prompt("Introduce su numero de telefono"))
    patron = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/

if(patron.test(Telefono))
{
let Telefonocolor = document.querySelector("#Telefono")  
Telefonocolor.textContent = Telefono
console.log(Telefonocolor.textContent)

    if (color=="azul")
        Telefonocolor.className="azul"
    else if (color=="verde")
        Telefonocolor.className="verde"
    else 
        Telefonocolor.className="rojo"
}
else
    alert("No es un numero de telefono")

let correo=(prompt("Introduzca su correo"))
patron = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/

if(patron.test(correo))
{
let Correocolor = document.querySelector("#Correo")  
Correocolor.textContent = correo
console.log(Correocolor.textContent)

    if (color=="azul")
        Correocolor.className="azul"
    else if (color=="verde")
        Correocolor.className="verde"
    else 
        Correocolor.className="rojo"
}
else
    alert("No es un correo valido")
