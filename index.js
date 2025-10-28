/*
const selector1 = document.querySelector(".value");
console.log(selector1);
const selector2 = document.querySelector("button");
console.log(selector2);
const selector3 = document.querySelector(".area-display");
console.log(selector3);
const selector4 = document.querySelector(".stat div");
console.log(selector4);
const selector5 = document.querySelector(".hello");
console.log(selector5);
*/

/*
const ratingList = document.querySelectorAll(".rating-display");
for (let element1 of ratingList.values()) {
  console.log(element1);
}

const areaList = document.querySelectorAll(".area-display");
for (let i = 0; i < areaList.length; i++) {
  const element2 = areaList[i];
  console.log(element2);
}
*/

/*
let content1;
let content2; 
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;
   if (content.length > 250) {
    content = content.slice(0, 250);
    content1 = content + '...';
    content2 = content + '<a href="#">...</a>'; 
   }

   // desc.innerText = content1;
   desc.innerHTML = content2;
   console.log(content1);
}
*/

/*
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  
   if (ratingValue >= 4.7) {
    console.log(rating.style.fontWeight);
    rating.style.fontWeight = "bold";
    console.log(rating.style.fontWeight);
  }
}
*/

/*
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue >= 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}
*/

/*
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);
*/

/*
// Get the parent element of all parks
const main = document.querySelector("main");
const parks = main.querySelectorAll(".park-display");

for (let park of parks) {
  let rating = park.querySelector(".rating-display .value")  
  let ratingValue = parseFloat(rating.innerText);
  if (ratingValue < 4.7) {
    main.removeChild(park); 
  }
}
*/