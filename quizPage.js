//sessionStorage.setItem("quiztype","js")
var arrq;
var arra1=[]
var arra2=[]
var arra3=[]
var arra4=[]
var arrCorrect=[]
var arrUnCorrectA =[]
var arrCorrectA =[]



var mins=5;
var secs=mins*60;
function countdown() {
    setTimeout('Decrement()',60);
}
function Decrement() {
    if(document.getElementById) {
        minutes=document.getElementById("minutes");
        seconds=document.getElementById("seconds");
        if(secs<59) {
    if(secs<10){
      document.getElementById("seconds").textContent="0"+secs;
    }
    else if(secs>=10){
      document.getElementById("seconds").textContent=secs;
    }
    document.getElementById("minutes").textContent="00"
        }
        else {
            document.getElementById("minutes").textContent=getminutes();
            document.getElementById("seconds").textContent=getseconds();
        }
        if(mins<1) {
            document.getElementById("minutes").style.color="red";
            document.getElementById("seconds").style.color="red";
        }
        if(secs<0) {
            
            sessionStorage.setItem("correctanswer",JSON.stringify(arrCorrectA))
            sessionStorage.setItem("UNcorrectanswer",JSON.stringify(arrUnCorrectA))
            alert('time up');
            document.getElementById("minutes").textContent="00";
            document.getElementById("seconds").textContent="00";
            window.location.assign("./result.html");
        }
        else {
            secs--;
            setTimeout('Decrement()',1000);
        }
    }
}

function getminutes() {
    mins=Math.floor(secs/60);
if(mins<10){
  mins = "0"+mins
}
    return mins;
}

function getseconds() {
    let sec = secs-Math.round(mins*60);
    if(sec<10){
        sec = "0"+sec
      }

    return  sec;
}

let qtype =JSON.parse(sessionStorage.getItem("info")).position

if(qtype =="HTML"){
arrq=["The <title> element must be located inside","Which tag is used to create a hyperlink?","What is the HTML element used to display an image?","Which is the correct HTML tag for a new paragraph?","What is the HTML form input used to send information of the form to the server?","How to write an HTML Comment ?","Which of the following answer options is not an HTML attribute?","What is the HTML attribute used to reference the location of an image inside the <img> tag?","Which of the following table tags is used to create a table data cell?","Which element is not empty?"]

arra1=["the <head> element","<a>","<image>","<paragraph>","<input type='server'>","// This is an HTML comment","alt","href","<td>","<br>"]
arra2=["the <body> element","<img>","<picture>","<p>","<input type='submit'>","/* This is an HTML comment */","target","link","<th>","<p>"]
arra3=["the <form> element","<dl>","<img>","<pre>","<input type='send'>","<!-- This is an HTML comment -->","fontSize","location","<tr>","<img>"]
arra4=["the <div> element","<link>","<pic>","<article>","<input type='mail'>","< This is an HTML comment >","id","src","<table>","<hr>"]
arrCorrect =[1,1,3,2,2,3,3,4,1,2]
}
if(qtype =="CSS"){
arrq=["Which of the following is NOT a CSS box model property","Which of the following selectors has the highest specificity?","Which property can be used to vertically center an element within its parent container?","Which of the following values can be used with the display property to hide an element from the page but keep its space ","Which CSS property can be used to make text italicized?","Which CSS property can be used to specify the spacing between lines of text?","Which CSS property can be used to create a shadow effect around an element?","Which of the following is NOT a CSS layout mode?","Which of the following CSS units is NOT relative?","Which of the following CSS values can be used to make an element sticky, so that it remains fixed in its position even when the page is scrolled?"]
arra1=["margin"," element selector","margin-top","none","font-style"," line-height","shadow"," block","em"," static"]
arra2=["padding","class selector","margin-bottom","block","font-size"," text-align","text-shadow","inline"," rem","relative"]
arra3=["border","ID selector","margin-left","inline","font-weight"," letter-spacing","box-shadow"," flex"," px","absolute"]
arra4=["text-align","universal selector","none of the above","hidden","font-color"," word-spacing","outline"," margin"," vw","fixed"]
arrCorrect =[4,3,4,4,1,1,3,4,3,4]

}
if(qtype =="JavaScript"){
arrq = [" What is JavaScript?",
    "Which of the following is correct about JavaScript?",
    "Arrays in JavaScript are defined by which of the following statements?",
    " Which of the following is not javascript data types?",
    " Which of the following is not a framework?"]

arra1 = ["JavaScript is a scripting language used to make the website interactive", " JavaScript is an Object-Based language ",    " It is an ordered list of obj"    ,  " Null type"   ,  " JavaScript .NET"   ]
arra2 = ["JavaScript is an assembly language used to make the website interactive"  , "JavaScript is not an Object-Based language"    , "It is an ordered list of values"    ,  " Undefined type"    , "JavaScript"    ]   
arra3 = ["JavaScript is a compiled language used to make the website interactive",   "JavaScript is an Object-Oriented language"    , "It is an ordered list of string"    ,  "Number type"    , "Cocoa JS"    ]
arra4 = [" None of the mentioned",   " JavaScript is a High-level language", "It is an ordered list of functions",    "All of the mentioned","jQuery"]                                                                       
arrCorrect = [1, 1, 2, 4, 2]
}    





const ques = document.getElementById("ques");
const ans1L = document.getElementById("ans1L");
const ans2L = document.getElementById("ans2L");
const ans3L = document.getElementById("ans3L");
const ans4L = document.getElementById("ans4L");


const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

function onChecked(){
    if(ans1.checked==true){
        ans1L.style.backgroundColor = "#f5f3b4";
        ans2L.style.backgroundColor = "#d1d1d1";
        ans3L.style.backgroundColor = "#d1d1d1";
        ans4L.style.backgroundColor = "#d1d1d1";
    }
    if(ans2.checked==true){
        ans1L.style.backgroundColor = "#d1d1d1";
        ans2L.style.backgroundColor = "#f5f3b4";
        ans3L.style.backgroundColor = "#d1d1d1";
        ans4L.style.backgroundColor = "#d1d1d1";
    }
    if(ans3.checked==true){
        ans1L.style.backgroundColor = "#d1d1d1";
        ans2L.style.backgroundColor = "#d1d1d1";
        ans3L.style.backgroundColor = "#f5f3b4";
        ans4L.style.backgroundColor = "#d1d1d1";
    }
    if(ans4.checked==true){
        ans1L.style.backgroundColor = "#d1d1d1";
        ans2L.style.backgroundColor = "#d1d1d1";
        ans3L.style.backgroundColor = "#d1d1d1";
        ans4L.style.backgroundColor = "#f5f3b4";
    }
}

ques.textContent = arrq[0];
ans1L.textContent = arra1[0];
ans2L.textContent = arra2[0];
ans3L.textContent = arra3[0];
ans4L.textContent = arra4[0];

var questionNumber = 0

document.getElementById("quesN").textContent="Question "+(questionNumber+1)+"/"+arrq.length

function next(){
    if(questionNumber>= arrq.length-1){
        correct()
        alert("exam is finish")
        sessionStorage.setItem("correctanswer",JSON.stringify(arrCorrectA))
        sessionStorage.setItem("UNcorrectanswer",JSON.stringify(arrUnCorrectA))
        //console.log(arrUnCorrectA)
        //console.log(arrCorrectA)
        window.location.assign("./result.html");
        return false
    }
    
    

    if(!ans1.checked && !ans2.checked && !ans3.checked && !ans4.checked){
        document.getElementById("Errormessage").style.visibility = "visible"
        return false
    }
    document.getElementById("Errormessage").style.visibility = "hidden"
    ans1L.style.backgroundColor = "#d1d1d1";
    ans2L.style.backgroundColor = "#d1d1d1";
    ans3L.style.backgroundColor = "#d1d1d1";
    ans4L.style.backgroundColor = "#d1d1d1";

    correct()


    questionNumber += 1
    ques.textContent = arrq[questionNumber];
    ans1L.textContent = arra1[questionNumber];
    ans2L.textContent = arra2[questionNumber];
    ans3L.textContent = arra3[questionNumber];
    ans4L.textContent = arra4[questionNumber];
    ans1.checked=ans2.checked=ans3.checked=ans4.checked=false;

    if(questionNumber>= arrq.length-1){
document.getElementById("nextbutton").value = "Finish"
    }
    document.getElementById("quesN").textContent="Question "+(questionNumber+1)+"/"+arrq.length

}

function correct(){
    if(ans1.checked && arrCorrect[questionNumber]!=1){
        arrUnCorrectA.push(questionNumber);
        arrUnCorrectA.push(1);

    }
    else if(ans2.checked && arrCorrect[questionNumber]!=2){
        arrUnCorrectA.push(questionNumber);
        arrUnCorrectA.push(2);
    }
    else if(ans3.checked && arrCorrect[questionNumber]!=3){
        arrUnCorrectA.push(questionNumber);
        arrUnCorrectA.push(3);
    }
    else if(ans4.checked && arrCorrect[questionNumber]!=4){
        arrUnCorrectA.push(questionNumber);
        arrUnCorrectA.push(4);
    }

    else{
        arrCorrectA.push(questionNumber);
    }
}

function signout(){
    
    sessionStorage.clear();
    window.location.href="./index.html";
}

let Info= JSON.parse( sessionStorage.getItem("info"));

let welcomeMessage=document.getElementById("welcomUser").innerHTML=`Welcome ${Info.username}`;
console.log( welcomeMessage);

