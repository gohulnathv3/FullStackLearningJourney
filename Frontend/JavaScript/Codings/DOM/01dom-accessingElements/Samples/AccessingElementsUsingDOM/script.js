// Accessing the element by ID
var titleElement = document.getElementById("title");
titleElement.innerHTML = "Hello, JavaScript!";

// Accessing elements by class name
var paragraphs = document.getElementsByClassName("highlight");
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "black";
}

// Accessing the element by tag name
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  alert("Button clicked!");
});
