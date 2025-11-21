//create h h1 element using js

const element1=document.createElement('h1')
element1.textContent="hello coder army";
element1.className='element';
element1.id = "first";

const root = document.getElementById('root')
root.append(element1)

