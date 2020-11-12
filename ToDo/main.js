let tasks = [];
// let done = [];

function storage()
{
    for (let i = 0; i < localStorage.length; i++)
    {
        tasks.push(localStorage.getItem(i));
        // done.push(localStorage.getItem(i + "d"));
    }
    printTasks();
}

function clearList()
{
    tasks = [];
    // done = [];
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
        // done.push(false);
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
        let x = document.createElement("button");
        li.className = "list-group-item col-sm-6 col-lg-12 border";
        x.className = "btn btn-outline-dark float-right"
        if (i % 2 == 0)
        {
            li.className = "list-group-item col-sm-6 col-lg-12 border bg-secondary text-white";
            x.className = "btn btn-outline-light float-right"
        }
        // if (done[i]) {li.className = "list-group-item col-sm-6 col-lg-12 border bg-success text-white";}
        li.textContent = tasks[i];
        x.textContent = "X";
        x.addEventListener("click", function()
        {
            let list = document.getElementById("list");
            list.removeChild(list.childNodes[0]);
            tasks.splice(i, 1);
            localStorage.clear();
            printTasks();
        });
        li.appendChild(x);
        li.addEventListener("click", function()
        {
            li.className = "list-group-item col-sm-6 col-lg-12 border bg-success text-white";
            // done[i] = true;
        })

        list.appendChild(li);
        localStorage.setItem(i, tasks[i]);
        // localStorage.setItem(i + "d", done[i]);
    }
}