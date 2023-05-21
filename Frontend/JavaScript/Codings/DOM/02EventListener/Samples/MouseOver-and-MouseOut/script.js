// to get the element
const hoveroverme = document.getElementsByClassName("mouseover-mouseout")[0];

hoveroverme.addEventListener("mouseover", function () {
  hoveroverme.textContent = "Mouse over me";
});

// Add event for mouse out
hoveroverme.addEventListener("mouseout", function () {
  hoveroverme.textContent = "Mouse out";
});
