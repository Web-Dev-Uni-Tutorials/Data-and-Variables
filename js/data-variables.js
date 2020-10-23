/*
1.
a) Write a JavaScript program prompts the user for their name. The program should then output this information using a console.log().
b) Add another line of code that will prompt the user for their favourite colour. The program should then output the user's name and choice of colour using a console.log().
c) Modify the program so that instead of a console.log(), it changes the background colour of the page to the colour the user has chosen.
*/

const userName=prompt("What is your name?");
const favColour=prompt("What is your favourite colour");
console.log(`Your name is ${userName} and your favourite colour is ${favColour}.`);
document.body.style.backgroundColor=favColour;

/*
2. Write a JavaScript program that will
a) Ask the user for two numbers, calculate the total of the two numbers, and display the total for the user using a console.log().
b) Modify the above code so that will work out the average of these two numbers and display this value for the user.
*/

const num1 = parseInt(prompt("Tell me a number?"));
const num2 = parseInt(prompt("Tell me another number"));
const total = num1+num2;
console.log(`The total of ${num1} + ${num2} is ${total}`);
const average = total/2;
console.log(`The average of ${num1} + ${num2} is ${average}`);

/*
3. Write a program that will convert a measurement in inches to centimetres (1 inch is 2.54 centimetres).
*/
const inches = parseInt(prompt("Tell me a number?"));
const cms = inches*2.54;
console.log(`${inches} inches is ${cms}cms.`);


/*
4. Create a 'design a page' application. A series of prompt boxes should ask the user for two colours, and their favourite font .  The content of the page should then be displayed in the user's choice of colour and font. The background colour of the page should be change to the user's second choice of colour.
*/

const col1=prompt("Tell me a colour?");
const col2=prompt("Tell me another colour?");
const font=prompt("Tell me a font?");
document.body.style.color=col1;
document.body.style.backgroundColor=col2;
document.body.style.fontFamily=font;


/*
5.    The module CFT2111 is assessed by two pieces of assessment. HTML quizzes weighted at 40% and a JavaScript coursework weighted at 60%. Write a JavaScript application that will ask the user for their two scores. The program should then feedback to the user with an overall percentage for the module, here's some example input and output for the program.

What is your HTML assessment score? 56
What is your JavaScript coursework score? 42
Your overall mark for the module is 47

Have a look on https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/round for information on how to round numbers.
*/

const html=parseInt(prompt("Tell me your HTML mark?"));
const js=parseInt(prompt("Tell me your JavaScript mark"));
const overall=Math.round(html*0.4+js*0.6);
console.log(`Your overall mark for the module is ${overall}`);
