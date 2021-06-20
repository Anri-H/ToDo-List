const list = document.querySelector(".list");
const add = document.querySelector(".add");

function addName() {
  let input = document.querySelector(".name").value;
  if (input === "") {
    return;
  }
  const p = document.createElement("p");
  const text = document.createTextNode(input);
  p.appendChild(text);
  list.appendChild(p);
//   input = "";
}

add.addEventListener("click", addName);
