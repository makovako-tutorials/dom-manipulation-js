// EVENTS

if (false) {
  var button = document
    .getElementById("button")
    .addEventListener("click", () => {
      console.log("123");
    });

  var button = document
    .getElementById("button")
    .addEventListener("click", e => {
      console.log(e);
      console.log(e.target);
      console.log(e.target.id);
      console.log(e.target.className);
      console.log(e.target.classList);
      console.log(e.type); // type of event
      console.log(e.clientX); // position of client in window
      console.log(e.clientY);
      console.log(e.offsetX); // position of client in element
      console.log(e.offsetY);
      console.log(e.altKey); // if alt was pressed while event
      console.log(e.ctrlKey); // if ctrl was pressed while event
      console.log(e.shiftKey); // if shift was pressed while event
    });
}

// MOUSE EVENTS

var button = document.getElementById("button");

button.addEventListener("click", runEvent); // click
button.addEventListener("dblclick", runEvent); // double click
button.addEventListener("mouseup", runEvent);
button.addEventListener("mousedown", runEvent);

var box = document.getElementById("box");
box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);
box.addEventListener("mouseover", runEvent); // it also counts of any inner elements
box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent); // with offset i can track mouse position

var input = document.querySelector('input[type="text"]');
var form = document.querySelector("form");

input.addEventListener("keydown", e => {
  console.log(e.target.value);
});
input.addEventListener("keyup", e => {
  console.log(e.target.value);
});
input.addEventListener("keypress", e => {
  console.log(e.target.value);
});
input.addEventListener('focus',runEvent); // when it is docues/clicked, ready to type
input.addEventListener('blur',runEvent); // when clicked outside lost focus
input.addEventListener('paste',runEvent); // pasted sth into
input.addEventListener('cut',runEvent); // cutted something out
input.addEventListener('input',runEvent); // when done anything within input

var select = document.querySelector('select')

select.addEventListener('change', runEvent);

form.addEventListener('submit', (e) => {
    e.preventDefault(); // it submits to the page by default
    console.log(e.type);
    
});

function runEvent(e) {
  console.log(`EVENT TYPE ${e.type}`);
}
