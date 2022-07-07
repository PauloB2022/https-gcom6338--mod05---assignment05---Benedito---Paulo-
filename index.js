document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("add-todo");
    var todoList = document.getElementById("todo-list");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      var input = form.querySelector("input");
      var taskText = input.value;
      
      if (taskText.trim().length !== 0) {
        var newLi = document.createElement("li"); // <li></li>
        var newLiButton = document.createElement("button"); // <button></button>
        newLiButton.textContent = taskText; // <button>Test</button>
        newLi.appendChild(newLiButton); // <li><button>Test</button></li>
        todoList.appendChild(newLi);
  
        newLiButton.addEventListener("click", function () {
          newLiButton.style.textDecoration = "line-through"
          newLiButton.addEventListener("click", function() {
            newLi.remove();
          });
        });
  
        input.value = "";
      }
    })
  })