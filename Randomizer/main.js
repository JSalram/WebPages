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
    let restantes = document.getElementById("restantes");
    let botones = document.getElementById("botonera").childNodes;
    let boton = botones[i];

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

    if (n1value >= 0 && n2value >= 0 && n1value != n2value)
    {
        randNum1 = n1value;
        randNum2 = n2value;
        alert("Los números elegidos han sido modificados.")
        n1.style.backgroundColor = "black";
        n2.style.backgroundColor = "black";
    }
}

function scale()
{
    // if (max < 20)
    // {
    //     botonera.style.gridTemplateColumns = "repeat(auto-fill, minmax(120px, 1fr))";
    // }
}

window.onload = function()
{
    document.getElementById("restantes").innerHTML = "Intentos restantes: " + (max+1);
    var botonera = document.getElementById("botonera");
    var botones = ""

    for (var i = 0; i <= max; i++)
    {
        botones += "<button onclick='random(" + i + ")'>" + (i+1) + "</button>"
        nums[nums.length] = i;
    }

    botonera.innerHTML = botones;
}