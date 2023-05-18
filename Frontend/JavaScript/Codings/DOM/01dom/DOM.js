// In JavaScript, the Document Object Model (DOM) is a programming interface that represents the structure of an HTML or XML document as a hierarchical tree-like structure.
// It provides a way to interact with and manipulate the content, structure, and style of web documents.

// The DOM represents each element of an HTML or XML document as an object, and these objects are organized in a tree structure, with the document object at the root.
// Each element, such as <div>, <p>, or <span>, is represented by a node in the DOM tree.

// The DOM provides a set of properties, methods, and events that allow JavaScript code to interact with the HTML or XML document. 
// It serves as a bridge between web content and scripting languages like JavaScript, enabling dynamic web page interactions and modifications.

// Accessing an element by its ID
const element = document.getElementById('myElement');

// Modifying the element's content
element.textContent = 'Hello, World!';

// Modifying the element's style
element.style.color = 'red';