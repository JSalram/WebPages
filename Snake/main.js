const snake = document.getElementById("snake");

snake.style.gridColumn = 11;
snake.style.gridRow = 11;

snakeX = parseInt(snake.style.gridColumn);
snakeY = parseInt(snake.style.gridRow);


window.onkeydown = function()
{
    if (event.key == "w")
    {
        console.log("Hola")
    }
}


// document.addEventListener('keydown', (event) => {
//     const key = event.key;
//     switch(key)
//     {
//         case "w":
//         case "ArrowUp":
//             setInterval(movement("up"), 500);
//             break;
//         case "s":
//         case "ArrowDown":
//             setInterval(movement("down"), 500);
//             break;
//         case "a":
//         case "ArrowLeft":
//             setInterval(movement("left"), 500);
//             break;
//         case "d":
//         case "ArrowRight":
//             setInterval(movement("right"), 500);
//             break;
//     }
//   });

// function movement(direction)
// {
//     switch(direction)
//     {
//         case "up":
//         {
//             if (snakeY > 1)
//                 snake.style.gridRow = snakeY - 1;
//             else
//                 snake.style.gridRow = 21;
//         }
//             break;
//         case "down":
//         {
//             if (snakeY < 21)
//                 snake.style.gridRow = snakeY + 1;
//             else
//                 snake.style.gridRow = 1;
//         }
//             break;
//         case "left":
//         {
//             if (snakeX > 1)
//                 snake.style.gridColumn = snakeX - 1;
//             else
//                 snake.style.gridColumn = 21;
//         }
//             break;
//         case "right":
//         {
//             if (snakeX < 21)
//                 snake.style.gridColumn = snakeX + 1;
//             else
//                 snake.style.gridColumn = 1;
//         }
//             break;
//     }
    
//     snakeX = parseInt(snake.style.gridColumn);
//     snakeY = parseInt(snake.style.gridRow);
// }