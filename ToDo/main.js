let tasks = [];

function storage()
{
    for (let i = 0; i < localStorage.length; i++)
    {
        tasks.push(localStorage.getItem(i));
    }
    printTasks();
}

function clearList()
{
    tasks = [];
    localStorage.clear();
    printTasks();
}

window.onload = function()
{
    let add = document.getElementById("add");
    let input = document.getElementsByTagName("input")[0];

    add.addEventListener("click", addTask);
    input.addEventListener("keyup", function(event)
    {
        if (event.keyCode == 13) 
        {
            addTask();
        }
    });
    storage();
}

function addTask()
{
    let task = document.getElementById("task");
    if (task.value != "" && !tasks.includes(task.value))
    {
        tasks.push(task.value);
        printTasks();
    }
    task.value = "";
    task.focus();
}

function printTasks()
{
    let list = document.getElementById("list");
    list.innerHTML = "";
    
    for (let i = tasks.length-1; i >= 0; i--)
    {
        let li = document.createElement("li");
        li.className = "list-group-item text-muted";
        li.textContent = tasks[i];
        li.addEventListener("click", function()
        {
            let list = document.getElementById("list");
            list.removeChild(list.childNodes[0]);
            tasks.splice(i, 1);
            localStorage.clear();
            printTasks();
        });

        list.appendChild(li);
        localStorage.setItem(i, tasks[i]);
    }
    list.firstChild.className = "list-group-item active list-inline";
}