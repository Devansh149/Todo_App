let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
let add=document.querySelector(".inp button");
let ta=document.querySelector(".inp input");
add.addEventListener("click",function(){
    let value=ta.value;
    if(value!=""){
        let task=document.createElement("div");
        task.classList.add("task");
        let h=document.createElement("h2");
        h.textContent=value;
        task.appendChild(h);
        let del=document.createElement("img");
        del.setAttribute("src","de.png");
        task.appendChild(del);
        document.body.appendChild(task);
        tasks.push(value);
        localStorage.setItem("tasks",JSON.stringify(tasks))
        ta.value="";
        task.addEventListener("click",function(){
            h.classList.toggle("strike");
        })
        del.addEventListener("click",function(){
            task.remove();
        })
    }
})
window.addEventListener("DOMContentLoaded", function(){
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(function(value){
        let task = document.createElement("div");
        task.classList.add("task");

        let h = document.createElement("h2");
        h.textContent = value;
        task.appendChild(h);

        let del = document.createElement("img");
        del.setAttribute("src", "de.png");
        task.appendChild(del);

        document.body.appendChild(task);

        task.addEventListener("click", function(){
            h.classList.toggle("strike");
        });

        del.addEventListener("click", function(){
            task.remove();
            savedTasks = savedTasks.filter(t => t !== value);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        });
    });
});
