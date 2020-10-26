let sopa = [
    "S", "O", "L", "G", "M",
    "F", "N", "W", "A", "Q",
    "V", "S", "J", "T", "G",
    "H", "U", "D", "O", "V",
    "E", "R", "U", "S", "B",
]
let buttons;

let palabras = [{pal: "SOL", pos: [0, 1, 2]},
                {pal: "GATOS", pos: [3, 8, 13, 18, 23]},
                {pal: "SUR", pos: [11, 16, 21]}];

var palActual = null;
let pos = 0;

window.onload = function()
{
    let tabla = document.getElementById("tabla");
    let botones = "";
    let k = 0;

    for (let i = 0; i < 5; i++)
    {
        botones += "<tr>"

        for (let j = 0; j < 5; j++)
        {
            botones += "<td><button onclick='jugar("+k+")'>" + sopa[k] + "</button></td>"
            k++;
        }

        botones += "</td>"
    }

    tabla.innerHTML = botones;
    buttons = document.getElementsByTagName("button");
}

function jugar(k)
{
    if (pos == 0)
    {
        comenzar(k);
    }
    else
    {
        continuar(k);
    }

    if (palabras.length == 0)  // Si ha completado la sopa
    {
        document.getElementById("win").innerHTML = "<b>¡ENHORABUENA!</b>";
    }
}

function comenzar(k)
{    
    for (let i = 0; i < palabras.length; i++)
    {
        let primero = palabras[i]["pos"][0];
        if (k == primero)
        {
            buttons[k].style.backgroundColor = "gray";

            palActual = palabras[i];
            pos++;
            break;
        }
    }
}

function continuar(k)
{
    if (k == palActual["pos"][pos])  // Si la letra siguiente es correcta
    {
        buttons[k].style.backgroundColor = "gray";
        pos++;
        if (pos >= palActual["pos"].length)  // Si ha terminado la palabra
        {
            while (pos > 0)
            {
                pos--;
                buttons[palActual["pos"][pos]].style.backgroundColor = "green";
            }

            palabras.splice(palabras.indexOf(palActual), 1);
            palActual = null;

            document.getElementById("win").innerHTML = "Palabras encontradas: " + (3 - palabras.length) + " / 3";
        }
    }
    else  // Si escoge una letra errónea
    {
        while (pos > 0)
        {
            pos--;
            buttons[palActual["pos"][pos]].style.backgroundColor = "white";
        }
        palActual = null;
    }
}