const list = document.querySelector(".list");
const add = document.querySelector(".add");

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
}

add.addEventListener("click", addName);

// let items = document.querySelectorAll(".item");
//   items.forEach((el, i) => {
//     const del = document.querySelector(".delete");
//     del.addEventListener("click", () => {
//       items.splice(i, 1);
//     });
//   });
