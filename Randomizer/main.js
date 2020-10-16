var nums = [];
var max = 23;
var aciertos = 0;

var randNum1 = Math.round(Math.random() * max);
var randNum2 = Math.round(Math.random() * max);
while (randNum1 == randNum2)
{
    randNum2 = Math.round(Math.random() * max);
}

function random(i)
{
    var restantes = document.getElementById("restantes");
    var botones = document.getElementsByTagName("button");
    var boton = botones[i];

    if (aciertos < 2)
    {
        if (boton.innerHTML-1 == randNum1 || boton.innerHTML-1 == randNum2)
        {
            boton.style.backgroundColor = "black";
            aciertos += 1;
        }
        else
        {
            boton.style.backgroundColor = "cadetblue";
        }
        
        boton.style.color = "white";    
        nums.splice(nums.indexOf(i), 1);
        restantes.innerHTML = "Intentos restantes: " + nums.length;
    }
    if (aciertos == 2)
    {
        restantes.innerHTML = "FINISHED!"
    }
}

function info()
{
    alert("Selecciona números hasta encontrar los dos elegidos.\n\
Haz click en la imagen de 'random' para marcar un número al azar.");
}

function randomN()
{
    var rand = Math.round(Math.random() * (nums.length-1));

    random(nums[rand]);
}

window.onload = function()
{
    var botonera = document.getElementById("botonera");
    var botones = ""
        
    for (var i = 0; i <= max; i++)
    {
        botones += "<button onclick='random(" + i + ")'>" + (i+1) + "</button>"
        nums[nums.length] = i;
    }

    botonera.innerHTML = botones;
}