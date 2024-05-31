## Data and Variables

### Variables
There are a number of different ways to create variables

* *var* e.g.
```javascript
var price=24.50;
```
* *let*  e.g.
```javascript
let sunnyInHuddersfield=false;
```
* *const* e.g.
```javascript
const moduleCode="CHT2531";
```
* *var* is used for function scoped variables.
* *let* is used for block scoped variables.
* *const* is used for a variable that won't change.

The idea of scope relates to where the variable can be seen or used. See https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var for an in-depth discussion.

As a general rule:
  * If the variable won't need to change value use *const*.
  * If the variable needs to change value use *let*.
  * Try and avoid using *var*, but you might need it sometimes if you run into scope problems.

### Mathematical Operations

* Mathematical operators can be used to manipulate numeric data
* Mathematical Operators
  * \+ addition
  * \- subtraction
  * \* multiplication
  * \/ division
  * ++ incremental operator (adds one)

Here are some examples:
```javascript
const newvar = 3;
let agevar = 21;
agevar = agevar + newvar;
console.log(agevar); //outputs 24
agevar = agevar+6;
agevar = agevar-5;
console.log(agevar); //outputs 25
agevar = agevar*2;
agevar = agevar/5;
console.log(agevar); //outputs 10
agevar++;
console.log(agevar); //outputs 11
let anothervar = (agevar-1) * newvar;
console.log(anothervar); //outputs 30
```
### Concatenation
* The \+ sign is known as the concatenate operator when it is used with string data.
* The concatenate operator joins pieces of text together.
```javascript
const startName = "Bill ";
const endName = "Pill";
const completeName=startName+endName;
console.log(completeName); //outputs Bill Pill
```
```javascript
const jobName="gardener";
console.log("I am a "+jobName+". Gardening is one of the UK's happiest jobs."); //I am a gardener. Gardening is the UK’s happiest jobs.
```
### Template Literals
* These are new to ES2015
* Template literals are created using the back tick (`) character. This is usually key in the top-left corner of the keyboard (below escape) .
* Place holders ${expression} allow us to easily embed variables in a string.

```javascript
const jobName="gardener";
console.log(`I am a ${jobName}. Gardening is one of the UK's happiest jobs.`);//I am a gardener. Gardening is the UK’s happiest jobs.
```
Here's another example
```javascript
const num1=10;
const num2=7;
const diff=num1-num2;
console.log(`${num1} - ${num2} = ${diff}`); // 10 - 7 = 3
```
