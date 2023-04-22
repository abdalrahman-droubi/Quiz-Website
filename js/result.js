const resultBox = document.getElementById("cont");

const iconResult = document.getElementById("icon");
const text1 = document.getElementById("stautsText1");
const text2 = document.getElementById("stautsText2");
const percantage = document.getElementById("percantage");
const correctAnswers = document.getElementById("correctNumberQus");
const wrongAnswers = document.getElementById("wrongNumberQus");

const wrongAns = document.getElementById("wrongAns");

let arrCorrectAns = JSON.parse(sessionStorage.getItem("correctanswer"));
let arrUnCorrect = JSON.parse(sessionStorage.getItem("UNcorrectanswer"));
let arra1;
let arra2;
let arra3;
let arra4;
let arrCorrect;
let arrq;

let qtype = JSON.parse(sessionStorage.getItem("info")).position;

if (qtype == "HTML") {
  arrq = [
    "The <title> element must be located inside",
    "Which tag is used to create a hyperlink?",
    "What is the HTML element used to display an image?",
    "Which is the correct HTML tag for a new paragraph?",
    "What is the HTML form input used to send information of the form to the server?",
    "How to write an HTML Comment ?",
    "Which of the following answer options is not an HTML attribute?",
    "What is the HTML attribute used to reference the location of an image inside the <img> tag?",
    "Which of the following table tags is used to create a table data cell?",
    "Which element is not empty?",
  ];

  arra1 = [
    "the <head> element",
    "<a>",
    "<image>",
    "<paragraph>",
    "<input type='server'>",
    "// This is an HTML comment",
    "alt",
    "href",
    "<td>",
    "<br>",
  ];
  arra2 = [
    "the <body> element",
    "<img>",
    "<picture>",
    "<p>",
    "<input type='submit'>",
    "/* This is an HTML comment */",
    "target",
    "link",
    "<th>",
    "<p>",
  ];
  arra3 = [
    "the <form> element",
    "<dl>",
    "<img>",
    "<pre>",
    "<input type='send'>",
    "<!-- This is an HTML comment -->",
    "fontSize",
    "location",
    "<tr>",
    "<img>",
  ];
  arra4 = [
    "the <div> element",
    "<link>",
    "<pic>",
    "<article>",
    "<input type='mail'>",
    "< This is an HTML comment >",
    "id",
    "src",
    "<table>",
    "<hr>",
  ];
  arrCorrect = [1, 1, 3, 2, 2, 3, 3, 4, 1, 2];
}
if (qtype == "CSS") {
  arrq = [
    "Which of the following is NOT a CSS box model property",
    "Which of the following selectors has the highest specificity?",
    "Which property can be used to vertically center an element within its parent container?",
    "Which of the following values can be used with the display property to hide an element from the page but keep its space ",
    "Which CSS property can be used to make text italicized?",
    "Which CSS property can be used to specify the spacing between lines of text?",
    "Which CSS property can be used to create a shadow effect around an element?",
    "Which of the following is NOT a CSS layout mode?",
    "Which of the following CSS units is NOT relative?",
    "Which of the following CSS values can be used to make an element sticky, so that it remains fixed in its position even when the page is scrolled?",
  ];
  arra1 = [
    "margin",
    " element selector",
    "margin-top",
    "none",
    "font-style",
    " line-height",
    "shadow",
    " block",
    "em",
    " static",
  ];
  arra2 = [
    "padding",
    "class selector",
    "margin-bottom",
    "block",
    "font-size",
    " text-align",
    "text-shadow",
    "inline",
    " rem",
    "relative",
  ];
  arra3 = [
    "border",
    "ID selector",
    "margin-left",
    "inline",
    "font-weight",
    " letter-spacing",
    "box-shadow",
    " flex",
    " px",
    "absolute",
  ];
  arra4 = [
    "text-align",
    "universal selector",
    "none of the above",
    "hidden",
    "font-color",
    " word-spacing",
    "outline",
    " margin",
    " vw",
    "fixed",
  ];
  arrCorrect = [4, 3, 4, 4, 1, 1, 3, 4, 3, 4];
}
if (qtype == "JavaScript") {
  arrq = [
    " What is JavaScript?",
    "Which of the following is correct about JavaScript?",
    "Arrays in JavaScript are defined by which of the following statements?",
    " Which of the following is not javascript data types?",
    " Which of the following is not a framework?",
  ];

  arra1 = [
    "JavaScript is a scripting language used to make the website interactive",
    " JavaScript is an Object-Based language ",
    " It is an ordered list of obj",
    " Null type",
    " JavaScript .NET",
  ];
  arra2 = [
    "JavaScript is an assembly language used to make the website interactive",
    "JavaScript is not an Object-Based language",
    "It is an ordered list of values",
    " Undefined type",
    "JavaScript",
  ];
  arra3 = [
    "JavaScript is a compiled language used to make the website interactive",
    "JavaScript is an Object-Oriented language",
    "It is an ordered list of string",
    "Number type",
    "Cocoa JS",
  ];
  arra4 = [
    " None of the mentioned",
    " JavaScript is a High-level language",
    "It is an ordered list of functions",
    "All of the mentioned",
    "jQuery",
  ];
  arrCorrect = [1, 1, 2, 4, 2];
}
function createCard(arr) {
  for (let x = 0; x < arr.length; x += 2) {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h3");
    title.textContent = "Incorrect questions :";
    card.append(title);
    let question = document.createElement("p");
    question.textContent = arrq[arr[x]]; //
    question.className = "question";
    card.append(question);

    let answers = document.createElement("ul");

    let item1 = document.createElement("li");
    item1.textContent = arra1[arr[x]];
    // item1.className = "correct";
    let item2 = document.createElement("li");
    item2.textContent = arra2[arr[x]];
    let item3 = document.createElement("li");
    item3.textContent = arra3[arr[x]];
    let item4 = document.createElement("li");
    item4.textContent = arra4[arr[x]];
    switch (arr[x + 1]) {
      case 1:
        item1.className = "wrong";
        break;
      case 2:
        item2.className = "wrong";
        break;
      case 3:
        item3.className = "wrong";
        break;
      case 4:
        item4.className = "wrong";
        break;
    }
    switch (arrCorrect[arr[x]]) {
      case 1:
        item1.className = "correct";
        break;
      case 2:
        item2.className = "correct";
        break;
      case 3:
        item3.className = "correct";
        break;
      case 4:
        item4.className = "correct";
        break;
    }

    answers.append(item1, item2, item3, item4);
    card.append(answers);
    wrongAns.appendChild(card);
  }
}

let num = (arrCorrectAns.length / arrq.length) * 100;
if (num >= 50) {
  resultBox.classList.add("pass");
  iconResult.classList.add("fa-face-smile");
  iconResult.style.color = "#07b38c";
  percantage.textContent = `${num}%`;
  correctAnswers.textContent = arrCorrectAns.length; //
  wrongAnswers.textContent = arrUnCorrect.length / 2; //
} else {
  resultBox.classList.add("fail");
  iconResult.classList.add("fa-face-frown");
  iconResult.style.color = "red";
  text1.textContent = "Sorry";
  text1.style.color = "red";
  text2.textContent = "You Are Fail";
  text2.style.color = "red";
  percantage.textContent = `${num}%`; ///
  percantage.style.borderColor = "red";
  percantage.style.color = "red";
  correctAnswers.textContent = arrCorrectAns.length; //
  wrongAnswers.textContent = arrUnCorrect.length / 2; //
}

createCard(arrUnCorrect);

function signout(){
    
  sessionStorage.clear();
  window.location.href="../index.html";
}

let Info= JSON.parse( sessionStorage.getItem("info"));

let welcomeMessage=document.getElementById("welcomUser").innerHTML=`Welcome ${Info.username}`;
console.log( welcomeMessage);

