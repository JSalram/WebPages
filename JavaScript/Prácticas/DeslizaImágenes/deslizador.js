imgs = ["img/paisaje1.jpg", "img/paisaje2.jpg", "img/paisaje3.jpg"];
i = 1

function next()
{
    var img = document.getElementsByTagName("img")[0];
    i++;

    if (i > 2)
    {
        i = 0;
    }

    img.src = imgs[i];

    document.getElementById("test").innerHTML = imgs[i];
}

function prev()
{
    var img = document.getElementsByTagName("img")[0];
    i--;

    if (i < 0)
    {
        i = 2;
    }

    img.src = imgs[i];

    document.getElementById("test").innerHTML = imgs[i];
}

window.onload = function()
{
    var prev = document.getElementsByTagName("button")[0];
    var next = document.getElementsByTagName("button")[1];
}