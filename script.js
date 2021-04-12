var startBtn = document.querySelector("#start");
var highScoresPage = document.querySelector("#vhs");
var seconds = 50;

function startTimer(stop) {
    if (stop === 'stop') {
        clearInterval(interval);
    } else {
        var interval = setInterval(() => {
            seconds = seconds - 1;
            console.log(seconds)
            document.querySelector('#time').innerHTML = seconds;
            if (seconds <= 0){
                console.log('hit the 0')
                clearInterval(interval);
                done('anything');
            }
        }, 1000);
    }
}

document.querySelector("#start").addEventListener("click", startTimer)

function checkAnswer(bool, func) {
    if (!bool) {
        seconds = seconds - 10;
    }
    

    if (document.querySelector('.message-p')) {
        document.querySelectorAll('.message-p').forEach(el => {
            el.classList.add('no-show');
        })
    }
    var message = document.createElement("p");
    message.classList.add('message-p')
    var messageDiv = document.querySelector(".message");
    if (bool===true){
        message.innerHTML = "Correct!"
        messageDiv.appendChild(message);
        var btnDelay = document.querySelectorAll(".btn")
        btnDelay.forEach(element=>{
            element.disabled=true
        } );
    }
    else {
        message.innerHTML = "Incorrect!"
        messageDiv.appendChild(message);
        var btnDelay = document.querySelectorAll(".btn")
        btnDelay.forEach(element=>{
            element.disabled=true
        } );
    }
    setTimeout(() => {
        if (func === 'q1') {
            questionTwo("numberTwo");
            document.querySelectorAll(".btn-1").forEach(el => {
                el.classList.add("no-show");
            }); 
            message.classList.add("no-show");
        } else if (func === 'q2') {
            questionThree("numberThree");
            document.querySelectorAll(".btn-2").forEach(el =>{
                el.classList.add("no-show");
            });
            message.classList.add("no-show");
        } else if (func === 'q3') {
            questionFour("numberFour");
            document.querySelectorAll(".btn-3").forEach(el => {
                el.classList.add("no-show");
            });
            message.classList.add("no-show");
        } else if (func === 'q4') {
            questionFive("numberFive");
            document.querySelectorAll(".btn-4").forEach(el => {
                el.classList.add("no-show");
            });
            message.classList.add("no-show");
        } else if (func === 'q5') {
            startTimer('stop')
            done("enterScore");
            document.querySelectorAll(".btn-5").forEach(el => {
                el.classList.add("no-show");
            })
            message.classList.add("no-show");
        }
        
    }, 2000)
}


function questionOne(called) {
    console.log("text");
    console.log(document.getElementById("#title"));
    document.getElementById("title").innerHTML = "What Data Type is not supported by JavaScript?"; 
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    if (called === 'tryAgain') {
        document.querySelector('.scoresC').classList.add('no-show');
        var hsBtnArray = document.querySelectorAll('.hsBtn');
        hsBtnArray.forEach(element=> {
            element.classList.add('no-show');
        });
        
    };
    
    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button"); 
    oneBtn.innerHTML = "Number";
    oneBtn.classList.add("btn","btn-1");
    oneBtn.addEventListener("click", () => checkAnswer(false, 'q1'));

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Boolean";
    twoBtn.classList.add("btn","btn-1");
    twoBtn.addEventListener("click", () => checkAnswer(false,'q1'));

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "String";
    threeBtn.classList.add("btn","btn-1");
    threeBtn.addEventListener("click",() => checkAnswer(false, 'q1'));

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "Positive";
    fourBtn.classList.add("btn","btn-1");
    fourBtn.addEventListener("click",() => checkAnswer(true, 'q1'));

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);

    document.getElementById("vhs").disabled = true;
};


function questionTwo(called) {

    if (called === "numberTwo") {
        document.querySelectorAll(".btn-1").forEach(el => {
            el.classList.add("no-show");
        });
    };

    document.getElementById("title").innerHTML = "True or False: JavaScript is a case-sensitive language?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "True";
    oneBtn.classList.add("btn", "btn-2");
    oneBtn.addEventListener("click", () => checkAnswer(true, 'q2'));

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "False";
    twoBtn.classList.add("btn", "btn-2");
    twoBtn.addEventListener("click", () => checkAnswer(false, 'q2'));

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
};

function questionThree(called) {

    if (called === "numberThree") {
        document.querySelectorAll(".btn-1").forEach(el => {
            el.classList.add("no-show");
        });
    };
    document.getElementById("title").innerHTML = "Which of the following is a variable scope in JavaScript?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Local";
    oneBtn.classList.add("btn", "btn-3");
    oneBtn.addEventListener("click", () => checkAnswer(true, 'q3'));

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Server";
    twoBtn.classList.add("btn", "btn-3");
    twoBtn.addEventListener("click", () => checkAnswer(false, 'q3'));

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "Storage";
    threeBtn.classList.add("btn", "btn-3");
    threeBtn.addEventListener("click", () => checkAnswer(false, 'q3'));

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "World";
    fourBtn.classList.add("btn", "btn-3");
    fourBtn.addEventListener("click", () => checkAnswer(false, 'q3'));

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);
};

function questionFour(called) {

    if (called === "numberFour") {
        document.querySelectorAll(".btn-1").forEach(el => {
            el.classList.add("no-show");
        });
    };

    document.getElementById("title").innerHTML = "Which of the following is NOT a way JavaScript can be involved in an HTML file?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Inline";
    oneBtn.classList.add("btn", "btn-4");
    oneBtn.addEventListener("click", () => checkAnswer(false, 'q4'));

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Internal";
    twoBtn.classList.add("btn", "btn-4");
    twoBtn.addEventListener("click", () => checkAnswer(false, 'q4'));

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "External";
    threeBtn.classList.add("btn", "btn-4");
    threeBtn.addEventListener("click", () => checkAnswer(false, 'q4'));

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "Offline";
    fourBtn.classList.add("btn", "btn-4");
    fourBtn.addEventListener("click", () => checkAnswer(true, 'q4'));

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);
};

function questionFive(called) {
    if (called === "numberFive") {
        document.querySelectorAll(".btn-1").forEach(el => {
            el.classList.add("no-show");
        });
    };

    document.getElementById("title").innerHTML = "True or False: Angular is a JavaScript framework?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "True";
    oneBtn.classList.add("btn", "btn-5");
    oneBtn.addEventListener("click", () => checkAnswer(true, 'q5'));

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "False";
    twoBtn.classList.add("btn", "btn-5");
    twoBtn.addEventListener("click", () => checkAnswer(false, 'q5'));

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
};

function done(called) {

    if (called === "enterScore") {
        document.querySelectorAll(".btn-1").forEach(el => {
            el.classList.add("no-show");
        });
    };

    if (called === 'anything') {
        document.querySelectorAll('.btn-1').forEach(el => {
            el.classList.add('no-show')
        })
        document.querySelectorAll('.btn-2').forEach(el => {
            el.classList.add('no-show')
        })
        document.querySelectorAll('.btn-3').forEach(el => {
            el.classList.add('no-show')
        })
        document.querySelectorAll('.btn-4').forEach(el => {
            el.classList.add('no-show')
        })
        document.querySelectorAll('.btn-5').forEach(el => {
            el.classList.add('no-show')
        })
    }

    document.getElementById("title").innerHTML = "Finished! How did you do? :)";
    document.querySelector("#start").classList.add('no-show');
    document.querySelector('.text').classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var score = document.createElement("text");
    score.innerHTML = "Your final score is (#).";
    score.classList.add("text");
    score.classList.add("text-form");

    var formDiv = document.querySelector(".form");
    formDiv.classList.add("flex-record");

    var textTwo = document.createElement("text");
    textTwo.innerHTML = "Enter your initials";
    textTwo.classList.add("text");
    textTwo.classList.add("text-form");

    var inputForm = document.createElement("INPUT");
    inputForm.setAttribute("type", "text");
    inputForm.classList.add("input-box");

    var submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Submit";
    submitBtn.classList.add("btn");
    submitBtn.classList.add("submit-btn");
    submitBtn.setAttribute("type", "submit");

    contentDiv.appendChild(score);
    formDiv.appendChild(textTwo);
    formDiv.appendChild(inputForm);
    formDiv.appendChild(submitBtn);
};

function highScores() {
    document.getElementById("title").innerHTML = "High Scores";
    document.querySelector("#start").classList.add('no-show');
    document.querySelector('.text').classList.add('no-show');

    var contentDiv = document.querySelector(".content");

    var formDiv = document.querySelector(".form");
    formDiv.classList.add("flex-record");

    var scores = document.createElement("text");
    scores.innerHTML = "scores";
    scores.classList.add("scoresC");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Take again?";
    oneBtn.classList.add("btn", "hsBtn");
    
    var towBtn = document.createElement("button");
    towBtn.innerHTML = "Clear High Scores";
    towBtn.classList.add("btn", "hsBtn");
    

    contentDiv.appendChild(scores);
    formDiv.appendChild(oneBtn);
    formDiv.appendChild(towBtn);

    document.getElementById("vhs").disabled = true;
    oneBtn.addEventListener("click", () => questionOne('tryAgain'));
};

highScoresPage.addEventListener("click", highScores);
startBtn.addEventListener("click", questionOne);