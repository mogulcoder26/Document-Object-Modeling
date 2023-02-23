Dom:

- getElementsById() :Grabs ID.
- get ElementsByClassName() :Grabs by class name.
- getElementsByTagName() : grabs all the elemts with the tag name and puts them in an array.
- querySelector() : Single Element.
- querySelectorAll() : grabs all elements with the attribute in an array .

# NOTE: use to select through css with methods that returns arrays,we also mention the index no. 

```
const title = document.querySelector("#main-heading);
console.log(title);
title.style.color ="red";

```

Through List items:

```
const listItems =document.querySelectorAll(".list-items");
listItems.style.color ='green';


//can also do:
for(var i=0;i<=5;i++){
    listItems[i].style.color='green';
}

```

# Creating Elements:

```
const ul =document.querySelector('ul');
const li =document.querySelector('li');

//adding:
ul.append(li);

//Modifying Text :

1) innerHTML
2) innerText
3) textContent

```















































In most cases, it is the same as parentNode. The only difference comes when a node's parentNode is not an element. If so, parentElement is null.

As an example:

```

document.body.parentNode; // the <html> element
document.body.parentElement; // the <html> element

document.documentElement.parentNode; // the document node
document.documentElement.parentElement; // null

(document.documentElement.parentNode === document);  // true
(document.documentElement.parentElement === document);  // false

```









