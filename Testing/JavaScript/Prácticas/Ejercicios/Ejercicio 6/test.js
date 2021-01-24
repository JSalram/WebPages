function dni()
{
    numero = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var resto = numero % 23;

    var dni = document.createTextNode("DNI: " + numero + letras[resto]);
    var p = document.createElement("p");
    p.appendChild(dni);
    document.body.appendChild(p);
}