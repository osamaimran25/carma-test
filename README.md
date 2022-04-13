
##### Node Version
v16.14.2

##### Setup project
``` npm install ```
##### Encryption
For encryption I have use cipher of Node js crypto with ""aes-256-cbc"" Algorithan which widely used for encryption and consider as more safe and easy to handle.
##### Luhn algorithm 
``` I use https://www.npmjs.com/package/luhn-js for validating the card number it is easy to use and give you different methods ```

###### Question# 01
```
for (var i = 0; i < 100; i++) {
setTimeout(function() {
console.log(i);
}, 200);

}

OUTPUT:
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100
100

Reason:
the calls to setTimeout() — take almost no time at all. which is telling the system,  call this function after 200 milliseconds" 
will return almost immediately, as the process of installing the timeout request in the timer queue is very fast.

```
###### Question# 02
```
(async function() {
function waitForMe() {
return new Promise(function(resolve, reject) {
setTimeout(function() {
resolve("hello");
}, 200);
});
}
const result = await waitForMe();
console.log(result);
})();

// it is an IIFE.
OUTPUT:
hello
```
###### Question# 03
``` var a; // var is use to declares a variable globally, or locally to an entire function regardless of block scope in other words it is avalable
to entire function.
let b;// it is a use to declare block scope variable it doesnt declare globally in other words it is use to declare variable to an expression or block.
const c; // it is use to declare a variable to define a variable which value do not change over the program 
```
###### Question# 03

```
var arr = [];
module.exports = arr;

We got a module using it: // module 01
var test = require("./test");
test.push("hello");
console.log(JSON.stringify(test));

We got another module using it later:// moduule 02
var test = require("./test");
test.push("another");
console.log(JSON.stringify(test));
```
OUTPUT:
```  in 1 module we get ["hello"]
 in module 2 we get ["another"] because each module use it own instance for a test.js modeule ```
