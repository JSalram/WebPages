var adivina;
var pista;

var palabras = ["_ _ _ _ T _ _ D _ M _ _ T _ _ _", "_ _ T _ _ _ _ L _ T _", "_ R _ _ V _ _"];
var resuelto = ["E L E C T R O D O M E S T I C O", "M O T O C I C L E T A", "T R A N V I A"];
var pistas = [
    "Aparato que funciona con energía eléctrica y está destinado al uso doméstico.",
    "Vehículo automóvil de dos ruedas y manubrio, que tiene capacidad para una o dos personas.",
    "Vehículo de transporte público urbano que circula sobre raíles incrustados en el pavimento de las calles."
]

var i = 0;
var k = 0;

function jugar()
{
    let letra = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[0].focus();

    if (letra != "" && resuelto[i].includes(letra) && !palabras[i].includes(letra))
    {
        let palabra = "";

        for (let j = 0; j < palabras[i].length; j++)
        {
            if (resuelto[i][j] == letra)
            {
                palabra += resuelto[i][j];
            }
            else
            {
                palabra += palabras[i][j];
            }
        }

        palabras[i] = palabra;
        adivina.innerHTML = palabras[i];
    }
    else
    {
        ahorcado();
    }

    if (palabras[i] == resuelto[i])
    {
        siguiente();
    }
}

function ahorcado()
{
    if (k < 6)
    {
        let img = document.getElementsByTagName("img")[0];
        img.src = "img/" + ++k + ".png";
    }
    if (k == 6)
    {
        adivina.innerHTML = "GAME OVER";
    }
}

function siguiente()
{
    i++;

    if (i < palabras.length)
    {
        k = 0;
        adivina.innerHTML = palabras[i];
        pista.innerHTML = "PISTA: " + pistas[i];
    }
    else
    {
        k = 6;
        adivina.innerHTML = "CONGRATULATIONS!";
    }

    document.getElementsByTagName("img")[0].src = "img/" + k + ".png";
}

window.onload = function()
{
    adivina = document.getElementById("adivina");
    adivina.innerHTML = palabras[0];
    pista = document.getElementById("pista");
    pista.innerHTML = "PISTA: " + pistas[0];
}