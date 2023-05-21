const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById("name");
  const nameInput = name.value;
  alert("Sumbitted " + nameInput);
});
