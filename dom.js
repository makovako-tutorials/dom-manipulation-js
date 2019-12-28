// EXAMINE DOCUMENT OBJECT

if (false) {
    console.dir(document)
    console.log(document.domain);
    console.log(document.URL);
    console.log(document.title);
    console.log(document.doctype);
    console.log(document.head);
    console.log(document.body);
    console.log(document.all);
    
    document.all[10].textContent = "Hello";
    
    console.log(document.forms);
    console.log(document.links);
    console.log(document.images);
    console.log(document);
}

// QUERING DOM
if (false){
    
    console.log(document.getElementById('header-title'));
    
}

// Modifing elements
if (false) {
    const header = document.getElementById('header-title');
    
    header.textContent = 'Hello'; // does not take styles into account, like display none will not work here
    header.innerText = "Hello text"; // display none works here
    header.innerHTML = "<h3>Hi</h3>";
    header.style.borderBottom = 'solid 3px black'
    const lgi = document.getElementsByClassName('list-group-item');
    Array.prototype.map.call(lgi, element => element.style.backgroundColor = 'yellow');
    lgi = document.getElementsByTagName('li');
    console.log(lgi);

}

//queryselector - grabs first one
if (false) {

    const header = document.querySelector('#main-header');//takes any css selector
    header.style.borderBottom = 'solid 4px gray'
    
    var input = document.querySelector('input');
    input.value = 'Hello World';
    
    var submit = document.querySelector('input[type="submit"]');
    submit.value = 'Send';
    
    var item = document.querySelector('.list-group-item');
    item.style.color = 'red';
    
    var lastItem = document.querySelector('.list-group-item:last-child');
    lastItem.style.color = 'blue';
    
    var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    secondItem.style.color = 'green';
}

//queryselectorall - grabs more then one thing

const titles = document.querySelectorAll('.title');
console.log(titles); // nodelist, can run array functions on them
titles[0].textContent = 'hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
Array.prototype.map.call(odd, item => item.style.color = 'red');




