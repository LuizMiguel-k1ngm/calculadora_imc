const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = weight / (height * height).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    description = "Abaixo do peso!";
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = "Normal";
  } else if (bmi >= 25 && bmi <= 40) {
    description = "Não vai ver papai noel esse ano!!!";
  } else {
    description = "Deus te ajude";
  }
  document.getElementById("description").textContent = description;
});
