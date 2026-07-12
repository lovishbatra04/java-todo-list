function addtask() {

    let taskbox = document.getElementById("taskInput");
    let taskname = taskbox.value;

    if (taskname === "") {
        return;
    }

   let li = document.createElement("li");
   li.innerText = taskname;

   let tickBtn = document.createElement("button")
   tickBtn.innerHTML = "[OK]"
    tickBtn.style.background     = "transparent";
    tickBtn.style.color          = "green";
    tickBtn.style.border         = "none";
    tickBtn.style.cursor         = "pointer";
    tickBtn.style.marginLeft     = "2px";
    tickBtn.style.fontSize       = "15px";
    tickBtn.style.width          = "28px";
    tickBtn.style.height         = "28px";
    tickBtn.style.display        = "inline-flex";
    tickBtn.style.alignItems     = "center";
    tickBtn.style.justifyContent = "center";
    tickBtn.style.borderRadius   = "50%";

    tickBtn.onclick = function () {
        li.style.textDecoration = "line-through";
        li.style.color          = "grey";
    }


    let delBtn = document.createElement("button");
    delBtn.innerText = "[X]";

    delBtn.style.background     = "transparent";
    delBtn.style.color          = "red";
    delBtn.style.border         = "none";
    delBtn.style.cursor         = "pointer";
    delBtn.style.marginLeft     = "3px";
    delBtn.style.fontSize       = "15px";
    delBtn.style.width          = "28px";
    delBtn.style.height         = "28px";
    delBtn.style.display        = "inline-flex";
    delBtn.style.alignItems     = "center";
    delBtn.style.justifyContent = "center";
    delBtn.style.borderRadius   = "50%";

    delBtn.onclick = function () {
        li.remove();
    };
    
    li.appendChild(tickBtn);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    taskbox.value = "";


}

