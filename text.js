fetch("text.json")
  .then((response) => response.json())
  .then((jsonData) => assignText(jsonData))
  .catch((error) => console.log(error));

function assignText(data) {
  let fish = document.querySelector(".fish #text");
  let geothermal = document.querySelector(".geothermal #text");
  let glacier = document.querySelector(".glacier #text");
  let swimming = document.querySelector(".swimming #text");
  let sailing = document.querySelector(".sailing #text");
  let skiing = document.querySelector(".skiing #text");
  let food = document.querySelector(".food #text");
  let drink = document.querySelector(".drink #text");
  let cleaning = document.querySelector(".cleaning #text");

  fish.innerHTML = data.fish;
  geothermal.innerHTML = data.geothermal;
  glacier.innerHTML = data.glacier;
  swimming.innerHTML = data.sports.swimming;
  sailing.innerHTML = data.sports.sailing;
  skiing.innerHTML = data.sports.skiing;
  food.innerHTML = data.food;
  drink.innerHTML = data.drink;
  cleaning.innerHTML = data.cleaning;
}
