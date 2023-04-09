const resultBox = document.getElementById('cont');

const iconResult = document.getElementById('icon');
const text1 = document.getElementById('stautsText1');
const text2 = document.getElementById('stautsText2');
const percantage = document.getElementById('percantage');
const correctAnswers = document.getElementById('correctNumberQus');
const wrongAnswers = document.getElementById('wrongNumberQus');

const wrongAns = document.getElementById('wrongAns');



let q = [
    {
        question: ' 2 + 2 = ',
        answers: ['2', '4', '5', '6'],
        correct: 1,
        wrong: 0

    }
    ,
    {
        question: ' 5 + 2 = ',
        answers: ['2', '4', '5', '7'],
        correct: 3,
        wrong: 1
    }
    ,
    {
        question: ' 5 + 2 = ',
        answers: ['2', '4', '5', '7'],
        correct: 3,
        wrong: 1
    }
]

function createCard(arr) {
    for (let i = 0; i < arr.length; i++) {

        let card = document.createElement('div');
        card.className = 'card';

        let title = document.createElement('h3');
        title.textContent = 'Incorrect questions :';
        card.appendChild(title)


        let question = document.createElement('p');
        question.className = 'question';
        question.textContent = arr[i].question;
        card.appendChild(question)


        let answers = document.createElement('ul');
        for (let j = 0; j < arr[i].answers.length; j++) {
            let item = document.createElement('li');
            item.textContent = arr[i].answers[j];
            if (j == arr[i].correct) {
                item.className = 'correct';
            }
            else if (j == arr[i].wrong) {
                item.className = 'wrong'
            } else {
                item.className = "dis"
            }
            answers.appendChild(item);
        }

        card.append(answers);
        wrongAns.appendChild(card);
    }
}


let num = ((5-q.length)/5)*100;
if (num > 50) {
    resultBox.classList.add('pass');
    iconResult.classList.add("fa-face-laugh-beam")
    iconResult.style.color = '#07b38c';
    percantage.textContent = `${num}%`;
    correctAnswers.textContent = 5-q.length; //
    wrongAnswers.textContent = q.length //  
}

else {
    resultBox.classList.add('fail');
    iconResult.classList.add('fa-face-frown');
    iconResult.style.color = 'red';
    text1.textContent = 'Sorry';
    text1.style.color = 'red';
    text2.textContent = 'You Are Fail';
    text2.style.color = 'red';
    percantage.textContent = `${num}%`; ///
    percantage.style.borderColor = 'red';
    percantage.style.color = 'red';
    correctAnswers.textContent = 5-q.length; //
    wrongAnswers.textContent = q.length //  
}


createCard(q);