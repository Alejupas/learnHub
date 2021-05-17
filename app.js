console.log("practice");

// 9 toje sakoje su js sukurti h4 elementa ir i ji ikelti data ir laika i js
//  * ikelti naujai sukurta elementa su append i index.html dokumenta

const h4El = document.createElement("h4");
const data = new Date().toDateString() + new Date().toTimeString();
h4El.textContent = data;
// console.log(data);
// console.log(laikas);
document.body.append(h4El);
