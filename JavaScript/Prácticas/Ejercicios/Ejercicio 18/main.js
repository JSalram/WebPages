window.onload = function()
{
    div = document.getElementsByTagName("div");
}

window.onmousemove = function()
{
    var screenX = event.screenX;
    var screenY = event.screenY;

    var x = event.clientX;
    var y = event.clientY;
    div[1].innerHTML = "<p>Pantalla [" + screenX + ", " + screenY + "]</p>" 
                        + "<p>Página [" + x + ", " + y + "]</p>";
}

window.onkeydown = function()
{
    var codigo = event.keyCode;
    var tecla = String.fromCharCode(codigo);
    div[3].innerHTML = "<p>Tecla [" + tecla + "]</p>" + "<p>Código [" + codigo + "]</p>";
}