"use strict";
console.log("practice");

// 9 toje sakoje su js sukurti h4 elementa ir i ji ikelti data ir laika i js
//  * ikelti naujai sukurta elementa su append i index.html dokumenta

const h4El = document.createElement("h4");
const data = new Date().toDateString() + new Date().toTimeString();
h4El.textContent = data;
// console.log(data);
// console.log(laikas);
document.body.prepend(h4El);

// * * 17. 'aboutPage' sakoj tvarkingai commitinant sukurti siek tiek html, prideti stiliu
//  * ir parsiusti random juokeli is chuck noris ar kito api. https://api.chucknorris.io/

const norrisJokeUrl = "https://api.chucknorris.io/jokes/random";
const generateJoke = async () => {
  const jokeDiv = document.createElement("div");
  const navBar = document.querySelector(".nav-bar");
  const resp = await fetch(norrisJokeUrl);
  const data = await resp.json();
  //   console.log(data);
  jokeDiv.innerHTML = `
  <h2>${data.value}</h2>`;
  jokeDiv.style.textAlign = "center";
  jokeDiv.style.color = "olive";
  navBar.insertAdjacentElement("afterend", jokeDiv);
};
generateJoke();

// * * 20. sukurti saka 'article' joje sukurti secion su antraste nuotrauka ir keletu pastraipu, sustilizuoti kad atrodytu nice. visa procesa commintinti ties loginiais zingsniais
const article2 = document.createElement("article");
article2.className = "article2";

const article1 = document.getElementById("article1");
// console.log(article1);

article1.insertAdjacentElement("afterend", article2);

article2.style.display = "block";

const artH = document.createElement("h3");
artH.textContent = "Cia yra antraste articlo";

const artImg = document.createElement("img");
artImg.src = "https://picsum.photos/800/400";

const artP = document.createElement("p");
artP.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi voluptate ducimus corporis nobis, laboriosam nemo fuga officiis. Consequuntur omnis pariatur sunt odio ipsum necessitatibus ea soluta tenetur error non.";
artP.style.width = "55%";
artP.style.margin = "0 auto";
article2.append(artH, artImg, artP);

// * * 22. pagrindinej sakoj js faile parasyti funkcija kuri parsiuncia 10 todo is jsonPlaceholder * api ir juos atvaizduoti saraso pavidalu.

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => getData(data.splice(0, 10)))
  .catch((err) => console.log(err));

const todoDiv = document.createElement("div");
todoDiv.className = "todo";
article2.insertAdjacentElement("afterend", todoDiv);

function getData(data) {
  data.forEach((obj) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    todoDiv.appendChild(ul);
    todoDiv.innerHTML = `
  <ul>
  <li>${obj.title}, completed: ${obj.completed}</li>
  </ul>`;
  });
  return;
}
