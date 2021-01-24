window.onload = function()
{
    var t = setInterval(move, 25);
    var pos = 0;
    var target;
    var box = document.getElementById("box");
    var box2 = document.getElementById("box2");

    // function move()
    // {
    //     pos += 1;
    //     box.style.left = pos + "px";
    //     box.style.top = pos + "px";
    //     if (pos >= 150)
    //     {
    //         clearInterval(t);
    //     }
    // }

    function move()
    {
        if (pos == 150)
        {
            target = true;
        }
        if (pos == 0)
        {
            target = false;
        }

        if (target)
        {
            pos -= 1;
        }
        else
        {
            pos += 1;
        }

        box.style.left = pos + "px";
        box2.style.left = pos + "px";
        box.style.top = pos + "px";
        box2.style.top = (150 - pos) + "px";
    }
}