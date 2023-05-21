# Event Listener in JavaScript

For official documentation [EventListener](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

In JavaScript, event listeners are **used to handle and respond to events triggered by user interactions or other actions. Event listeners allow you to execute specific code when an event occurs on a DOM element.** Here's an example of how to add an event listener 

```javascript
// Get the element by its ID
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
});
```
In this example:

1, We retrieve the button element using getElementById() with the ID 'myButton'.

2, We add an event listener to the button using addEventListener(). It takes two arguments: the event type ('click' in this case) and a callback function to be executed when the event occurs.

3, Inside the callback function, you can include the code you want to run when the event is triggered. In this case, it logs a message to the console when the button is clicked.


The addEventListener() method allows you to listen for various types of events, such as 'click', 'mouseover', 'keydown', and many more. You can attach event listeners to different DOM elements, such as buttons, links, input fields, or the entire document.

Here's another example that demonstrates attaching an event listener to the document's 'keydown' event and handling the event:


```javascript
document.addEventListener('keydown', function(event) {
  // Code to be executed when a key is pressed
  console.log('Key pressed:', event.key);
});
```
In this example:

* We add an event listener to the document object.
The event type is 'keydown', which triggers when a key is pressed.
* The callback function receives an event object as an argument. You can access properties of this object to get information about the event, such as the key that was pressed (event.key).

**Summary:**

Event listeners provide a powerful mechanism to make your JavaScript code interactive and responsive to user actions. They allow you to define custom behaviors and respond to events happening within the browser environment.
