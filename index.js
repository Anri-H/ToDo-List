const list = document.querySelector(".list");
const add = document.querySelector(".add");
let items = document.querySelectorAll(".item");

function addName() {
  let input = document.querySelector(".name").value;
  if (input === "") {
    return;
  }
  const div = document.createElement("div");
  div.setAttribute("class", "item");
  list.appendChild(div);

  const p = document.createElement("p");
  const text = document.createTextNode(input);
  p.appendChild(text);
  div.appendChild(p);
  //   input = "";

  const button = document.createElement("button");
  button.setAttribute("class", "delete");
  const del = document.createTextNode("Delete");
  button.appendChild(del);
  div.appendChild(button);

  button.addEventListener("click", () => {
    div.remove();
  });

  p.addEventListener("click", () => {
    p.classList.toggle("select");
  });

  const all = document.querySelector(".delete-all");
  all.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    items.forEach((el) => el.remove());
  });
}

add.addEventListener("click", addName);

