var startBtn = document.querySelector("#start");
var highScoresPage = document.querySelector("#vhs");


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
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Boolean";
    twoBtn.classList.add("btn");

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "String";
    threeBtn.classList.add("btn");

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "Positive";
    fourBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);

    document.getElementById("vhs").disabled = true;

};

function questionTwo() {
    document.getElementById("title").innerHTML = "True or False: JavaScript is a case-sensitive language?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "True";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    towBtn.innerHTML = "False";
    twoBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
};

function questionThree() {
    document.getElementById("title").innerHTML = "Which of the following is a variable scope in JavaScript?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Local";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Server";
    twoBtn.classList.add("btn");

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "Storage";
    threeBtn.classList.add("btn");

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "World";
    fourBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);
};

function questionFour() {
    document.getElementById("title").innerHTML = "Which of the following is NOT a way JavaScript can be involved in an HTML file?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "Inline";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "Internal";
    twoBtn.classList.add("btn");

    var threeBtn = document.createElement("button");
    threeBtn.innerHTML = "External";
    threeBtn.classList.add("btn");

    var fourBtn = document.createElement("button");
    fourBtn.innerHTML = "Offline";
    fourBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
    contentDiv.appendChild(threeBtn);
    contentDiv.appendChild(fourBtn);
};

function questionFive() {
    document.getElementById("title").innerHTML = "True or False: Angular is a JavaScript framework?";
    document.querySelector('.text').classList.add('no-show');
    document.querySelector("#start").classList.add('no-show');

    var contentDiv = document.querySelector(".content");
    contentDiv.classList.add("flex-answers");

    var oneBtn = document.createElement("button");
    oneBtn.innerHTML = "True";
    oneBtn.classList.add("btn");

    var twoBtn = document.createElement("button");
    twoBtn.innerHTML = "False";
    twoBtn.classList.add("btn");

    contentDiv.appendChild(oneBtn);
    contentDiv.appendChild(twoBtn);
};

function done() {
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