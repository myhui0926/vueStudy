//main.js
const greeter = require('./greeter');
const test = require('./test');
const sayhello = require('./sayHello');
document.querySelector('#root').appendChild(greeter());
document.querySelector('#test').appendChild(test());
document.querySelector('#sayHello').appendChild(sayhello());