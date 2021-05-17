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
  console.log(data);
  jokeDiv.innerHTML = `
  <h2>${data.value}</h2>`;
  jokeDiv.style.textAlign = "center";
  jokeDiv.style.color = "olive";
  navBar.insertAdjacentElement("afterend", jokeDiv);
};
generateJoke();
