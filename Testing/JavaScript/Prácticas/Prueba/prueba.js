window.onload = function() // window.onload se asegura de que ha cargado el HTML
{

    // Input inicial
    var e = prompt("Elige un estilo (negrita / cursiva)");

    //Array de elementos
    var p = document.getElementsByTagName("p");

    if (e == "negrita")
    {
        for (var i = 0; i < p.length; i++)
        {
            p[i].innerHTML = "<b>" + p[i].textContent + "</b>";
        }
    }
    else if (e == "cursiva")
    {
        for (var i = 0; i < p.length; i++)
        {
            p[i].innerHTML = "<cite>" + p[i].textContent + "</cite>";
        }
    }

    // Cambiando atributos de enlace
    var enlace = document.getElementById("wikipedia");
    enlace.href = "https://www.google.com"

    // Crear elementos
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("Este es un párrafo creado al final de la sección desde JavaScript.");
    parrafo.appendChild(texto);

    var section = document.getElementsByTagName("section");
    section[section.length - 1].appendChild(parrafo);

    // Eliminar elementos
    var delP = document.getElementById("del");
    section[section.length - 1].removeChild(delP);

    // Sustituir elementos
    var texto2 = document.createTextNode("Este es un párrafo que sustituye al párrafo original de la sección desde JavaScript.");
    var replaceP = document.getElementById("replace");
    section[section.length - 2].replaceChild(texto2, replaceP);
}