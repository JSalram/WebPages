dioses = ["Agni", "Cupido", "Mercury", "Ne Zha", "Guan Yu", "Vamana"]

function getGod(array)
{
    return array[Math.floor(Math.random() * array.length)]
}
function printGod()
{
    const DIOS = document.getElementById("dios")
    const SPINNER = document.getElementById("spinner")

    // SPINNER.innerHTML = ""
    // for (var i = 0; i < dioses.length; i++)
    // {
    //     var div = document.createElement("div")
    //     var dios = document.createTextNode(dioses[i])
    //     div.appendChild(dios)

    //     div.style.fontSize = "20px";

    //     SPINNER.appendChild(div)
    // }

    DIOS.innerHTML = getGod(dioses)
    DIOS.style.textDecoration = "underline";
}