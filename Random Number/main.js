var nums = []

var randNum1 = Math.round(Math.random() * 30);
var randNum2 = Math.round(Math.random() * 30);
while (randNum1 == randNum2)
{
    randNum2 = Math.round(Math.random() * 30);
}

function random(i)
{
    var botones = document.getElementsByTagName("button");
    var boton = botones[i];

    if (boton.innerHTML-1 == randNum1 || boton.innerHTML-1 == randNum2)
    {
        boton.style.backgroundColor = "black";
    }
    else
    {
        boton.style.backgroundColor = "cadetblue";
    }
    
    boton.style.color = "white";
    
    nums.splice(nums.indexOf(i), 1);
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
        
    for (var i = 0; i < 30; i++)
    {
        botones += "<button onclick='random(" + i + ")'>" + (i+1) + "</button>"
        nums[nums.length] = i;
    }

    botonera.innerHTML = botones;
}