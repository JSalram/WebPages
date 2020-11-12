let input;

window.onload = function() {
    let buttons = document.getElementsByTagName("button");
    input = document.getElementsByTagName("input")[0];

    for (let button of buttons)
    {
        if (Number.isInteger(parseInt(button.innerText)))
        {
            let n = button.innerText;
            button.addEventListener("click", function(){number(n)});
        }
        else
        {
            switch(button.innerText)
            {
                case "C":
                    button.addEventListener("click", function() {input.value = "0";})
                break;
            }
        }
    }
}

function number(n) {
    if (input.value == "0")
    {
        input.value = n;
    }
    else
    {
        let value = input.value;
        input.value = value + "" + n;
    }
}