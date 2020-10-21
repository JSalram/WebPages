var nums = [];
var max;
var aciertos = [];

var randNum1;
var randNum2;

function random(i)
{
    var restantes = document.getElementById("restantes");
    var botones = document.getElementById("botonera").childNodes;
    var boton = botones[i];
    var valor = boton.innerHTML-1;

    if (aciertos.length < 2)
    {
        if (valor == randNum1 && !aciertos.includes(valor))
        {
            boton.style.backgroundColor = "black";
            aciertos[aciertos.length] = valor;
        }
        else if (valor == randNum2 && !aciertos.includes(valor))
        {
            boton.style.backgroundColor = "black";
            aciertos[aciertos.length] = valor;
        }
        else
        {
            boton.style.backgroundColor = "cadetblue";
        }
        
        boton.style.color = "white";    
        if (nums.includes(valor))
        {
            nums.splice(nums.indexOf(i), 1);
        }
        restantes.innerHTML = "Intentos restantes: " + nums.length;
    }
    if (aciertos.length == 2)
    {
        restantes.innerHTML = "FINISHED!"
    }
}

function info()
{
    alert("Selecciona números hasta encontrar los dos elegidos.\n\
Los números elegidos por defecto son aleatorios.\n\
Haz click en la imagen de 'random' para marcar un número al azar.");
}

function randomN()
{
    let rand = Math.round(Math.random() * (nums.length-1));

    random(nums[rand]);
}

function selRandoms()
{
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let n1value = parseInt(n1.value) - 1;
    let n2value = parseInt(n2.value) - 1;

    if (n1value >= 0 && n2value >= 0 && n1value != n2value
        && n1value < max+1 && n2value < max+1)
    {
        randNum1 = n1value;
        randNum2 = n2value;
        alert("Los números elegidos han sido modificados.")
        n1.style.backgroundColor = "black";
        n2.style.backgroundColor = "black";
    }
    else
    {
        alert("Los números introducidos no son válidos.")
    }
}

function celdas(n)
{
    max = n;
    randNum1 = Math.round(Math.random() * max);
    randNum2 = Math.round(Math.random() * max);
    while (randNum1 == randNum2)
    {
        randNum2 = Math.round(Math.random() * max);
    }
    nums = [];
    aciertos = [];

    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");

    n1.max = max+1;
    n2.max = max+1;

    var botonera = document.getElementById("botonera");
    var restantes = document.getElementById("restantes");
    escala(n);

    restantes.innerHTML = "Intentos restantes: " + (max+1);
    var botones = ""

    for (var i = 0; i <= max; i++)
    {
        botones += "<button onclick='random(" + i + ")' style='justify-self: center'>" + (i+1) + "</button>"
        nums[nums.length] = i;
    }

    botonera.innerHTML = botones;
}

function escala(n)
{
    var botonera = document.getElementById("botonera");
    var restantes = document.getElementById("restantes");
    if (n > 25)
    {
        botonera.style.gridTemplateColumns = "repeat(6, 1fr)";
        botonera.style.margin = "2% 15% 0% 35%";
        restantes.style.margin = "0% 15% 0% 35%";
    }
    else
    {
        botonera.style.gridTemplateColumns = "repeat(5, 1fr)";
        botonera.style.margin = "2% 18% 0% 38%";
        restantes.style.margin = "0% 18% 0% 38%";
    }
}

window.onload = function()
{
    celdas(24);
}