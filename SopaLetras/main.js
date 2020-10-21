var sopa = [
    ["S", "O", "L", "G", "M"],
    ["F", "N", "W", "A", "Q"],
    ["V", "S", "J", "T", "G"],
    ["H", "U", "D", "O", "V"],
    ["E", "R", "U", "S", "B"],
]

var palabras = ["SOL", "GATOS", "SUR"]
var encontradas = [false, false, false];
var letra = 0;
var palabra = 0;

function comprobar(i, j)
{
    let boton = document.getElementById(i + "," + j);

    for (let k = 0; k < palabras.length; k++)
    {
        if (!encontradas[k])
        {
            let p = palabras[k];
            if (sopa[i][j] == p[letra])
            {
                boton.style.backgroundColor = "gray";
                letra++;

                if (letra == p.length)
                {
                    letra = 0;
                    encontradas[k] = true;
                }
                break;
            }
        }
    }
}

window.onload = function()
{
    let tabla = document.getElementById("tabla");
    let botones = "";

    for (let i = 0; i < 5; i++)
    {
        botones += "<tr>"

        for (let j = 0; j < 5; j++)
        {
            botones += "<td><button id='" + i + "," + j + "' onclick=" + 
            "'comprobar(" + i + ", " + j + ")'>" + sopa[i][j] + "</button></td>"
        }

        botones += "</td>"
    }

    tabla.innerHTML = botones;
}