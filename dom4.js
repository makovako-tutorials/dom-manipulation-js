var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");
var filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hello');
    
    const newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete'
    deleteButton.appendChild(document.createTextNode('X'))

    li.appendChild(deleteButton);

    itemlist.appendChild(li);
})

//delete items

itemlist.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
})

// filter items

filter.addEventListener('keyup', (e) => {
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');

    Array.from(items).forEach( item => {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';

        } else {
            item.style.display = 'none'
        }
    })
})