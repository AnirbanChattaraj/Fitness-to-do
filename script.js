 
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem("fitnessTasks")) || [];

    function renderTasks() {
      list.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.done) li.classList.add("done");
        li.addEventListener("click", () => toggleTask(index));
        
        const del = document.createElement("button");
        del.textContent = "❌";
        del.style.background = "#ef4444";
        del.style.color = "white";
        del.addEventListener("click", (e) => {
          e.stopPropagation();
          deleteTask(index);
        });
        
        li.appendChild(del);
        list.appendChild(li);
      });
      localStorage.setItem("fitnessTasks", JSON.stringify(tasks));
    }

    function addTask() {
      const text = input.value.trim();
      if (!text) return alert("Enter a workout first!");
      tasks.push({ text, done: false });
      input.value = "";
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    renderTasks();
  