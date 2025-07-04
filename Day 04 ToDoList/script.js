const input = document.querySelector(".input");
const addTaskBtn = document.querySelector(".add");
const ul = document.querySelector("ul");

addTaskBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const done = document.createElement("button");
  const del = document.createElement("button");
  const con = document.createElement("div");

  done.textContent = "Done";
  del.textContent = "Delete";

  const task = input.value;
  li.textContent = task;

  if (task !== "") {
    con.appendChild(done);
    con.appendChild(del);
    li.appendChild(con);
    ul.appendChild(li);

    done.addEventListener("click", () => {
      done.style.backgroundColor = "greenYellow";
      li.style.textDecoration = "underline";
      li.style.textDecorationColor = "Green";
    });

    del.addEventListener("mousedown", () => {
      del.style.backgroundColor = "Red";
      setInterval(() => li.remove(), 100);
      clearInterval();
    });

    input.value = "";
    input.focus();
  } else {
    alert("Please Provide some Task!!!");
  }
});
