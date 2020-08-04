function alerta()
{
    alert("Esta es una alerta orientada a eventos");
}

window.onload = function()
{
    var alerta = document.getElementById("alerta");
    alerta.onclick = function()
    {
        var p = document.createElement("p");
        var fecha = document.createTextNode("Fecha actual ==>   " + Date().toString());
        p.appendChild(fecha);

        if (document.getElementsByTagName("p").length < 3)
        {
            document.body.appendChild(p);
        }
        else
        {
            var fechaP = document.getElementsByTagName("p")[2];
            document.body.replaceChild(p, fechaP);
        }
    }
}