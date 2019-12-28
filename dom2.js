// parent, child and siblings

if (false) {
  var itemlist = document.querySelector("#items");

  console.log(itemlist.parentNode);

  console.log(itemlist.parentElement);

  console.log(itemlist.childNodes); // text node represents white space, line break, node list

  console.log(itemlist.children); // just the elements, html collection

  console.log(itemlist.firstChild); // it gives the text node, it includes whitespaces

  console.log(itemlist.firstElementChild); // this is the first element

  console.log(itemlist.lastChild); // it gives the text node, it includes whitespaces

  console.log(itemlist.lastElementChild); // this is the first element

  console.log(itemlist.nextSibling);

  console.log(itemlist.nextElementSibling);

  console.log(itemlist.previousSibling);

  console.log(itemlist.previousElementSibling);
}

// Create element

var newDiv = document.createElement("div");

newDiv.className = "hello";

newDiv.id = "hello1";

newDiv.setAttribute("title", "hello-div");

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1)

console.log(newDiv);
